"use client"
import { useEffect, useState } from "react";
import styles from "./post.module.css"
interface Post {
    post_id: number;
    nickname: string;
    title: string;
    tags: { createdDate: string; modifiedDate: string; tagContent: string }[];
    like_count: number;
    is_like: boolean;
    image_url: string;
    createdDate: string;
    modifiedDate: string;
  }

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate: string = new Date(dateString).toLocaleDateString(
      "ko-KR",
      options
    );
    return formattedDate;
  };
  
  const formatRelativeTime = (dateString: string): string => {
    const now: Date = new Date();
    const date: Date = new Date(dateString);
    const diff: number = now.getTime() - date.getTime();
  
    // 분, 시간, 일로 계산
    const minutes: number = Math.floor(diff / 60000);
    const hours: number = Math.floor(diff / 3600000);
    const days: number = Math.floor(diff / 86400000);
  
    if (minutes < 1) {
      return "방금 전";
    } else if (minutes < 60) {
      return `${minutes}분 전`;
    } else if (hours < 24) {
      return `${hours}시간 전`;
    } else if (days < 7) {
      return `${days}일 전`;
    } else {
      return formatDate(dateString);
    }
  };

export default function Post(){
    const [dataPostDetail, setDataPostDetail] = useState<Post>();
    useEffect(()=>{

        const responseData = {

                post_id: 1,
                nickname: "tkrhdrhkdduf",
                content: "<div class=\"newdiv\"><div style=\"color: rgb(33, 37, 41); font-weight: 400;\"><div class=\"sc-jIkXHa igDRiN sc-gIDmLj gdiUuU\"><img src=\"https://velog.velcdn.com/images/hmmhmmhm/post/f6cb929e-4552-4955-83ee-5d861225bc45/image.gif\" alt=\"post-thumbnail\" class=\"sc-dkYRCH eZZYnY\"></div><div class=\"sc-bilyIR iaqbHq\"><div class=\"sc-XxNYO gDSnhD\"><div class=\"sc-ilfuhL dsnTYs atom-one\"><p><img src=\"https://velog.velcdn.com/images/hmmhmmhm/post/ed53364d-6920-440a-9dd1-8d28a5ec4272/image.gif\"></p>\n<h2 id=\"새해인사-우체통-web\">새해인사 우체통 (Web)</h2>\n<blockquote>\n<p>서비스 링크: <a href=\"https://posts.run\">https://posts.run</a><br>\n위 URL 에서 실제로 신년인사 카드를 작성해보실 수 있어요!</p>\n</blockquote>\n<p><img src=\"https://velog.velcdn.com/images/hmmhmmhm/post/9c9ff0ec-d369-4ef4-8413-acc9107ce5b7/image.png\"></p>\n<p><a href=\"https://hanghaeplusevent20241215.oopy.io/\">항해 플러스 코육대</a>에서 행사를 연다는 소식을 한참 뒤늦게 듣고 빠르게 도전해보기 위해 연말 하루를 달려본 끝에 회고 글을 작성하게 되었네요!, 이번에 주어진 주제가 굉장히 다양했는데 저는 신년카드 메이커를 한번 만들어보고 싶더라고요! 그래서 한 번 연말에 작업을 해봤어요!</p>\n<h2 id=\"사용한-기술-스택\">사용한 기술 스택</h2>\n<ul>\n<li>3D Web: <a href=\"https://spline.design\">Spline Design</a></li>\n<li>FE: <a href=\"https://tailwindcss.com/\">Tailwind CSS</a> + <a href=\"https://github.com/pmndrs/valtio\">Valtio</a> + <a href=\"https://konstaui.com/\">Konsta UI</a></li>\n<li>BFF: <a href=\"https://nextjs.org/\">Next.js</a></li>\n<li>DB: <a href=\"https://supabase.com/\">Supabase</a></li>\n<li>Infra : <a href=\"https://vercel.com\">Vercel</a> + <a href=\"https://cloudflare.com\">Cloudflare R2</a></li>\n</ul>\n<br>\n<h2 id=\"왜-spline-design-을\">왜 Spline Design 을?</h2>\n<p><img src=\"https://velog.velcdn.com/images/hmmhmmhm/post/aa763220-fe93-46fe-bdd6-34fd1edad86a/image.png\"><br>\n스플라인 디자인은 웹에디터에서 바로 3D 에셋을 디자인 한 후 배치하고, 즉시 React 에 결과물을 연동시킬 수 있는 3D 툴이에요, 3D 에셋에 적용되는 이벤트에 따른 트랜지션 처리를 미리 구성하거나, 아예 미리 배치된 3D 파일들을 react-three-fiber 에서 사용할 수 있는 코드로 추출할 수도 있는 강력한 기능들을 가지고 있어요.</p>\n<p>무엇보다 언리얼 엔진이나 유니티처럼 공식적으로 제공하는 무료 튜토리얼들 같은 무료 에셋들이 굉장히 많이 있어서 바로 원하는 디자인을 빠르게 시작해볼 수 있다는 점도 강력한 점이기도 하고요.</p>\n<h2 id=\"기능-구현-설명\">기능 구현 설명</h2>\n<h3 id=\"3d-state-작업\">3D State 작업</h3>\n<p><img src=\"https://velog.velcdn.com/images/hmmhmmhm/post/063cc2a2-1c61-436b-b3ed-5ba79e7bb173/image.gif\"></p>\n<p>가장 먼저 제가 진행한 작업은 우선 스플라인 디자인에서 제공되는 무료 에셋들을 원하는 대로 배치한 후, 각 에셋들의 State 를 주는 작업이였어요.</p>\n<p>스플라인은 3D 사물의 A 상태와 B 상태를 미리 스냅샷을 찍어놓는 것처럼 개별적으로 만들 수 있고, 내부에서 Transition 기능을 사용하면, A 상태에서 B 상태로 변화하는 과정을 끊김없이 보간처리해서 표시를 해줘요. 이걸 무한히 반복되게 한다면 쉽게 Emoji 애니메이션을 만들 수 있어요!</p>\n<p>그리고 스플라인 내에서는 물리엔진도 제공이 되는데 이를 이용하면 일부 Emoji 들에는 중력 효과를 적용한 후 떨어지게 하는 작업을 진행할 수 있었어요, (언리얼엔진의 가상 조이스틱 같은 GamePad 기능으로 더욱 다양한 기능이 있어서 실제 게임도 만들 수 있어요)</p>\n<h3 id=\"3d-event-작업\">3D Event 작업</h3></div></div></div></div></div><button class=\"but\">스크랩</button>",
                image_url: "https://blog.kakaocdn.net/dn/clyrhv/btqXJVvfOgF/1lMKjoQo3iW0pyYDmV2HVK/img.jpg",
                memo: "<b>하루 만에 혼자 3D로 신년카드 웹 앱을?</b><div><b><br></b></div><div><h2 id=\"사용한-기술-스택\" style=\"font-size: 12px; line-height: 1.5; margin-bottom: 1rem; margin-top: 2.5rem; letter-spacing: -0.06px;\">사용한 기술 스택</h2><ul style=\"font-size: 15px; letter-spacing: -0.06px;\"><li style=\"font-size: 12px;\">3D Web:&nbsp;<a href=\"https://spline.design/\" style=\"text-decoration-line: none;\"><font color=\"#6adf6f\"><b>Spline Design</b></font></a></li><li style=\"font-size: 12px;\">FE:&nbsp;<a href=\"https://tailwindcss.com/\" style=\"text-decoration-line: none;\"><font color=\"#67db6c\">Tailwind CSS</font></a>&nbsp;+&nbsp;<a href=\"https://github.com/pmndrs/valtio\" style=\"text-decoration-line: none;\"><font color=\"#64d769\">Valtio</font></a>&nbsp;+&nbsp;<a href=\"https://konstaui.com/\" style=\"text-decoration-line: none;\"><font color=\"#5ed163\">Konsta</font> <font color=\"#62d567\">UI</font></a></li><li style=\"font-size: 12px;\">BFF:&nbsp;<a href=\"https://nextjs.org/\" style=\"text-decoration-line: none;\"><font color=\"#5dcf62\">Next.js</font></a></li><li style=\"font-size: 12px;\">DB:&nbsp;<a href=\"https://supabase.com/\" style=\"text-decoration-line: none;\"><font color=\"#55c45a\">Supabase</font></a></li><li style=\"font-size: 12px;\">Infra :&nbsp;<a href=\"https://vercel.com/\" style=\"text-decoration-line: none;\"><font color=\"#50c055\">Vercel</font></a>&nbsp;+&nbsp;<a href=\"https://cloudflare.com/\" style=\"text-decoration-line: none;\"><font color=\"#4ab44f\">Cloudflare R2</font></a></li></ul><div><span style=\"font-size: 15px; letter-spacing: -0.06px;\"><b>왜 Spline Design 을?</b></span></div></div><div><span style=\"font-size: 12px; letter-spacing: -0.06px;\">스플라인 디자인은 웹에디터에서 바로 3D <font color=\"#4ab24f\">에셋을 디자인 한 후 배치하고</font>, 즉시 React 에 결과물을 연동시킬 수 있는 3D 툴이에요, 3D 에셋에 적용되는 이벤트에 따른 트랜지션 처리를 미리 구성하거나, 아예 미리 배치된 3D 파일들을 react-three-fiber 에서 사용할 수 있는 코드로 추출할 수도 있는 강력한 기능들을 가지고 있어요.</span><span style=\"font-size: 15px; letter-spacing: -0.06px;\"><b><br></b></span></div>",

                tags: [
                  {
                    createdDate: "2024-01-16T00:51:43.8662",
                    modifiedDate: "2024-01-16T00:51:43.8662",
                    tagContent: "Spline Design",
                  },
                  {
                    createdDate: "2024-01-16T00:51:43.869684",
                    modifiedDate: "2024-01-16T00:51:43.869684",
                    tagContent: "3D",
                  },
                  {
                    createdDate: "2024-01-16T00:51:43.869684",
                    modifiedDate: "2024-01-16T00:51:43.869684",
                    tagContent: "Cloudflare",
                  },
                  {
                    createdDate: "2024-01-16T00:51:43.869684",
                    modifiedDate: "2024-01-16T00:51:43.869684",
                    tagContent: "Vercel",
                  },
                ],
                title: "하루 만에 혼자 3D 로 신년카드 웹앱을? [항해+ 코육대 2회 회고]",
                url: "https://velog.io/@hmmhmmhm/%ED%95%98%EB%A3%A8%EB%A7%8C%EC%97%90-%ED%98%BC%EC%9E%90-3D-%EB%A1%9C-%EC%8B%A0%EB%85%84%EC%B9%B4%EB%93%9C-%EC%9B%B9%EC%95%B1%EC%9D%84-%ED%95%AD%ED%95%B4-%EC%BD%94%EC%9C%A1%EB%8C%80-2%ED%9A%8C-%ED%9A%8C%EA%B3%A0",
                like_count: 230,
                is_like: false,
                createdDate: "2024-01-17T20:51:43.85549",
                modifiedDate: "2024-01-17T20:51:43.85549",
          };
          setDataPostDetail(responseData);
      
    },[])
    return(
        <div className={styles.postBackground}>
            <div className={styles.postContainer}>포스트</div>
        </div>
    )
}