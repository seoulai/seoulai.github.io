---
title:  "Technical information - Trading"
date:   2018-12-01 00:0:00 +0000
disqus_identifier: 2018-12-01
author: James Park
comments: true
description: 
featured_image: '/images/blog/blog3.png'
---

# Technical information

You can check our latest documentation on [GitHub](https://github.com/seoulai/gym/tree/market/seoulai_gym/envs/market/README.md). If you encounter any issues, please create an issue on [GitHub Issues](https://github.com/seoulai/gym/issues) and we will try to take care of it as soon as possible.

You will need Python v 3.6 to run the Seoul AI Market environment.

## Installation

install from source.

```bash
virtualenv -p python3.6 your_virtual_env
source your_virtual_env/bin/activate

git clone -b market https://github.com/seoulai/gym.git

cd gym

pip3 install -e .
```

## Seoul AI Market Framework

Seoul AI Market is based on a real-time <a href="https://en.wikipedia.org/wiki/Reinforcement_learning">reinforcement learning</a>.

```python
import seoulai_gym as gym
from itertools import count
from seoulai_gym.envs.market.base import Constants

your_id = "seoul_ai"
mode = Constants.LOCAL

# Create your agent.

a1 = YourAgentClassName(
your_id,
)

# Create your market environment.

env = gym.make("Market")

# Select your id and mode to participate

env.participate(your_id, mode)

# reset fetches the initial state of the crypto market.

obs = env.reset()

# Perform real-time reinforcement learning

for t in count(): # Call act for the agent to take an action
action = a1.act(obs)
  
 # To send your action to market:  
 obs, rewards, done, \_ = env.step(\*\*action)
  
 # We recommend that rewards override user-defined fuctions
a1.postprocess(obs, action, next_obs, rewards)

```


## Setup details

### mode

- There are 2 modes: LOCAL and HACKATHON.
- Your agent will start trading in HACKATHON mode. This will affect the virtual KRW balance provided by Seoul AI.
- You can train your agent in the LOCAL mode. We advice you to train your agent before trying out the HACKATHON mode.

#### LOCAL mode Example 1

```python
your_id = "seoul_ai"
mode = Constants.LOCAL

env = gym.make("Market")
env.participate(your_id, mode)

# IF you call reset in LOCAL, your cash and balance 
# will be updated to 100,000,000 KRW and 0.0 respectively.
obs = env.reset()

for t in count():
    action = a1.act(obs)
    # action is in dictionary format.
    next_obs, rewards, done, _ = env.step(**action)   
    a1.postprocess(obs, action, next_obs, rewards)
```

#### LOCAL mode Example 2

```python
your_id = "seoul_ai"
mode = Constants.LOCAL

env = gym.make("Market")
env.participate(your_id, mode)

# You can use Episodes under LOCAL mode to train similar scenarios.
EPISODES = 100
for e in range(EPISODES):
    obs = env.reset()

    for t in count():
        action = a1.act(obs)
        # action is in dictionary format.
        next_obs, rewards, done, _ = env.step(**action)    
        a1.postprocess(obs, action, next_obs, rewards)

        # The game ends once the agent has been trained on 
        # all Local data
        if done:
            break
```

#### HACKATHON mode Example

```python
your_id = "seoul_ai"
mode = Constants.HACKATHON

env = gym.make("Market")
env.participate(your_id, mode)

# Calling reset in HACKATHON mode fetches the 
# cash and balance
# It is different from calling reset in LOCAL 
# as your cash and balance will not be reset.
obs = env.reset()


# You cannot train with Episodes in HACKATHON mode.
for t in count():
    action = a1.act(obs)
    # action is in dictionary format.
    next_obs, rewards, done, _ = env.step(**action)    
    a1.postprocess(obs, action, next_obs, rewards)
```

### act

```python
action = a1.act(obs)
```

The act function calls the following functions.

- preprocess() = changes raw data fetched by obs to state
- algo() = performs training as defined by the participant.

### step

The step function fetches and saves the crypto market state so that the agent may start trading. This function returns 3 variables.

#### `obs`

obs is short for observation.
The datasets in obs are as follows:

```python
# [First buy price, Remain quantity, First sell price, Remain quantity]
order_book = obs.get("order_book")
# {Current price, Volume}
trade = obs.get("trade")  
# {Statistical value for agent's use}  
statistics = obs.get("statistics")
# {Cash, balance amount}   
agent_info = obs.get("agent_info")
# {Portfolio indicators based on algorithm performance}  
portfolio_rets = obs.get("portfolio_rets")    
```

#### `rewards`

There are 6 types of rewards

```python
rewards = dict(
    # Revenue from current action
    return_amt=return_amt,
    # Yield from current action 
    # (current value of portfolio/ previous value of portfolio -1) * 100(%)    
    return_per=return_per,
    # 1 if profited from current action. 
    # -1 if loss. 0 if no change.    
    return_sign=return_sign,
    # 1 if you buy and price goes up or you sell 
    # and price goes down. else 0.    
    hit=hit,
    # Amount of revenue (or profit or loss) incurred to date relative 
    # to initial capital (100,000,000 KRW)
    score_amt=score_amt,
    # Revenue (or profit or loss) incurred to date relative 
    # to initial capital (100,000,000 KRW) (%)
    score=score)    
```

#### `done`

The value of done is always False under HACKATHON mode.

### Developing Agent class

#### Creating your agent

```python
import seoulai_gym as gym
from seoulai_gym.envs.market.agents import Agent

# Your agent must inherit from Seoul AI's agent class
class YourAgentClassName(Agent):
    ...
```

#### set_actions function definition

All participants must define the set_action function.
actions must be in dictionary form and must be returned.

```python
class YourAgentClassName(Agent):

    def set_actions(
        self,
    )->dict:

        your_actions = {}

        """
        The dictionary's key is action name, value is order_percent.
        action name is named by the participant
        order_percent takes value between -100 and 100
        order_percent values + represents to buy and - represents to sell.
       """

        your_actions = dict(
            holding = 0,
            # buy_all means that you will buy 
            # 100% of the purchase amount
            buy_all = +100,
            # sell_20per means you will sell 
            # 20% of the available volume 
            sell_20per = -20,  
        )
        # You must return the actions dictionary you defined.
        return your_actions    
```

#### preprocess

You can select your data from raw data (fetched by obs), and change it as you'd like. We encourage that you perform data normalization.

- preprocess is optional. If omitted, obs is entered as state.

```python
    def preprocess(
        self,
        obs,
    ):
        cur_price = self.cur_price
        ma10 = self.statistics.get("ma10")
        std10 = self.statistics.get("std10")
        thresh_hold = 1.0

        your_state = dict(
            buy_signal=(cur_price > ma10 + std10*thresh_hold),
            sell_signal=(cur_price < ma10 - std10*thresh_hold),
        )

        return your_state
```

#### algo (algorithm definition)

It is a function that defines the conditions for trading.

```python
    def algo(
        self,
        state,
    ):
        if state["buy_signal"]:
            # Enter action_name as a parameter of set_actions
            return self.action("buy_all")
        elif state["sell_signal"]:
            return self.action("sell_20per")
        else:
            # You can enter the index of the action_name defined 
            # in set_actions as a parameter.
            return self.action(0)    
```

#### postprocess

You can redifine rewards through the postprocess.

```python
    def postprocess(
        self,
        obs,
        action,
        next_obs,
        rewards,
    ):
        your_reward = 0

        decision = action.get("decision")
        trade = obs.get("trade")
        cur_price = trade.get("cur_price")

        next_trade = next_obs.get("trade")
        next_price = next_trade.get("cur_price")

        diff = next_price - cur_price

        if decision == Constants.BUY and diff > 0:
            your_reward = 1
        elif decision == Constants.SELL and diff < 0:
            your_reward = 1
```

#### DQN Example

<a href="https://github.com/seoulai/gym/blob/market/examples/market/dqn_example.py">dqn_example.py</a>

#### Rule based Example

<a href="https://github.com/seoulai/gym/blob/market/examples/market/mean_reverting_example.py">mean_reverting_example.py</a>

