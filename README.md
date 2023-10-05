# 유튜브 어플리케이션 프로젝트 👩‍💻

youtube API를 활용해서 유튜브 어플리케이션을 구현 합니다.

## 유튜브 어플리케이션에서 구현된 기능들 

- <b>검색 헤더 :</b> react-router-dom의 useNavigate, useParams를 활용해서 사용자가 검색할 수 있는 form을 구현합니다.
- <b>비디오 카드 :</b> useQuery와 axios를 활용해서 mock 데이터인 json과 실제 네트워크 통신을 통한 api 데이터를 스위칭 해줄 수 있습니다. .env파일을 만들어줘서 
- <b>상세 페이지 : </b>

## 완성작 보기 

미리보기 : https://master--flourishing-lebkuchen-fcb261.netlify.app/

### 사용스택

- react.js(https://react.dev/) 를 사용하여 사이트를 번들링하고 관리합니다.
- react-router-dom(https://reactrouter.com/en/main)를 활용해서 애플리케이션의 네비게이션과 라우팅을 관리합니다.
- react-query(https://tanstack.com/query/v3/)훅을 사용하여 데이터를 관리하고 상태를 처리할 수 있습니다.
- axios(https://github.com/axios/axios)를 사용하여 API에서 데이터를 가져와 React 컴포넌트에 표시할 수 있습니다.
  
- UUID(https://www.npmjs.com/package/react-uuid)를 사용해서 data의 고유한 아이디를 자동으로 생성합니다.
- react-icons(https://react-icons.github.io/react-icons/) 를 이용하여 아이콘들을 활용했습니다.
- tailwindcss(https://tailwindcss.com/docs/installation)를 사용해서 스타일링을 해줍니다.
- netlify(https://www.netlify.com/) 를 통해 사이트를 배포합니다.
- git(https://github.com/) 을 사용하여 파일을 관리합니다.
- HTML, CSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업합니다. [ARIA(Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

## 프로젝트 실행
- react를 설치합니다. `npm install -g create-react-app`
- react-router-dom를 설치합니다. `npm install react-router-dom`
- react-query를 설치합니다. `npm install react-query`
- react-icons를 설치합니다. `npm install react-icon ==save`
- axios를 설치합니다 `npm install axios`
- UUID를 설치합니다 `npm install uuid`
- tailwindcss를 설치합니다. `npm install -D tailwindcss`
- .env파일을 만들고 환경 설정을 합니다. .gitignore파일에 다음과 같이 작성합니다.

     # misc
    .DS_Store
    .env
    .env.local
    .
    .
    .
