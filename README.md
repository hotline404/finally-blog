
  
## ✅블로그 프로젝트.finally
원래 만들던 블로그 프로젝트를 더 업그레이드 시켜서 배포 했습니다.
저의 개발 이야기를 풀어내고 싶어서 그리고 개인 홈페이지를 직접 만들어보고자 해서 이렇게 만들게 되었습니다.
  
## ✅LINK
[let's go!](https://finally-blog.vercel.app/)
    
## ✅Environments
배포 : [<img src="https://img.shields.io/badge/-vercel-transparent?logo=vercel&logoColor=white" />](https://vercel.com/)  
빌드 : [<img src="https://img.shields.io/badge/-Node-transparent?logo=node.js&logoColor=white" />](https://nodejs.org/ko/about)  
프레임워크 : [<img src="https://img.shields.io/badge/-Next-transparent?logo=next.js&logoColor=white" margin="10px"/>](https://vercel.com/frameworks/nextjs?utm_source=next_site&utm_medium=showcase_redesign&utm_campaign=hero_cta)  
전역상태 관리 : [<img src="https://img.shields.io/badge/-zustand-transparent?logo=zustand&logoColor=white" />](https://zustand.docs.pmnd.rs/getting-started/introduction)  
DB : [<img src="https://img.shields.io/badge/-notion-transparent?logo=notion&logoColor=white" />](https://developers.notion.com/)  
스타일 : [<img src="https://img.shields.io/badge/-tailwindcss-transparent?logo=tailwindcss&logoColor=white" />](https://tailwindcss.com/docs/installation/using-vite)  
  
## ✅run in local
```npm run dev```
  
  
## 📬contacts
[<img src="https://img.shields.io/badge/-cosmoyj7733@gmail.com-EA4335?logo=gmail&logoColor=white" />]() <img src="https://img.shields.io/badge/-cosmoyj@naver.com-03C75A?logo=naver&logoColor=white" /> <img src="https://img.shields.io/badge/-@Paskal_codeat-000000?logo=x&logoColor=white" />  
  
<img src="public/my-notion-face-portrait.png" width="100px" height="100px"/> 



## 🐛 개발을 하며 만난 문제점들
개발을 하며 다양한 문제와 부딛혔었습니다.
우선 처음하는 next개발에 vercel 배포이다보니 문제가 생긴 것이 대다수 입니다. 이를테면 vercel이 정적 루트나 참조되지 않는 경로, 사용되지 않는 슬롯은 과감하게 렌더링에서 누락된다는 점이 발목을 잡았죠 처음에ㅋㅋ

1. 배포를 하고 보니 사이트에 에러가 떴습니다. 알고보니 서버 사이드 페이지에서는 react hook에 대한 제한이 있어서 훅을 사용하는 페이지는 use client를 추가해주었습니다. 이는 페이지를 클라이언트 사이드 렌더링으로 선언하는 것입니다.
```export const dynamic = "force-dynamic";```
2. next js를 로컬에서 실행을 해보면 사이트 좌측 하단에 next 로고가 나옵니다. 이를 없애려고 레딧에 검색을 한 후 찾아서 없앴습니다.
```next.config 파일에서 devIndicators: false```
3. 병렬 라우팅을 사용한 modal을 만들었습니다만.. 404가 떴습니다. -> 페이지를 동적으로 만들어주고 난 뒤 슬롯을 만들어 두지 않아서 그런 문제가 발생했습니다.
4. 병렬 라우팅과 인터셉팅을 사용해서 modal을 완성하고 보니 다른 문제가 있습니다. 독립적인 트리를 사용해서 렌더링되니 모달에서 새로고침을 하면 뒤에 배경이 되는 메인 페이지가 날아가서 404가 배경이 됩니다... 이는 아무래도 병렬 라우팅을 사용한 modal의 단점이라서 다음 버전에서 자주 사용하던 포탈을 사용해서 다시 구현 할 것 같습니다.
5. notion api를 사용하려는데 블로그를 처음에 참고해서 만들려고 했으나 라이브러리에 많이 의존하는 포스팅들이 많았습니다. 해당 라이브러리가 notion api에 맞춰서 발전하지 않거나 삭제가 되다면 저도 의존적이게 될 것 같아서 이런 방법은 피하려고 notion에서 직접 제공하는 오피셜 라이브러리만 사용을 했습니다.
6. notion api에서 database에 관련된 api를 변경했습니다. 내용인 즉 database 아래 data source를 두겠다는 것입니다. 그래서 해당 공문을 읽고 data source를 찾아내서 api 요청 함수를 대대적으로 수정을 했습니다. page를 제외한 데이터 베이스를 참조하던 요청은 전부 이제 라이브러리 의존성이 줄어들었습니다.

