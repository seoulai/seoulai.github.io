---
layout: hackathon
title: SeoulAI Hackathon
date: Saturday, December 15, 2018 10:00:00 PM GMT+09:00
description: Seoul AI is hosting 4th AI hackathon on Saturday, December 15th. Hackathon is based on the new toolkit from Seoul AI Gym
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

# 소개

Seoul AI 는 12 월 15 일 토요일에 네 번째 AI 해커톤을 개최 합니다. 해커톤은 <a href="https://github.com/seoulai/gym">Seoul AI Gym</a>을 활용합니다.
이번 해커톤 참가자에게 주어지는 과제는 <a href="https://en.wikipedia.org/wiki/Algorithmic_trading">알고리즘 트레이딩</a>을 수행하는 에이전트를 개발하는 것입니다.
각 참가자는 자신의 에이전트를 훈련 할 수 있는 방법을 찾아서 적용해야 합니다. 에이전트는 Market이라는 하나의 환경 속에서 REST API를 통해 실시간으로 학습합니다.

# 대회 방식 

- 트레이딩 시간 : 10:00 - 18:50
- 모든 에이전트는 10 시에 가상의 100,000,000 KRW 를 지급 받습니다.
- 대회가 종료되는 18시 50분에 가장 큰 수익률을 기록한 에이전트가 우승합니다.

# 수상

우승자에게 애플 에어팟(AirPods)이 수여됩니다.

# 등록

모든 참가자는 <a href="http://bit.ly/seoulai_market_hackathon">Form</a>을 통해 hackathon_id(agent_id) 를 사전 등록해야 합니다.
문의사항은 seoul.ai.global@gmail.com 로 자유롭게 보내주세요.

# 심사 기준

- 수익률= (포트폴리오 가치 / 10,000,000 KRW) x 100 (%)
- 포트폴리오 가치 = 현금 + 잔고수량 x 현재가, 18시 50분 기준.
- 수익률이 0% 이하인 에이전트는 수상에서 제외됩니다. 
- 동점자가 존재할 경우 거래 횟수가 더 높은 에이전트가 우승합니다.

# 제약 조건

- <a href="http://bit.ly/seoulai_market_hackathon">Form</a>에 입력한 hackathon_id(agent_id)를 에이전트 클래스 생성 시에 정확하게 입력해야 합니다.
- 주문수량, 현금, 잔고 수량은 소수점 넷째 자리 까지만 유효합니다.
- 매수 주문은 매도 1호가, 매도 주문은 매수 1호가로 100 % 체결됩니다. (technical information 참조)
- 매수, 매도 주문은 % 단위의 가능 수량으로만 매매 가능합니다. (technical information 참조)
- 매수, 매도 수수료는 5bp (0.05%) 로 계산합니다.
- 현금이 1,000 KRW 미만일 때 매수 주문을 낼 경우, 자동으로 hold 주문으로 변경됩니다. (최소 주문 금액 1,000 KRW)
- 잔고 수량이 0인데 매도 주문을 낼 경우, 자동으로 hold 주문으로 변경됩니다.
- 트레이딩 방식에는 제약 조건이 없습니다. 강화학습, 룰 베이스, 직접 매매, 기타 다른 테크닉 등 모든 방법이 가능합니다.

# 일정

2018 년 12 월 15 일 토요일

- 10:00 - 10:15 Opening 
- 10:15 - 10:30 Seoul AI Gym 과 Market 소개
- 10:30 - 12:30 해킹
- 12:30 - 13:30 중식 (간단한 다과류)
- 13:30 - 18:50 해킹
- 18:50 - 19:00 우승자 발표

# 위치

하이퍼커넥트
서울시 서초구 서초대로 78 길 5, 대각빌딩 14 층

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.4515690893822!2d127.02735559999999!3d37.4972664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a2f9719ab%3A0x20210a76b2b256f7!2z64yA6rCB67mM65Sp!5e0!3m2!1sen!2s!4v1508801167955" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe>

# 행사장

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

# 스폰서

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

{% highlight python %}

import seoulai_gym as gym
from itertools import count
from seoulai_gym.envs.market.base import Constants

your_id = "seoul_ai"
mode = Constants.LOCAL

