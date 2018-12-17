---
title:  "기술 문서 - 트레이딩"
date:   2018-12-14 00:0:00 +0000
disqus_identifier: 2018-12-14
author: James Park
comments: true
description: 
featured_image: '/images/blog/blog3.png'
---


# Technical information

아래에서는 Seoul AI Market 을 어떻게 설치하고 사용하는지 기술적으로 설명합니다.
최신 일자의 documentation은
[GitHub](https://github.com/seoulai/gym/tree/market/seoulai_gym/envs/market/README.md). 에서 확인할 수 있습니다.
만약 문제가 발생한다면
[GitHub issues](https://github.com/seoulai/gym/issues) 에서 issue를 작성해주시기 바랍니다.
기재된 이슈는 Seoul AI 팀이 가능한 빨리 해결하겠습니다.
Seoul AI Market environment 를 사용하기 위해서는 3.6 버전 이상의 Python이 필요합니다.

## 설치

install from source.

```bash
virtualenv -p python3.6 your_virtual_env
source your_virtual_env/bin/activate

git clone -b market https://github.com/seoulai/gym.git

cd gym

pip3 install -e .
```

## Seoul AI Market 프레임워크

Seoul AI Market은 실시간 <a href="https://en.wikipedia.org/wiki/Reinforcement_learning">강화학습</a> 프레임워크를 지향합니다.

```python
import seoulai_gym as gym
from itertools import count
from seoulai_gym.envs.market.agents import Agent
from seoulai_gym.envs.market.base import Constants

class YourAgentClassName(Agent):
...

if __name__ == "__main__":
    your_id = "seoul_ai"
    mode = Constants.TEST

    # 액션 스페이스를 정의합니다.
    your_actions = dict(
        holding = 0,
        buy_1 = +1,
        sell_2 = -2,
    )
    
    # 개발한 에이전트를 생성합니다.
    a1 = YourAgentClassName(
    your_id,
    your_actions,
    )
    
    # Market 환경을 생성합니다.
    env = gym.make("Market")
    
    # id와 mode를 선택하고 환경에 참여(participate)해야 합니다.
    env.participate(your_id, mode)
    
    # reset은 크립토 시장의 초기 상태를 받아오는 역할을 수행합니다.
    obs = env.reset()
    
    # 실시간 강화학습을 위해 계속해서 반복문을 수행합니다.
    for t in count():
        # 에이전트 가 action을 수행하기 위해선 act 함수를 호출해야 합니다.
        action = a1.act(obs)
    
        # action을 Market으로 보내는 방법은 다음과 같습니다.
        next_obs, rewards, done, _ = env.step(**action)
    
        # reward 재정의와 사용자 정의 함수 사용은 postprocess를 통해서 수행하길 권장합니다.
        a1.postprocess(obs, action, next_obs, rewards)
```

## 세부사항

### mode

- 현재 mode는 TEST, HACKATHON 두 가지로 구성되어 있습니다.
- HACKATHON mode로 알고리즘을 수행할 경우 트레이딩이 실제로 일어나고, Seoul AI에서 제공한 가상의 KRW와 잔고에 영향을 미치게 됩니다.
- 따라서 TEST mode에서 충분히 테스트를 진행한 후 HACKATHON mode로 전환하길 권장합니다.

#### TEST mode의 env.reset() 

```python
your_id = "seoul_ai"
mode = Constants.TEST

env = gym.make("Market")
env.participate(your_id, mode)

# TEST에서 reset을 수행하면 현금과 잔고 수량이 각각 100,000,000 KRW, 0.0 으로 초기화됩니다.
obs = env.reset()
...
```

#### HACKATHON mode의 env.reset() 

```python
your_id = "seoul_ai"
mode = Constants.HACKATHON

env = gym.make("Market")
env.participate(your_id, mode)

# HACKATHON mode의 reset에서는 서버에서 현금과 잔고 수량을 가져옵니다.
# TEST mode 에서 reset을 수행하면 현금과 잔고 수량이 초기화되는 것과는 다릅니다.
obs = env.reset()
...
```

### act

```python
action = a1.act(obs)
```

act는 내부적으로 아래의 순서로 수행됩니다.

- preprocess() = obs로 받아온 raw data를 state로 변환합니다.
- algo() = 참여자가 정의한 방식대로 트레이딩을 수행합니다.

### step

step 함수는 크립토의 실시간 시장 상황을 전달하고, 에이전트들은 실시간 시장 상황를 활용해 트레이딩을 수행합니다.
step 함수를 수행하면 obs, rewards, done 세 가지 변수를 return 받습니다.

#### `obs`

obs는 observation을 의미합니다.
obs에 포함된 데이터 셋은 다음과 같습니다.

```python
order_book = obs.get("order_book")    # {타임스탬프, 매수1호가, 매수 1호가 잔량, 매도1호가, 매도 1호가 잔량}
trade = obs.get("trade")    # {타임스탬프, 체결가, 체결량, 매수매도구분, 체결번호} (최근 200개 시계열 데이터)
agent_info = obs.get("agent_info")    # {현금, 잔고수량}
portfolio_rets = obs.get("portfolio_rets")    # {알고리즘 수행에 따른 포트폴리오 지표}
```

#### `rewards`

기본적으로 아래 8 가지 rewards가 제공됩니다.

```python
rewards = dict(
    return_amt=return_amt,    # 현재 action으로 발생한 수익 금액
    return_per=return_per,    # 현재 action으로 발생한 수익률
    return_sign=return_sign,    # 현재 action으로 수익이 발생했다면 1점, 손해가 발생했다면 -1점, 변화가 없다면 0점
    fee=fee,    # 현재 action으로 발생한 수수료
    hit=hit,    # 매수 후 가격이 올라가거나 매도 후 가격이 내려간다면 1점, 나머지 경우엔 0점.
    real_hit=real_hit,    # 수수료를 고려한 hit 
    score_amt=score_amt,    # 초기 자본(100,000,000 KRW) 대비 현재까지 발생한 수익(혹은 손익) 금액
    score=score)    # 초기 자본(100,000,000 KRW) 대비 현재까지 발생한 수익(혹은 손익) 률(%)
```
계산식
* 포트폴리오 가치 = 현금 + (자산 수량 x 현재가)
* return_amt= 현재 포트폴리오 가치 - 이전 포트폴리오 가치 
* return_per = (return_amt / 이전 포트폴리오 가치) x 100 (%)
* fee = 거래 금액 x 수수료율 = (가격 x 거래 수량) x 0.0005
* score_amt = 현재 포트폴리오 가치 - 100,000,000 KRW
* score = (score_amt / 100,000,000 KRW) x 100 (%)

#### `done`

일반적인 강화학습에서는 게임의 끝(done)이 있으나, 이번 Hackathon에서는 게임이 끝나는 상황이 존재하지 않습니다.
따라서 done의 값은 항상 False입니다.

### 에이전트 클래스 개발

#### 에이전트 생성

```python
import seoulai_gym as gym
from seoulai_gym.envs.market.agents import Agent

# 에이전트 개발 시 Seoul AI의 에이전트 클래스를 반드시 상속받아야 합니다.
class YourAgentClassName(Agent):

    # 클래스 개발 시 4개의 함수를 정의해야 합니다.
    __init__()
    preprocess()
    algo()
    postprocess()
```

#### actions 딕셔너리 정의

참가자는 반드시 action을 딕셔너리 형태로 정의해야 합니다.

```python
def __init__(
    self,
    agent_id: str,
):  

    """ 딕셔너리의 key는 action name, value는 order parameters 를 입력합니다.
        action name은 참여자가 원하는 어떤 이름을 사용해도 무방합니다.
        매수 주문은 매도 1호가, 매도 주문은 매수 1호가로 100% 체결됩니다.
    """

    your_actions = dict(
        # hold 액션은 반드시 정의해야 합니다.
        holding = 0,

        # + 는 매수, - 는 매도를 의미합니다.
        buy_1 = +1,    # buy_1 이라는 이름으로 비트코인 1개를 매수할 것임을 의미합니다.
        sell_2 = -2,  # sell_2 이라는 이름으로 비트코인 2개를 매도할 것임을 의미합니다.
        
        # 소수점 4 자리까지 입력 가능 합니다.
        buy_1_2345 = +1.2345,    # buy_1_2345 이라는 이름으로 비트코인 1.2345 개를 매수할 것임을 의미합니다.
        sell_2_001 = -2.001,  # sell_2_001 이라는 이름으로 비트코인 2.001 개를 매도할 것임을 의미합니다.

        # % 단위로 액션을 정의할 수 있습니다. 단, -100 이상 100이하의 정수를 입력해야 합니다.
        buy_all = (+100, '%'),    # buy_all 이라는 이름으로 매수 가능 수량의 100% 를 매수할 것임을 의미합니다.
        sell_20per = (-20, '%'),     # sell_20per 이라는 이름으로 매도 가능 수량의 20% 를 매도할 것임을 의미합니다.
    )   
    super().__init__(agent_id, your_actions)
    ...
)
```

#### preprocess (데이터 전처리)

obs가 전달하는 raw data 중 필요한 데이터를 선택할 수 있고, 원하는 형태로 변경 가능합니다.
데이터 정규화를 수행하길 권장합니다.

- preprocess는 생략 가능합니다. 생략할 경우 obs는 그대로 state로 입력되어 집니다.

```python
    def preprocess(
        self,
        obs,
    ):
        # get data
        trades = obs.get("trade")

        # make your own data!
        price_list = trades.get("price")
        cur_price = price_list[0]
        price10 = price_list[:10]

        ma10 = np.mean(price10)
        std10 = np.std(price10)
        thresh_hold = 1.0

        # obs -> state
        your_state = dict(
            buy_signal=(cur_price > ma10 + std10*thresh_hold),
            sell_signal=(cur_price < ma10 - std10*thresh_hold),
        )

        return your_state
```

#### algo (알고리즘 정의)

어떤 조건에 따라 트레이딩을 수행할지 정의하는 함수입니다.
algo 함수는 반드시 self.action 함수를 리턴해야 합니다.

```python
    def algo(
        self,
        state,
    ):
        if state["buy_signal"]:
            # actions 딕셔너리에서 정의한 action_name을 파라미터로 입력해야 합니다.
            return self.action("buy_all")
        elif state["sell_signal"]:
            return self.action("sell_20per")
        else:
            return self.action(0)    # actions 딕셔너리에서 정의한 action_name의 index를 파라미터로 입력 할 수 있습니다.
```

#### postprocess (데이터 후처리)

postprocess 함수를 통해 reward를 선택하고, reward를 재정의 할 수 있습니다.

```python
    def postprocess(
        self,
        obs,
        action,
        next_obs,
        rewards,
    ):
        your_reward = 0

        # 선택
        your_rewards = rewards.get("hit")

        # 재정의
        trades = obs.get("trade")
        next_trades = next_obs.get("trade")

        cur_price = trades["price"][0]
        next_price = next_trade["price"][0]

        change_price = (next_price-cur_price)

        your_reward = np.sign(change_price)
```

#### DQN 예제

<a href="https://github.com/seoulai/gym/blob/market/examples/market/dqn_example.py">dqn_example.py</a>

#### 룰 베이스 예제

<a href="https://github.com/seoulai/gym/blob/market/examples/market/mean_reverting_example.py">mean_reverting_example.py</a>

#### 랜덤 에이전트 예제

<a href="https://github.com/seoulai/gym/blob/market/examples/market/random_agent_example.py">random_agent_example.py</a>
