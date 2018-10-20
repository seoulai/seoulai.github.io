---
layout: hackathon
title: SeoulAI Hackathon
date: Saturday, October 13, 2018 10:00:00 PM GMT+09:00
description: Seoul AI is hosting third AI hackathon on Saturday, October 13th. Hackathon is based on the new toolkit from Seoul AI Gym
tags:
  [
    Seoul,
    "Artificial Intelligence",
    meetup,
    AI,
    call,
    presenters,
    practioners,
    "Machine Learning",
    Korea,
    Gangnam,
    2017,
    2018,
    Hackathon,
  ]
---

{% capture event_info %}

# Overview

Seoul AI is hosting third AI hackathon on <b>Saturday, October 13th</b>.
Hackathon is based on the new toolkit from Seoul AI for developing AI algorithms: <a href="https://github.com/seoulai/gym">Seoul AI Gym</a>.
This gym simulates various environments and enables the use of any teaching technique on an agent.
The goal of every hackathon participant is to develop an agent that can play <a href="https://en.wikipedia.org/wiki/Draughts">Checkers</a>.
Each participant will train an agent to compete in a tournament.
We encourage participants to use any machine learning algorithm of their choice.
No particular training set will be given.
Each participant will have their own responsibility to find a way to train their own agent.

# Tournament

