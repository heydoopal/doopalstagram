# <span style="color:#83B4FF"> Swiper 라이브러리 써보기! </span>

### 🐱 두팔스타그램

![](https://velog.velcdn.com/images/zidoopal/post/de58d384-0c62-46be-b8fa-0c85479cb15f/image.gif)

- 사용자의 프로필과 사진 갤러리를 포함한 소셜 미디어 플랫폼의 일부 기능 구현
- 기본적인 소셜 미디어 플랫폼의 기능을 학습하고 연습하기 위한 목적으로 제작
- 사용자 상호작용과 상태 저장을 위한 라이브러리(Swiper.js, js-confetti)사용
- 로컬 스토리지를 사용하여 사용자의 활동을 기억

<br>

![](https://velog.velcdn.com/images/zidoopal/post/413d0577-c22e-4127-b8b3-3cd85dbb32a5/image.png)

- 모바일 반응형 페이지

<br>

#### 폴더구조

```
📦swiper
 ┣ 📂assets
 ┣ 📂js
 ┃ ┣ 📜buttonHandlers.js
 ┃ ┣ 📜data.js
 ┃ ┣ 📜main.js
 ┃ ┗ 📜swiper.js
 ┣ 📂style
 ┃ ┗ 📜style.css
 ┣ 📜index.html
 ┗ 📜README.md
```

<br>

## 🤯

- 짧은 시간 안에 라이브러리를 사용해서 완성시킬 수 있는 걸 생각해보니 역시 갤러리 같은 형식이 가장 쉽고 빠르게 만들어낼 수 있을 것 같았음
- 근데 그냥 앨범같은 갤러리 형식은 너무 흔해서 딱히 재밌는 요소가 없을 것 같고, 다른 걸 추가하기엔 시간이 매우 부족했음 ㅠ
- 그래서 수업시간에 배운 내용(storage 관련)도 넣어보고 함수도 또 만들어보고 할 수 있을 것 같은 인스타그램st를 만들어보기로 함.

  - star 버튼이나 follow 버튼 상태를 로컬 스토리지에 저장시켜서 새로고침해도 상태가 남아있을 수 있게 함

  <br>

## 🤔

- 사진을 누르면 페이지가 이동되거나 다른 이벤트가 있으면 좋겠는데 그저 슬라이드 뿐이라 너무 아쉽
- 팔로워 수도 그냥 하드 코딩한거 버튼 누르면 +1 하는 거라 나중엔 서버에서 내용 저장하고 받아오는 거로 구현해보고 싶당.
- html CSS 오랜만에 보니까 진짜 하나도 모르겠다 큰일났다. 어떡하지;
- js는 더 어쩌지..ㅎ
