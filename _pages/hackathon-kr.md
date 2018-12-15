---
title: SeoulAI Hackathon for Trading
subtitle: 
description: Seoul AI is hosting 4th AI hackathon on Saturday, December 15th. Hackathon is based on the new toolkit from Seoul AI Gym
---

<p>
<a href="/hackathon">영어</a> | <a href="/blog/4th-hackathon-technical-info-kr">해커톤 매뉴얼</a>
</p>

![](/images/hackathon/logo.png)

## 소개

Seoul AI 는 12 월 15 일 토요일에 네 번째 AI 해커톤을 개최합니다. 해커톤은 <a href="https://github.com/seoulai/gym">Seoul AI Gym</a>을 활용합니다.
이번 해커톤 참가자에게 주어지는 과제는 <a href="https://en.wikipedia.org/wiki/Algorithmic_trading">알고리즘 트레이딩</a>을 수행하는 에이전트를 개발하는 것입니다.
각 참가자는 자신의 에이전트를 훈련 할 수 있는 방법을 찾아서 적용해야 합니다. 에이전트는 Market이라는 하나의 환경 속에서 REST API를 통해 실시간으로 학습합니다.

## 대회 방식

- 트레이딩 시간 : 10:00 - 18:50
- 모든 에이전트는 10 시에 가상의 **100,000,000 KRW** 를 지급 받습니다.
- 대회가 종료되는 18시 50분에 가장 큰 수익률을 기록한 에이전트가 우승합니다.

## 수상

우승자에게 애플 에어팟(AirPods)이 수여됩니다.

## 등록

모든 참가자는 <a href="http://bit.ly/seoulai_market_hackathon">Form</a>을 통해 hackathon_id(agent_id) 를 사전 등록해야 합니다.
문의사항은 seoul.ai.global@gmail.com 로 자유롭게 보내주세요.

## 심사 기준

- 수익률= (포트폴리오 가치 / 10,000,000 KRW) x 100 (%)
- 포트폴리오 가치 = 현금 + 잔고수량 x 현재가, 18시 50분 기준.
- 수익률이 0% 이하인 에이전트는 수상에서 제외됩니다.
- 동점자가 존재할 경우 거래 횟수가 더 높은 에이전트가 우승합니다.

## 제약 조건

- <a href="http://bit.ly/seoulai_market_hackathon">Form</a>에 입력한 hackathon_id(agent_id)를 에이전트 클래스 생성 시에 정확하게 입력해야 합니다.
- 주문수량, 현금, 잔고 수량은 소수점 넷째 자리 까지만 유효합니다.
- 매수 주문은 매도 1호가, 매도 주문은 매수 1호가로 100 % 체결됩니다. (technical information 참조)
- 매수, 매도 주문은 % 단위의 가능 수량으로만 매매 가능합니다. (technical information 참조)
- 매수, 매도 수수료는 5bp (0.05%) 로 계산합니다.
- 현금이 1,000 KRW 미만일 때 매수 주문을 낼 경우, 자동으로 hold 주문으로 변경됩니다. (최소 주문 금액 1,000 KRW)
- 잔고 수량이 0인데 매도 주문을 낼 경우, 자동으로 hold 주문으로 변경됩니다.
- 트레이딩 방식에는 제약 조건이 없습니다. 강화학습, 룰 베이스, 직접 매매, 기타 다른 테크닉 등 모든 방법이 가능합니다.

## 일정

2018 년 12 월 15 일 토요일

- 10:00 - 10:15 Opening
- 10:15 - 10:30 Seoul AI Gym 과 Market 소개
- 10:30 - 12:30 해킹
- 12:30 - 13:30 중식 (간단한 다과류)
- 13:30 - 18:50 해킹
- 18:50 - 19:00 우승자 발표

## 위치

하이퍼커넥트

서울시 서초구 서초대로 78 길 5, 대각빌딩 14 층


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.4515690893822!2d127.02735559999999!3d37.4972664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a2f9719ab%3A0x20210a76b2b256f7!2z64yA6rCB67mM65Sp!5e0!3m2!1sen!2s!4v1508801167955" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe>

## 행사장

<div class="gallery" data-columns="2">
    <img src="{{ "/images/hackathon/venue1.jpg" | prepend: site.baseurl }}" />
    <img src="{{ "/images/hackathon/venue2.jpg" | prepend: site.baseurl }}" />
    <img src="{{ "/images/hackathon/venue3.jpg" | prepend: site.baseurl }}" />
    <img src="{{ "/images/hackathon/venue4.jpg" | prepend: site.baseurl }}" />
</div>


## 스폰서

<div class="gallery" data-columns="3">
    <img src="{{ "/images/hackathon/hpcnt.png" | prepend: site.baseurl }}" />
    <img src="{{ "/images/hackathon/aws.png" | prepend: site.baseurl }}" />
    <img src="{{ "/images/hackathon/wingeat.png" | prepend: site.baseurl }}" />
</div>