# 개발한 에이전트를 생성합니다.
a1 = YourAgentClassName(
     your_id,
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
    obs, rewards, done, _ = env.step(**action)
    
    # reward 재정의와 사용자 정의 함수 사용은 postprocess를 통해서 수행하길 권장합니다.
    a1.postprocess(obs, action, next_obs, rewards)

{% endhighlight %}

## 세부사항 

### mode

- 현재 mode는 LOCAL, HACKATHON 두 가지로 구성되어 있습니다.
- HACKATHON mode로 알고리즘을 수행할 경우 트레이딩이 실제로 일어나고, Seoul AI에서 제공한 가상의 KRW와 잔고에 영향을 미치게 됩니다.
- 따라서 LOCAL mode에서 충분히 테스트를 진행한 후 HACKATHON mode로 전환하길 권장합니다.

#### LOCAL mode 예제 1

```python
your_id = "seoul_ai"
mode = Constants.LOCAL

env = gym.make("Market")
env.participate(your_id, mode)

# LOCAL에서 reset을 수행하면 현금과 잔고 수량이 각각 100,000,000 KRW, 0.0 으로 초기화됩니다.
obs = env.reset()

for t in count():
    action = a1.act(obs)
    next_obs, rewards, done, _ = env.step(**action)    # action 은 dictionary 입니다.
    a1.postprocess(obs, action, next_obs, rewards)
```

#### LOCAL mode 예제 2

```python
your_id = "seoul_ai"
mode = Constants.LOCAL

env = gym.make("Market")
env.participate(your_id, mode)

obs = env.reset()

# LOCAL mode에서는 Episodes를 활용해 동일한 시나리오를 반복적으로 학습할 수 있습니다.
EPISODES = 100
for e in EPISODES: 
    for t in count():
        action = a1.act(obs)
        next_obs, rewards, done, _ = env.step(**action)    # action 은 dictionary 입니다.
        a1.postprocess(obs, action, next_obs, rewards)
    
        # Local에 저장된 데이터를 모두 학습하면 게임이 끝납니다.
        if done:
            break
```

#### HACKATHON mode 예제

```python
your_id = "seoul_ai"
mode = Constants.HACKATHON

env = gym.make("Market")
env.participate(your_id, mode)

# HACKATHON mode의 reset에서는 서버에서 현금과 잔고 수량을 가져옵니다.
# LOCAL에서 reset을 수행하면 현금과 잔고 수량이 초기화되는 것과는 다릅니다.
obs = env.reset()

# Episodes를 활용한 반복 학습은 불가합니다.
for t in count():
    action = a1.act(obs)
    next_obs, rewards, done, _ = env.step(**action)    # action 은 dictionary 입니다.
    a1.postprocess(obs, action, next_obs, rewards)
```

### act

```python
action = a1.act(obs)
```

act는 내부적으로 아래의 순서로 수행됩니다.
- preprocess() = obs로 받아온 raw data를 state로 변환합니다. 
- algo() = 참여자가 정의한 방식대로 트레이딩을 수행합니다.

    
### step
step 함수는 크립토의 실시간 시장 상황(state)을 전달하고, 에이전트들은 실시간 시장 상황(state)를 활용해 트레이딩을 수행합니다.
step 함수를 수행하면 세 가지 변수를 return 받습니다.

#### `obs`
obs는 observation을 의미합니다.
obs에 포함된 데이터 셋은 다음과 같습니다.

```python
order_book = obs.get("order_book")    # [매수1호가, 매수 1호가 잔량, 매도1호가, 매도 1호가 잔량]
trade = obs.get("trade")    # {현재가, 거래량}
statistics = obs.get("statistics")    # {에이전트가 사용할 수 있는 통계값}
agent_info = obs.get("agent_info")    # {현금, 잔고수량}
portfolio_rets = obs.get("portfolio_rets")    # {알고리즘 수행에 따른 포트폴리오 지표}
```
#### `rewards`
기본적으로 아래의 6 가지 rewards가 제공됩니다.

```python
rewards = dict(
    return_amt=return_amt,    # 현재 action으로 발생한 수익 금액
    return_per=return_per,    # 현재 action으로 발생한 수익률 = (현재 포트폴리오 가치 / 이전 포트폴리오 가치-1) x 100 (%)
    return_sign=return_sign,    # 현재 action으로 수익이 발생했다면 1점, 손해가 발생했다면 -1점, 변화가 없다면 0점
    hit=hit,    # 매수 후 가격이 올라가거나 매도 후 가격이 내려간다면 1점, 나머지 경우엔 0점.
    score_amt=score_amt,    # 초기 자본(100,000,000 KRW) 대비 현재까지 발생한 수익(혹은 손익) 금액
    score=score)    # 초기 자본(100,000,000 KRW) 대비 현재까지 발생한 수익(혹은 손익) 률(%)
```

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
    ...
```

#### set_actions 함수 정의
참가자는 반드시 set_actions 함수를 정의해야 합니다.
actions는 딕셔너리 형태로 정의하고 마지막에 반드시 return 해야 합니다.

```python
class YourAgentClassName(Agent):

    def set_actions(
        self,
    )->dict:

        your_actions = {}

        """ 딕셔너리의 key는 action name, value는 order_percent를 입력합니다.
            action name은 참여자가 원하는 어떤 이름을 사용해도 무방합니다.
            order_percent는 -100 이상 100 이하의 정수를 입력해야 합니다. (-100 <= order_percent <= 100)
            order_percent가 + 값이면 매수, - 값이면 매도를 의미합니다.
            매수 주문은 매도 1호가, 매도 주문은 매수 1호가로 100% 체결됩니다. """

        your_actions = dict(
            holding = 0,
            buy_all = +100,    # buy_all 이라는 이름으로 매수 가능 수량의 100%를 매수할 것임을 의미합니다.
            sell_20per = -20,  # sell_20per 이라는 이름으로 매도 가능 수량의 20%를 매도할 것임을 의미합니다.
        )
        return your_actions    # 정의한 actions 딕셔너리를 반드시 리턴해야 함.
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

#### algo (알고리즘 정의)
어떤 조건에 따라 트레이딩을 수행할지 정의하는 함수입니다.

```python
    def algo(
        self,
        state,
    ):
        if state["buy_signal"]:
            # set_actions에서 정의한 action_name을 파라미터로 입력해야 합니다. 
            return self.action("buy_all")
        elif state["sell_signal"]:
            return self.action("sell_20per")
        else:
            return self.action(0)    # set_actions에서 정의한 action_name의 index를 파라미터로 입력 할 수 있습니다.
```

#### postprocess (데이터 후처리)
postprocess 함수를 통해 rewards를 재정의 할 수 있습니다.
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

#### DQN 예제
<a href="https://github.com/seoulai/gym/blob/market/examples/market/dqn_example.py">dqn_example.py</a>

#### 룰 베이스 예제
<a href="https://github.com/seoulai/gym/blob/market/examples/market/mean_reverting_example.py">mean_reverting_example.py</a>

{% endcapture %}

{% capture build_with %}

<footer class="footer">
    <p>Build with <span class="love">❤</span> by <a href="#" target="_blank">Imane</a></p>
</footer>
  
{% endcapture %}

{% include hackathon.html %}
