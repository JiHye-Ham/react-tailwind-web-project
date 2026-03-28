# React-Tailwind-Web-Project

리액트, TypeScript, Tailwind를 사용하여 만든 웹 쇼핑몰 프로젝트입니다.<br />
배포 사이트 : https://react-tailwind-web-project.vercel.app/

# 주요기능

모달창, 로그인, 장바구니, 이미지 슬라이드, 반응형 레이아웃<br />

# 기술 스택

HTML5, React, TypeScript, Tailwind, Router, Redux Toolkit, LocalStorage, react-hook-form


# 폴더 구조
📦public<br />
 ┣ 📂img<br />
 ┃ ┣ 📂hero<br />
 ┃ ┃ ┣ 📜hero_img1.jpg<br />
 ┃ ┃ ┣ 📜hero_img2.jpg<br />
 ┃ ┃ ┗ 📜hero_img3.jpg<br />
 ┃ ┗ 📂products<br />
 ┃ ┃ ┣ 📜product1.jpg<br />
 ┃ ┃ ┣ 📜product2.jpg<br />
 ┃ ┃ ┣ 📜product3.jpg<br />
 ┃ ┃ ┣ 📜product4.jpg<br />
 ┃ ┃ ┣ 📜product5.jpg<br />
 ┃ ┃ ┣ 📜product6.jpg<br />
 ┃ ┃ ┣ 📜product7.jpg<br />
 ┃ ┃ ┣ 📜product8.jpg<br />
 ┃ ┃ ┗ 📜product9.jpg<br />
📦src<br />
 ┣ 📂app<br />
 ┃ ┗ 📜store.ts<br />
 ┣ 📂components<br />
 ┃ ┣ 📜Footer.tsx<br />
 ┃ ┣ 📜Header.tsx<br />
 ┃ ┣ 📜Hero.tsx<br />
 ┃ ┣ 📜Modal.tsx<br />
 ┃ ┗ 📜ProductCard.tsx<br />
 ┣ 📂data<br />
 ┃ ┣ 📜products.ts<br />
 ┃ ┗ 📜users.ts<br />
 ┣ 📂features<br />
 ┃ ┣ 📂auth<br />
 ┃ ┃ ┗ 📜authSlice.ts<br />
 ┃ ┗ 📂cart<br />
 ┃ ┃ ┗ 📜cartSlice.ts<br />
 ┣ 📂pages<br />
 ┃ ┣ 📜Category.tsx<br />
 ┃ ┣ 📜Home.tsx<br />
 ┃ ┣ 📜Login.tsx<br />
 ┃ ┗ 📜MyCart.tsx<br />
 ┣ 📂types<br />
 ┃ ┣ 📜Auth.ts<br />
 ┃ ┣ 📜Cart.ts<br />
 ┃ ┣ 📜Product.ts<br />
 ┃ ┗ 📜User.ts<br />
 ┣ 📜App.css<br />
 ┣ 📜App.test.tsx<br />
 ┣ 📜App.tsx<br />
 ┣ 📜index.css<br />
 ┣ 📜index.tsx<br />
 ┣ 📜logo.svg<br />
 ┣ 📜react-app-env.d.ts<br />
 ┣ 📜reportWebVitals.ts<br />
 ┗ 📜setupTests.ts<br />

# 설치 및 실행 방법
1.배포된 사이트를 사용한다.
2.혹은 프로젝트 폴더를 클론하거나 다운로드

# 개선 및 추가 기능 사항
백엔드와 연동하여 장바구니와 유저 정보를 백엔드 서버에 넣는 방향으로 개선할 것 입니다.