The competition will be a [Tournament Tree](<https://en.wikipedia.org/wiki/Bracket_(tournament)>) will be held in the following way:

- The Tournament Tree will be generated randomly.
- All trained agents will compete in 1v1 for several games during 1 minute. The winner will be the agent with the higher number of wins. In the case of an equality, the agent who won the first game will be the winner.
- Agents are allowed to learn during the competition.
- If an agent takes more than 1 seconds to act, random move will be perfomed automatically.

# Schedule

Saturday, October 13, 2018

- 10:00 - 10:15 Opening
- 10:15 - 10:30 Seoul AI Gym introduction + Checkers
- 10:30 - 12:30 Hacking
- 12:30 - 01:30 Lunch (provided by venue sponsor)
- 01:30 - 06:20 Hacking
- 06:20 - 06:50 Tournament
- 06:50 - 07:00 Winner announcement

# Registration

Every participant has to register through http://bit.ly/seoulai-hackathon. After we check your application you will receive email with confirmation.

If you have any question feel free to reach to martin@seoulai.com.

# Location

Hyperconnect
서울시 서초구 서초대로 78 길 5, 대각빌딩 14 층

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.4515690893822!2d127.02735559999999!3d37.4972664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a2f9719ab%3A0x20210a76b2b256f7!2z64yA6rCB67mM65Sp!5e0!3m2!1sen!2s!4v1508801167955" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe>

# Venue

<div class="user-projects">
  <div class="images-left">
    <a href="{{ "/assets/img/hackathon/venue1.jpg" | prepend: site.baseurl }}" target="_blank">
    <img src="{{ "/assets/img/hackathon/venue1.jpg" | prepend: site.baseurl }}" />
    </a>
  </div>
  <div class="images-right">
    <a href="{{ "/assets/img/hackathon/venue2.jpg" | prepend: site.baseurl }}" target="_blank">
    <img src="{{ "/assets/img/hackathon/venue2.jpg" | prepend: site.baseurl }}" />
    </a>
  </div>
</div>
<div class="user-projects">
  <div class="images-left">
    <a href="{{ "/assets/img/hackathon/venue3.jpg" | prepend: site.baseurl }}" target="_blank">
    <img src="{{ "/assets/img/hackathon/venue3.jpg" | prepend: site.baseurl }}" />
    </a>
  </div>
  <div class="images-right">
    <a href="{{ "/assets/img/hackathon/venue4.jpg" | prepend: site.baseurl }}" target="_blank">
    <img src="{{ "/assets/img/hackathon/venue4.jpg" | prepend: site.baseurl }}" />
    </a>
  </div>
</div>

# Sponsors

<div class="user-projects" style="vertical-align: center">
  <div class="images-left">
    <img src="{{ "/assets/img/hackathon/hpcnt.png" | prepend: site.baseurl }}" />
  </div>
  <div class="images-right">
    <img src="{{ "/assets/img/hackathon/aws.png" | prepend: site.baseurl }}" />
  </div>
</div>

{% endcapture %}

{% capture technical_info %}

# Technical information

Following sections describe how to install and use
Checkers environnment from Seoul AI Gym.

The latest up to date documentation you can find at
[GitHub](https://github.com/seoulai/gym/blob/master/seoulai_gym/e
nvs/checkers/README.md).

If you encounter any issue reach out for help through
[GitHub issues](https://github.com/seoulai/gym/issues)
and we will try to resolve your problem as soon as
possible.

Checkers environment requires Python 3.6+.

## Install

We try to keep PyPI package up to date, but the latest
version of the code can be always found at [GitHub](https://github.com/seoulai/gym).

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

The Environment stores the state of the game and allows
Agents to perform moves.

{% highlight python %}

import seoulai_gym as gym

# Create environment

env = gym.make("Checkers")

# Reset environment - run before every new game

obs = env.reset()

from_row = # row location of agent's piece

from_col = # column location of agent's piece

to_row = # new row location of agent's piece

to_col = # new column location of agent's piece

# Agent makes move from (from_row, from_col)

# position to (to_row, to_col) position using environment

obs, rew, done, info = env.step(agent, from_row,
from_col, to_row, to_col)

# Display state of game in graphically

env.render()

# Clean termination of environment

env.close()

{% endhighlight %}

## Agent

Environment enables two Agents to play checkers with
each other.

Agents take turns and if Agent attempts to make non
valid move, no move will be performed.

In such case opponent will make two moves in a row.

### Example with 2 random agents

```python
import seoulai_gym as gym

from seoulai_gym.envs.checkers.agents import
RandomAgentLight

from seoulai_gym.envs.checkers.agents import
RandomAgentDark





env = gym.make("Checkers")



a1 = RandomAgentLight("Agent 1")

a2 = RandomAgentDark("Agent 2")



obs = env.reset()



current_agent = a1

next_agent = a2



while True:

    from_row, from_col, to_row, to_col =
current_agent.act(obs)

    obs, rew, done, info = env.step(current_agent,
from_row, from_col, to_row, to_col)

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

There are 4 important environment variables returned by
`step` method:

- `obs`

- `rew`

- `done`

- `info`

### State of the game (`obs`)

State of the game (`obs`) is represented as `List[List [Piece]]`.

To enable easier manipulation (e.g. input to
convolutional network) with the state of game, we
provide [`board_list2numpy`]
(https://github.com/seoulai/gym/blob/master/seoulai_gym/e
nvs/checkers/utils.py#L67-L103) function that converts
state to 2D NumPy array.

```python
>>> from seoulai_gym.envs.checkers.utils import
board_list2numpy

>>> help(board_list2numpy)

Help on function board_list2numpy in module
seoulai_gym.envs.checkers.utils:



board_list2numpy(board_list, encoding)

    Convert the state of game (`board_list`) into 2D
NumPy Array using `encoding`.



    Args:

        board_list: (List[List[Piece]]) State of the
game.

        encoding: (BoardEncoding) Optional argument.

          If not given default encoding will be utilized.



    Returns:

        board_numpy: (np.array)
```

#### Example of converting state of the game with

_default_ encoding

```python
>>> from seoulai_gym.envs.checkers.utils import
board_list2numpy

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

#### Example of converting state of the game with

_modified_ encoding

```python
>>> from seoulai_gym.envs.checkers.utils import
board_list2numpy

>>> from seoulai_gym.envs.checkers.utils import
BoardEncoding

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

Rewards for different situations in the game are
predefined within environment.

There are 7 different reward situations that are
mutually exclusive.

Some rewards should be considered as "punishments"
(`invalid_move`, `move_opponent_piece`).

- `default` - agent performed a valid move

- `invalid_move` - agent attempted to make an [invalid
  move](#invalid-move)

- `move_opponent_piece` - agent attempted to move with
  opponent's piece

- `remove_opponent_piece` - agent removed opponent's
  piece

- `become_king` - agent made move with piece that became
  king

- `opponent_no_pieces` - opponent has no pieces left,
  current agent won game

- `opponent_no_valid_move` - opponent cannot move,
  current agent won game

In case you want to set your own rewards, you can do as
following:

```python
env = gym.make("Checkers")

rewards_map = {

  "default": 1.0,

  "invalid_move": 0.0,

}

env.update_rewards(rewards_map)
```

#### Invalid moves

- Location of piece out of boundaries (0 - 7)

- Move piece from empty location

- Move piece to taken position

- Move piece in location that is out for reach

To get valid moves for given `obs`, and `from_row`,
`from_col`, use [`get_valid_moves`]
(https://github.com/seoulai/gym/blob/master/seoulai_gym/e
nvs/checkers/rules.py#L64-L83).

### End of game (`done`)

When game finished, environment returns `True` from
`step` method, otherwise `False`.

Agent that receives `True` won the game.

### Additional information (`info`)

The last returned value from `step` method contains
additional information about performed move.

This is useful for debugging purposes or as a simple way
for exploring current move.

{% endcapture %}

{% capture build_with %}

<footer class="footer">
    <p>Build with <span class="love">❤</span> by <a href="#" target="_blank">Imane</a></p>
</footer>
  
{% endcapture %}

{% include hackathon.html %}
