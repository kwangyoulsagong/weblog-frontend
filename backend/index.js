const express = require("express");
const app = express();
const cors = require("cors"); // cors 허용
app.use(cors());
app.use(express.json());
const jsonData = {
  ranks: [
    {
      postId: 1,
      title: "하루 만에 혼자 3D 로 신년카드 웹앱을?",
      nickname: "하민",
      tags: ["알고리즘", "신년"],
      likeCount: 200,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/hmmhmmhm/post/f6cb929e-4552-4955-83ee-5d861225bc45/image.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 2,
      title: "api 와장창 호출하지 않는 법 (Feat. 디바운스)",
      nickname: "가은",
      tags: ["디바운스", "신년"],
      likeCount: 57,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/greencloud/post/4ad0de67-bbaa-46af-8630-0f0d947791b5/image.GIF",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 3,
      title: "나를 프로그래밍 해보자.",
      nickname: "teo.yu",
      tags: ["프로그래밍", "나"],
      likeCount: 36,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/teo/post/4320ed12-8242-4245-b58b-c1f05445c5b7/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 4,
      title: "[1편] .env 파일 관리, 환경변수 공유 쉽게 하",
      nickname: "메디스트림",
      tags: ["env", "환경변수", "설정"],
      likeCount: 34,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/medistream/post/bd57e6a2-e377-4f7a-aa07-d4da26c86e66/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 5,
      title: "2년차 개발자의 2023년 회고",
      nickname: "redjen",
      tags: ["회고"],
      likeCount: 8,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/redjen/post/eb78f214-4adb-4da3-a11a-bdcf3b0627b7/image.jpg",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 6,
      title: "개발자가 퇴사하고 컨설턴트가 되었지만 복학했습니다",
      nickname: "Tate 김용태",
      tags: ["퇴사", "컨설턴트", "개발자", "복학"],
      likeCount: 1,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/yongtae923/post/4deed4dd-65b3-4243-a44c-be3c4cf00142/image.jpg",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 7,
      title: "[Express.js] EC2 인스턴스와 S3 연결하기",
      nickname: "유건",
      tags: ["Express.js", "Ec2", "AWS", "S3"],
      likeCount: 0,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/sksmsfbrjs/post/1823393c-ae5f-4bfd-b1d7-bc69f8dbbb2b/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 8,
      title: "Figma 단축키 모음 (in Mac)",
      nickname: "asken5240",
      tags: ["Figma", "Mac", "단축기"],
      likeCount: 100,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/aksen5240/post/597136e4-42aa-445e-a1d2-d493ac1c020e/image.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 9,
      title: "JPA 사용시 19가지 Tip",
      nickname: "숑숑",
      tags: ["JPA", "팁"],
      likeCount: 108,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/wisepine/post/9428d9b8-05ca-427f-9bab-d470e85176f5/image.webp",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 10,
      title: "개발자도 알면 좋은 노코드 툴 버블",
      nickname: "토스페이먼츠",
      tags: ["노코드", "창업", "bubble"],
      likeCount: 62,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/tosspayments/post/372e0ce1-9a7c-4e2b-bc09-96c0085d9374/image.jpeg",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 11,
      title: "당신이 AWS Lamda를 써야하는 이유",
      nickname: "미즈",
      tags: ["aws", "lambda"],
      likeCount: 18,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/omizha/post/a5fc154f-c8f7-496b-a2af-9efeeab9fc67/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 12,
      title: "프레임워크를 만들어보자 (소개)",
      nickname: "gun",
      tags: [],
      likeCount: 6,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/rjsdnql123/post/0c253329-05a4-47cf-9af0-0d29cfc6f2f5/image.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 13,
      title: "useOverlay로 Toast 구현하기 [GIROK-WEB]",
      nickname: "우디",
      tags: ["GIROK", "React", "Slash", "Toast"],
      likeCount: 11,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/rjw0907/post/5b1d5ef6-428b-49f4-8d2f-6d754872fff5/image.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 14,
      title: "[NextJS] router를 이용한 Loading UI 구현",
      nickname: "상현",
      tags: ["nextjs"],
      likeCount: 3,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/sanghyeon/post/ae67e3de-dd1e-43e3-93d2-b7b23c2e3528/image.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 15,
      title: "Spring Security :: Oauth Session(1)",
      nickname: "박현준",
      tags: ["Auth", "Backend", "JWT", "Java", "Spring"],
      likeCount: 1,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/hyeonjoonpark/post/aefb6dd3-6d21-40a1-80dd-37d7c088f804/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 16,
      title: "썸남 썸녀랑 카톡한거 줘보셈 내가 썸인지 아닌지 딱알려줌",
      nickname: "우빈",
      tags: ["데이터분석", "파이썬"],
      likeCount: 43,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/ubin_ing/post/15dee55e-34af-47f3-ab11-cc80d127a51e/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 17,
      title: "노코드로 결제 연동하기",
      nickname: "토스페이먼츠",
      tags: ["bubble", "결제", "결제 연동", "노코드"],
      likeCount: 7,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/tosspayments/post/75314439-3622-42a4-9afe-5051e1ed42ee/image.jpeg",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 18,
      title: "사이드프로젝트, 이직에 도움 안 되는 이유 3가지",
      nickname: "성공조연_노아",
      tags: [],
      likeCount: 16,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/seonggongjoyeon/post/020f398c-1f0f-4ce6-a4c5-14c9231fa4bc/image.jpg",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 19,
      title: "데이터분석가(경력직)에게 어떤걸 요구할까?",
      nickname: "Seoyoung",
      tags: ["데이터공부커리어", "데이터분석", "데이터분석가"],
      likeCount: 9,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/daelongdaelong/post/081a3fd3-c1c3-42ba-81c2-45a5f0c56fd8/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 20,
      title: "[TOP 10] 개발자들이 많이 읽은 아티클 모음 - 2월 1주차",
      nickname: "일일일",
      tags: [],
      likeCount: 21,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/oneoneone/post/01357be1-6cd4-4d8b-b383-a6caba28cea5/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 21,
      title: "JS로 디스코드 봇, 이삼이를 만들자.",
      nickname: "희성",
      tags: ["js", "디스코드 봇", "이삼이"],
      likeCount: 16,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/huise0ng/post/947b272a-4299-419a-8424-d50134b8ed1e/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 22,
      title: "내가 짠 코드에서 썩은내가 난다고?",
      nickname: "DevSeoRex",
      tags: ["code smell", "Sonar Cloud"],
      likeCount: 13,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/ch4570/post/247834f4-9b8a-4acd-9a82-8322e2e9ba37/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 23,
      title: "GraphQL에 대한 고찰",
      nickname: "devlcw",
      tags: ["graphql"],
      likeCount: 5,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/devcw/post/837692f9-0dbb-4c28-87a6-ea921c9a1fd5/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 24,
      title: "[스터디 회고] '우리만의 프로젝트 발표회'를 진행하다.",
      nickname: "dosa",
      tags: ["스터디", "팀 프로젝트"],
      likeCount: 2,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/alxthdx2/post/2820f2de-f048-4d8f-8e86-728a84ea60f1/image.jpg",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 25,
      title: "WebSocket과 Stomp를 이용해서 채팅 구현하기",
      nickname: "byeol",
      tags: [],
      likeCount: 2,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/byeolhaha/post/da4c0682-2201-492a-a4d4-c9c49daf976f/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 26,
      title: "reactjs code snippets extension 개발 후기",
      nickname: "우빈",
      tags: ["익스텐션"],
      likeCount: 2,
      isLiked: false,
      imageUrl:
        "https://velog.velcdn.com/images/ubin_ing/post/62980381-949c-4ba6-8f95-4153d4ba34fa/image.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 27,
      title: "[식구하자_MSA] Jenkins+Docker+MSA+Spring Boot CI/CD 적용",
      nickname: "이민우",
      tags: ["CI/CD", "docker", "jenkins", "spring cloud"],
      likeCount: 1,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/mw310/post/318ca6c8-c92a-45d0-aa4f-35889d440ab9/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 28,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 29,
      title: "[식구하자_MSA] Jenkins+Docker+MSA+Spring Boot CI/CD 적용",
      nickname: "이민우",
      tags: ["CI/CD", "docker", "jenkins", "spring cloud"],
      likeCount: 1,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/mw310/post/318ca6c8-c92a-45d0-aa4f-35889d440ab9/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 30,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 31,
      title: "[식구하자_MSA] Jenkins+Docker+MSA+Spring Boot CI/CD 적용",
      nickname: "이민우",
      tags: ["CI/CD", "docker", "jenkins", "spring cloud"],
      likeCount: 1,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/mw310/post/318ca6c8-c92a-45d0-aa4f-35889d440ab9/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 32,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 33,
      title: "[식구하자_MSA] Jenkins+Docker+MSA+Spring Boot CI/CD 적용",
      nickname: "이민우",
      tags: ["CI/CD", "docker", "jenkins", "spring cloud"],
      likeCount: 1,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/mw310/post/318ca6c8-c92a-45d0-aa4f-35889d440ab9/image.png",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 34,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 35,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 36,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 37,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 38,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 39,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 40,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 41,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 42,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 43,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 44,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 45,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 46,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 47,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 48,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 49,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 50,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 51,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 52,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 53,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 54,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 55,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 56,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 57,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 58,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 59,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 60,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 61,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 62,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 63,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 64,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 65,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 66,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 67,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
    {
      postId: 68,
      title: "썸네일 메이커(Thumbnail Maker) 만들기 | Toy Project",
      nickname: "Wonkook Lee",
      tags: ["TIL", "미니프로젝트", "썸네일"],
      likeCount: 644,
      isLiked: true,
      imageUrl:
        "https://velog.velcdn.com/images/oneook/post/735203c3-e8a3-4f91-8f09-b5b28a18aef9/ezgif-7-1105d89ad507.gif",
      createdDate: "2024-02-06T10:39:08.377Z",
      modifiedDate: "2024-02-06T10:39:08.377Z",
    },
  ],
};

app.get("/api/v1/posts/ranks", (req, res) => {
  const type = req.query.type || "weekly";
  const offset = parseInt(req.query.offset) || 0;
  const limit = parseInt(req.query.limit) || 2;

  // Check if jsonData.rank is an array or undefined before slicing
  const rankArray = Array.isArray(jsonData.ranks) ? jsonData.ranks : [];
  const slicedData = rankArray.slice(offset, offset + limit);

  res.json({ slicedData });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
