---
layout: hackathon
summary: Seoul AI is hosting third AI hackathon on Saturday, October 13th. Hackathon is based on the new toolkit from Seoul AI for developing AI algorithms - Seoul AI Gym. This gym simulates various environments and enables the use of any teaching technique on an agent. The goal of every hackathon participant is to develop an agent that can play Checkers. Each participant will train an agent to compete in a tournament. We encourage participants to use any machine learning algorithm of their choice. No particular training set will be given. Each participant will have their own responsibility to find a way to train their own agent.
tags: [Seoul,"Artificial Intelligence",meetup,AI,call,presenters,practioners,"Machine Learning",Korea,Gangnam,2017,2018,Hackathon]
---
# Technical information
Following sections describe how to install and use Checkers environnment from Seoul AI Gym.
The latest up to date documentation you can find at [GitHub](https://github.com/seoulai/gym/blob/master/seoulai_gym/envs/checkers/README.md).

If you encounter any issue reach out for help through [GitHub issues](https://github.com/seoulai/gym/issues) and we will try to resolve your problem as soon as possible.


Checkers environment requires Python 3.6+.

## Install
We try to keep PyPI package up to date, but the latest version of the code can be always found at [GitHub](https://github.com/seoulai/gym).

Install through PyPI
```bash
pip install seoulai_gym
```

or install from source.
```bash
git clone https://github.com/seoulai/gym.git
cd gym
pip3 install -e
```


## Environment
The main game component is Environment.
The Environment stores the state of the game and allows Agents to perform moves.

{% highlight python %}
import seoulai_gym as gym

# Create environment
env = gym.make("Checkers")

# Reset environment - run before every new game
obs = env.reset()

from_row =  # row location of agent's piece
from_col =  # column location of agent's piece
to_row =  # new row location of agent's piece
to_col = # new column location of agent's piece

# Agent makes move from (from_row, from_col)
# position to (to_row, to_col) position using environment
obs, rew, done, info = env.step(agent, from_row, from_col, to_row, to_col)

# Display state of game in graphically
env.render()

# Clean termination of environment
env.close()
{% endhighlight %}

## Agent
Environment enables two Agents to play checkers with each other.
Agents take turns and if Agent attempts to make non valid move, no move will be performed.
In such case opponent will make two moves in a row.


### Example with 2 random agents
```python
import seoulai_gym as gym
from seoulai_gym.envs.checkers.agents import RandomAgentLight
from seoulai_gym.envs.checkers.agents import RandomAgentDark


env = gym.make("Checkers")

a1 = RandomAgentLight("Agent 1")
a2 = RandomAgentDark("Agent 2")

obs = env.reset()

current_agent = a1
next_agent = a2

while True:
    from_row, from_col, to_row, to_col = current_agent.act(obs)
    obs, rew, done, info = env.step(current_agent, from_row, from_col, to_row, to_col)
    current_agent.consume(obs, rew, done)

    if done:
        print(f"Game over! {current_agent} agent wins.")
        obs = env.reset()

    # switch agents
    temporary_agent = current_agent
    current_agent = next_agent
    next_agent = temporary_agent

    env.render()

env.close()
```

## Environment variables
There are 4 important environment variables returned by `step` method:
* `obs`
* `rew`
* `done`
* `info`

### State of the game (`obs`)
State of the game (`obs`) is represented as `List[List[Piece]]`.
To enable easier manipulation (e.g. input to convolutional network) with the state of game, we provide [`board_list2numpy`](https://github.com/seoulai/gym/blob/master/seoulai_gym/envs/checkers/utils.py#L67-L103) function that converts state to 2D NumPy array.


```python
>>> from seoulai_gym.envs.checkers.utils import board_list2numpy
>>> help(board_list2numpy)
Help on function board_list2numpy in module seoulai_gym.envs.checkers.utils:

board_list2numpy(board_list, encoding)
    Convert the state of game (`board_list`) into 2D NumPy Array using `encoding`.

    Args:
        board_list: (List[List[Piece]]) State of the game.
        encoding: (BoardEncoding) Optional argument.
          If not given default encoding will be utilized.

    Returns:
        board_numpy: (np.array)
```

#### Example of converting state of the game with *default* encoding
```python
>>> from seoulai_gym.envs.checkers.utils import board_list2numpy
>>> board_numpy = board_list2numpy(obs)
```

```python
array([[10.,  0., 10.,  0., 10.,  0., 10.,  0.],
       [ 0., 10.,  0., 10.,  0., 10.,  0., 10.],
       [10.,  0., 10.,  0., 10.,  0., 10.,  0.],
       [ 0.,  0.,  0.,  0.,  0.,  0.,  0.,  0.],
       [ 0.,  0.,  0.,  0.,  0.,  0., 20.,  0.],
       [ 0., 20.,  0., 20.,  0., 20.,  0.,  0.],
       [20.,  0., 20.,  0., 20.,  0., 20.,  0.],
       [ 0., 20.,  0., 20.,  0., 20.,  0., 20.]])
```

#### Example of converting state of the game with *modified* encoding
```python
>>> from seoulai_gym.envs.checkers.utils import board_list2numpy
>>> from seoulai_gym.envs.checkers.utils import BoardEncoding
>>> enc = BoardEncoding()
>>> enc.dark = 99
>>> enc.light = 33
>>> board_numpy = board_list2numpy(obs, enc)
```

```python
array([[99.,  0., 99.,  0., 99.,  0., 99.,  0.],
       [ 0., 99.,  0., 99.,  0., 99.,  0., 99.],
       [99.,  0., 99.,  0., 99.,  0., 99.,  0.],
       [ 0.,  0.,  0.,  0.,  0.,  0.,  0.,  0.],
       [ 0.,  0.,  0.,  0.,  0.,  0., 33.,  0.],
       [ 0., 33.,  0., 33.,  0., 33.,  0.,  0.],
       [33.,  0., 33.,  0., 33.,  0., 33.,  0.],
       [ 0., 33.,  0., 33.,  0., 33.,  0., 33.]])
```

### Reward (`rew`)
Rewards for different situations in the game are predefined within environment.
There are 7 different reward situations that are mutually exclusive.
Some rewards should be considered as "punishments" (`invalid_move`, `move_opponent_piece`).

* `default` - agent performed a valid move
* `invalid_move` - agent attempted to make an [invalid move](#invalid-move)
* `move_opponent_piece` - agent attempted to move with opponent's piece
* `remove_opponent_piece` - agent removed opponent's piece
* `become_king` - agent made move with piece that became king
* `opponent_no_pieces` - opponent has no pieces left, current agent won game
* `opponent_no_valid_move` - opponent cannot move, current agent won game

In case you want to set your own rewards, you can do as following:

```python
env = gym.make("Checkers")
rewards_map = {
  "default": 1.0,
  "invalid_move": 0.0,
}
env.update_rewards(rewards_map)
```

#### Invalid moves
* Location of piece out of boundaries (0 - 7)
* Move piece from empty location
* Move piece to taken position
* Move piece in location that is out for reach

To get valid moves for given `obs`, and `from_row`, `from_col`, use [`get_valid_moves`](https://github.com/seoulai/gym/blob/master/seoulai_gym/envs/checkers/rules.py#L64-L83).

### End of game (`done`)
When game finished, environment returns `True` from `step` method, otherwise `False`.
Agent that receives `True` won the game.

### Additional information (`info`)
The last returned value from `step` method contains additional information about performed move.
This is useful for debugging purposes or as a simple way for exploring current move.
