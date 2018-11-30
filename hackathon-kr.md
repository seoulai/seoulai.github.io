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

# Overview

Seoul AI 는 12 월 15 일 토요일에 네 번째 AI 해커톤을 개최 합니다. 해커톤은 <a href="https://github.com/seoulai/gym">Seoul AI Gym</a>을 활용합니다. Gym 은 AI 알고리즘을 개발하기 위한 Seoul AI 의 새로운 툴킷이고, 다양한 환경을 시뮬레이션하며 에이전트에게 어떤 학습 기법도 적용할 수 있습니다.
이번 해커톤 참가자에게 주어지는 과제는 "알고리즘 트레이딩"을 수행하는 에이전트를 개발하는 것입니다. 각 참가자는 자신의 에이전트를 훈련 할 수있는 방법을 찾아서 적용해야 합니다.

# 대회 방식 
- 트레이딩 시간 : 10:00 - 18:50
- 모든 에어전트는 10 시에 가상의 100,000,000 KRW 를 지급 받습니다.
- 대회가 종료되는 18시 50분에 가장 큰 수익률을 기록한 에이전트가 우승합니다.

# 순위 산정 방식
- 수익률= (포트폴리오 가치 / 10,000,000 KRW) x 100 (%)
- 포트폴리오 가치 = 현금 + 잔고수량 x 현재가, 18시 50분 기준.
- 수익률이 0% 이하인 에이전트는 순위 산정에서 제외됩니다. 
- 동점자가 존재할 경우 거래 회수가 더 높은 에이전트 개발자가 우승합니다.

# Awards
우승자에게는 에어팟(AirPods)이 수여됩니다.

# 제약 조건
- <a href="http://bit.ly/seoulai_market_hackathon">Form</a>에 입력한 hackathon_id(agent_id)를 에이전트 클래스 생성 시에 정확하게 입력해야 합니다.
- 주문수량, 현금, 잔고 수량은 소수점 넷째 자리까지만 유효합니다.
- 매수주문은 매도 1호가, 매도주문은 매수 1호가로 100 % 체결됩니다. (technical information 참조)
- 매수, 매도 주문은 % 단위의 가능 수량으로만 매매 가능합니다. (technical information 참조)
- 매수, 매도 수수료는 5bp (0.05%) 로 계산합니다.
- 트레이딩 방식에는 제약조건이 없습니다. 강화학습, 룰 베이스, 직접 매매, 기타 다른 테크닉 등 모든 방법이 가능합니다.

# 일정

2018 년 12 월 15 일 토요일

- 10:00 - 10:15 Opening 
- 10:15 - 10:30 Seoul AI Gym 과 Market 소개
- 10:30 - 12:30 해킹
- 12:30 - 01:30 중식 (간단한 다과류)
- 01:30 - 06:50 해킹
- 06:50 - 07:00 우승자 발표

# 등록

모든 참가자는 <a href="http://bit.ly/seoulai_market_hackathon">Form</a>을 통해 agent_id(hackathon_id) 를 사전 등록해야 합니다.
문의사항은 seoul.ai.global@gmail 로 자유롭게 보내주세요.

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

다음 섹션에서는 Seoul AI Market 을 어떻게 설치하고 사용하는지 기술적으로 설명합니다.

최신 일자의 documentation은
[GitHub](https://github.com/seoulai/gym/blob/master/seoulai_gym/e
nvs/market/README.md). 에서 확인할 수 있습니다.

만약 문제가 발생한다면 
[GitHub issues](https://github.com/seoulai/gym/issues) 에서 issue를 작성해주시기 바랍니다.
기재된 이슈는 Seoul AI 팀이 가능한 빨리 해결하겠습니다.

Seoul AI Market environment 를 사용하기 위해서는 Python 3.6+. 버전이 필요합니다.

## Install

Seoul AI 팀은 PyPI package를 최신 일자로 유지할 것입니다. 최신 버전의 코드는 
[GitHub](https://github.com/seoulai/gym). 에서도 확인할 수 있습니다.

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

가장 중요한 컴포넌트는 Environment입니다.

Environment는 비트코인의 실시간 시장 상황(state)를 저장하고 Agent들이 Trading을 수행할 수 있도록 합니다.

{% highlight python %}

import seoulai_gym as gym

# Create Environment

env = gym.make("Market")

# Participate in Environment
# Id와 mode를 선택하고 환경에 참여해야 합니다.
# 현재 mode는LOCAL, HACKATHON 두 가지로 구성되어 있습니다.
# HACKATHON 모드로 알고리즘을 수행할 경우 트레이딩이 실제로 수행되어지고, 가상의 KRW와 잔고에 영향을 미치게 됩니다.

your_id = "seoul_ai"
mode = Constants.LOCAL
env.participate(your_id, mode)

# Reset Environment
# Reset은 비트코인 시장의 초기 상태를 받아오는 역할을 수행합니다.

obs = env.reset()

# obs
# obs는 observation을 의미합니다.
# obs에 포함된 데이터 셋은 다음과 같습니다.

order_book = # [매수1호가, 현재가, 매도1호가]
statistics = # {Agent가 사용할 수 있는 통계값}
agent_info = # {현금, 잔고수량}
portfolio_rets = # {알고리즘 수행에 따른 포트폴리오 지표}

# Agent 가 action을 만드는 과정은 다음과 같습니다.
action = a1.act(obs)

# act는 내부적으로 아래의 순서로 수행됩니다.
set_actions() = # 참여자가 Agent의 action을 직접 정의합니다.
preprocess() = # obs로 받아온 raw data를 정제합니다. obs 데이터 중 원하는 데이터를 선택, 생성하고 정규화를 수행하시길 권장합니다.
algo() = # 알고리즘 트레이딩 방식을 정의합니다.

# action을 Market으로 보내는 방법은 다음과 같습니다. 
obs, rewards, done, info = env.step(action)

{% endhighlight %}

## Agent
에이전트는 Market이라는 하나의 환경 속에서 REST API를 통해 실시간으로 학습합니다.

### Example

```python
```

## Environment variables

There are 4 important environment variables returned by
`step` method:

- `obs`

- `rewards`

- `done`

- `info`

```python
```

#### Example

```python
```

#### Example


```python
```

```python
```

### Reward (`rewards`)

Rewards for different situations in the game are
predefined within environment.

There are 7 different basic rewards that are
mutually exclusive.

Some rewards should be considered as "punishments"
(`invalid_move`, `move_opponent_piece`).

- `return_amt` - 

- `return_per` - agent attempted to make an [invalid
  move](#invalid-move)

- `return_sign` - agent attempted to move with
  opponent's piece

- `score_amt` - agent removed opponent's
  piece

- `score` - agent made move with piece that became
  king

In case you want to set your own rewards, you can do as
following:

```python
```

#### Invalid Actions 

- 현금이 1,000 KRW 미만인데 매수 주문을 낼 경우 
- 잔고 수량이 0인데 매도 주문을 낼 경우 

## End of game (`done`)

When game finished, environment returns `True` from
`step` method, otherwise `False`.

Agent that receives `True` won the game.

### Additional information (`info`)

{% endcapture %}

{% capture build_with %}

<footer class="footer">
    <p>Build with <span class="love">❤</span> by <a href="#" target="_blank">Imane</a></p>
</footer>
  
{% endcapture %}

{% include hackathon.html %}
