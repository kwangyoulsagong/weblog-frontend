"use client"
import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query"
import styles from "./test.module.css"
import axios from "axios"
const requestdat1a={
              post_id: 3,
              nickname: "송하윤",
              content: "<div class=\"newdiv\"><div style=\"color: rgb(33, 37, 41); font-weight: 400;\"><ul><li>글을 읽기 전, <strong>저는 절대,,뛰어난 실력,,을 가진 개발자는 아닙니다.</strong><br>\n단, 제가 6개월 동안 오직 취준에 미쳐있으면서 가장 도움이 되었던 것은, 특정 기업을 대비해서 준비했던 정보력과, 그리고 주위 인맥을 쥐어짜서 얻을 수 있었던 현업 및 선배들의 조언이였습니다.</li>\n</ul>\n<ul>\n<li>이 글을 많이 고민하다가 작성하게 된 이유도 같습니다. 저도 6개월 동안 밥만 먹고 취준에 미쳐있으면서 혹시라도 이 경험이 <strong>도움</strong>이 될 수 있을까,, 선한 영향력을 좀 기대하고 글을 적게 되었습니다.</li>\n</ul>\n<ul>\n<li>\n<p>운이 좋아 취업에는 성공하게 되었고, 제 실력에 항상 과분하다고 생각하며 도움을 주신 너무 많은 분들께 항상 감사한 마음을 가지고 있습니다. 또한 같은 인턴 동기들을 보면 학교 커뮤니티가 참 잘 되어있는걸 많이 느끼는데, 그러지 못한 저희 학교에 약간은 아쉬움을 느껴서, 저라도 도움이 될 수 있고자 솔직하게 쓰게되었습니다.</p>\n</li>\n<li>\n<p>딱히 숨길 것도 없고 글은 정말 담백하게 쓰며, 제가 준비하는 과정에서 더 궁금한 점이나 자소서 같은 자료가 궁금하다면 저와 그리 친하지 않는 지인이더라도 <strong>연락 주시면 정말 반갑게 도와드리겠습니다</strong> :)</p>\n</li>\n</ul>\n<blockquote>\n<h2 id=\"지원-현황\">지원 현황</h2>\n</blockquote>\n<p>정말 담백하게 이 기업에서의 경험, 지원 후기 같은거에 도움이 될 수 있도록 작성해봤습니다. 혹시 이 기업들에 관심 있거나 질문이 있다면 앞서 말했듯이 연락주세요. 총 28개 기업에 지원했고, 운이 좋게도 취업엔 성공했습니다..!</p>\n<h3 id=\"최종-합격\">최종 합격</h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>기업 이름</th><th>직무/컨셉</th><th>지원 결과</th><th>비고</th></tr></thead><tbody><tr><td><strong>삼성전자 대학생 인턴 (SW 개발)</strong></td><td>SW 개발/프론트?</td><td>최종 합격</td><td></td></tr><tr><td><strong>삼성전자 3급 공채 (SW 개발)</strong></td><td>SW 개발/프론트?</td><td>최종 합격</td><td></td></tr><tr><td><strong>현대자동차 (SW 개발)</strong></td><td>스마트 팩토리 SW개발</td><td>최종 합격</td><td></td></tr><tr><td><strong>신한카드 ICT 개발</strong></td><td>SW 개발</td><td>최종 합격</td><td></td></tr><tr><td><strong>현대오토에버 채용연계형 인턴(학교)</strong></td><td>SW 개발(프론트엔드)</td><td>최종 합격</td><td></td></tr><tr><td><strong> 스타트업 2곳</strong></td><td>SW 개발(프론트엔드)</td><td>최종 합격</td><td></td></tr></tbody></table>\n<h3 id=\"2차-합격--면접-포기\">2차 합격,  면접 포기</h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>기업 이름</th><th>직무/컨셉</th><th>지원 결과</th><th>비고</th></tr></thead><tbody><tr><td><strong>SKT Junior Talent</strong></td><td>SW 개발 (프론트엔드)</td><td>최종 탈락</td><td></td></tr><tr><td><strong>Toss Bank 신입 공채</strong></td><td>SW 개발 (프론트엔드)</td><td>최종 탈락</td><td></td></tr><tr><td><strong>Toss 신입 공채</strong></td><td>SW 개발 (프론트엔드)</td><td>면접 탈락</td><td></td></tr><tr><td><strong>신한은행 ICT 개발</strong></td><td>SW 개발</td><td>최종 탈락</td><td></td></tr><tr><td><strong>SK C&amp;C</strong></td><td>SW 개발(제조)</td><td>면접 겹침</td><td></td></tr><tr><td><strong>현대오토에버</strong></td><td>SW 개발(프론트엔드)</td><td>면접 겹침</td><td></td></tr><tr><td><strong>포스코 DX</strong></td><td>SW 개발</td><td>면접 겹침</td><td></td></tr><tr><td><strong>롯데정보통신 ICT</strong></td><td>SW 개발</td><td>면접 겹침</td><td></td></tr></tbody></table>\n<p>SKT는.... 삼성과 함께 진짜 너무나도 가고 싶었던 곳이기에 최종에서 떨어지고 10년만에 울어봤던 곳입니다.</p>\n<h3 id=\"1차-합격-코딩-테스트-탈락\"><strong>1차 합격, 코딩 테스트 탈락</strong></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>기업 이름</th><th>직무/컨셉</th><th>지원 결과</th><th>비고</th></tr></thead><tbody><tr><td><strong>호식이두마리 치킨..</strong></td><td>SW 개발</td><td>코테 탈락</td><td></td></tr><tr><td><strong>LG CNS(스마트팩토리)</strong></td><td>SW 개발</td><td>코테 탈락</td><td></td></tr></tbody></table>\n<h3 id=\"서류-탈락\">서류 탈락</h3>\n<p>이 외 16개 기업을 서류 탈락했습니다.. 다시는 이 끔찍한 취준을 하고 싶지 않다는 마음에 정말 SW란 이름이 들어 간곳을 모두 지원했기에, 탈락도 그만큼 많았습니다.</p>\n<blockquote>\n<h2 id=\"지원-전략\">지원 전략</h2>\n</blockquote>\n<p><img src=\"https://velog.velcdn.com/images/hayounsong/post/d564d4a4-e661-4124-a58c-95f57905e245/image.jpeg\"></p>\n<h3 id=\"네카라쿠배는-뽑지-않아도-난-취준-다시는-못해\">네카라쿠배는 뽑지 않아도, 난 취준 다시는 못해.</h3>\n<p>혹시 1차 합격 목록에 호식이 두마리치킨이란 기업이 이름을 있듯이, 이번 하반기에 SW 개발이란 직무가 있는 모든 회사에 지원했습니다.</p>\n<p>제가 취업을 진행했던 2023-하반기에는 슬프게도 흔히 말하는 '네카라쿠배당토'에서 토스를 제외한 단 한곳도 신입 공채를 하지 않았던 쉽진 않았던 시기였습니다.</p>\n<p>그럼에도, 일단은 이 취준 시기가 진짜 너무 힘들고, 다시는 마주하고 싶지 않았던 시기였기에 최선을 다해서 모든 기업에 지원했습니다. 개인적으로도 꼭 서비스 기업을 고수하는 입장은 아니였습니다.</p>\n<h3 id=\"왜-지원했는가에-대한-3-트랙-전략화-경제-뉴스-스크랩\">왜 지원했는가에 대한 3-트랙 전략화, 경제 뉴스 스크랩</h3>\n<p>은행권, 일반 대기업, ICT 서비스 회사 3가지 트랙을 잡고, Three Track 방식으로 3가지 트랙을 짠 후, 그 기업에 대해서 자료조사와 경제 뉴스 조사를 시작했습니다.</p>\n<p>면접때도, 서류때도 가장 중요한 것은 내가 그 기업을 지원한 이유라고 생각합니다. 그렇기에, 제가 지원하는 회사의 컨셉을 3-트랙으로 분류한 후, 그 컨셉에 맞춰서 서류와 면접을 준비했습니다. </p>\n<p>개발자라면 왜 다른 기업도 많은데 금융을?  왜 우리 대기업을? 왜 우리 서비스 기업을? 면접에서 가장 많이 들었던 질문입니다. 이에 제가 준비했던 방식은 그 기업의 뉴스룸을 보는 방법입니다. 또한 네이버 경제뉴스란에 들어가게 되면, 특정 대기업들에 대해서 끊임없이 경제 뉴스가 나오게 되는데, 그 경제 뉴스를 스크랩하며 직군별 공부를 진행했습니다.</p>\n<h3 id=\"프론트엔드란-분야에-대해서-어떤-강점을-가질-수-있는가\">프론트엔드란 분야에 대해서, 어떤 강점을 가질 수 있는가?</h3>\n<p><strong>- 일반 대기업 및 금융권, 백엔드를 할 줄 아는 프론트엔드 \"기술자\"</strong></p>\n<p>먼저, 일반 대기업들에서는 프론트엔드는 참 애~매한 직군이라고 생각합니다. 예전에 비해 ICT에 대한 최신화가 많이 이뤄졌다고한들, 프론트엔드 개발자에 대해서 전공자가 하기엔 애매한 직무라고 판단하는 기업들도 많았습니다.</p>\n<p>그렇기에, 이 트랙들에 대해서는 포커스를 \"기술자\"로 맞췄습니다. 프론트엔드를 강점으로 해왔으나, 백엔드나 DB 관련해서도 경험이 있는 하나의 \"기술자\"라는 점을 강조했습니다. SQLD 자격증을 따놓은거, 그리고 SOPT 서버 파트 활동을 했었던게 조금은 뒷받침이 되었습니다. </p>\n<p>그렇다면 백엔드에 대해서 어떤걸 공부했냐고 물어볼 수 있는데, 그냥 정말 솔직하게 요즘 공부하는 것들 말했습니다. 이야기가 MSA라는 산으로 가버린  한번의 면접 빼고는, 긍정적인 평가를 얻을 수 있었던 전략이라고 생각합니다.</p>\n<p><strong>- 그 기업에 맞는 프론트엔드 개발이 무엇일까?</strong></p>\n<p>가장 가고 싶었던 기업들에 써먹었던 전략입니다. 내가 그 회사에 입사한 후, 구체적으로 어떤 프론트엔드 전략 및 개발분야를 ~~하게 바꿀 수 있고, 그 ~~하게 바꾼 것으로 고객 가치를 ~~% 정도를 극대화할 수 있다고 생각한다. </p>\n<p>제가 가장 많이 쓴 멘트이고, 실제로 좋은 결과를 가져왔던 면접 방식입니다. 예를 들어 Velog라는 기업에 지원한다면, 그 Velog가 가지고 있는 모든 서비스들에 대해서 개발자 도구를 뜯어보며 개선점을 찾아갔습니다. 작은 Cache Control 방식부터, 그 서비스에서 이뤄지고 있는 렌더링을 어떤 방식으로 바꾸면 속도 개선을 이뤄낼 수 있는지까지. 서비스 전체를 볼 수 있는 인사이트를 강조하려고 노력했습니다.</p>\n<h3 id=\"내가-개발한-것을-수치화-하기\">내가 개발한 것을 수치화 하기</h3>\n<p>가장 중요한 것이라고 생각합니다. 사소한 거든, 인턴이던 프로젝트던 내 경험을 모두 수치화하는게 가장 중요하다고 생각합니다. </p>\n<p>\"Next Image의 이미지 최적화 방식을 Sqoosh -&gt; sharp 방식으로 변경함으로서, Next image의 이미지 렌더링 속도를 정확히 5배 감소시킨 경험이 있습니다. 어떤 프로젝트에 참여해 11개월동안 일 최대 유저 200명을 확보하고, 이에 대한 메모이제이션을 통해 성능 개선을 어쩌구저쩌구~ \"</p>\n<p>이게 정답은 아니지만, 이런식으로 내가 해낸 프로젝트를 수치화하는건 취업 과정에서 가장 중요하다고 생각합니다. 자소서든, 면접이든 깊은 인상을 줄 수 있는 방법이라고 생각해요.</p>\n<h3 id=\"면접-스터디\">면접 스터디</h3>\n<p>정말 많이 배웠습니다. 지원한 모든 기업에 대해서 면접 스터디를 했습니다.</p>\n<blockquote>\n<h2 id=\"어떤-준비가-도움이-되었나요\">어떤 준비가 도움이 되었나요</h2>\n</blockquote>\n<p>제가 취업 박사도 아니고, 정말 개인적이고 주관적인 내용으로 가득차있기에 다 믿으시면 곤란합니다,,</p>\n<h3 id=\"주니어-개발자는-인턴으로-말한다\">주니어 개발자는 인턴으로 말한다</h3>\n<p>서비스 기업이 아닌 일반 기업에서는, 저는 인턴 경험이 가장 큰 무기라고 생각합니다. 물론 현업을 장기간 경험할 수 있었던 인턴이 없었던 것이 제 가장 큰 단점이기도 했기에 준비하시는 분들은 많은 인턴을 하고, 그 안에서 성과를 찾았으면 좋겠습니다. 솔직하게 삼성전자 인턴 경험은 제 가장 큰 무기였습니다.</p>\n<h3 id=\"cs-알고리즘-현업-경험은-미리-쌓자\">CS, 알고리즘, 현업 경험은 미리 쌓자</h3>\n<p>저는 이거 못했습니다.. 알고리즘은 미리 한 덕분에 코테를 대부분 통과할 수 있었지만, CS와 현업에서의 개발 경험은 단기간에 쌓기 참 불가능한 영역이였습니다. 미리 하는게 좋아보여요.</p>\n<h3 id=\"학교가-아닌-학교-밖에서-해낼-수-있었던-대외활동\">학교가 아닌, 학교 밖에서 해낼 수 있었던 대외활동</h3>\n<p>제가 취업 과정에서 가장 도움이 되었던 3개를 골라본다면, 임팩트 있는 졸업프로젝트(복실이), 삼성 인턴 경험과 그리고 SOPT입니다. '대외활동'은 취업시장에서 정말 커다란 무기라고 생각합니다. 학교 생활을 열심히 하는 것도 좋지만, 저는 당장 학교를 떠나서 학교 밖 대외활동에 부딪혀 보는게 좋다고 생각합니다. </p>\n<p><strong>코딩 테스트를 보고, 기술 면접을 보면서 까지 힘들게 들어가는 동아리, 대외활동엔 이유가 있다고 생각해요</strong>.</p>\n<p>그리고 제가 동아리 말고도 서포터즈 같은 대외활동이 좀 많은 편이였는데, 일반 대기업들에서는 굉장히 유효하게 작용했습니다.</p>\n<h3 id=\"실력-있으면-다-데려가는게-아니라-그-실력을-증명할-수-있어야-한다고-생각합니다\">실력 있으면 다 데려가는게 아니라, 그 실력을 증명할 수 있어야 한다고 생각합니다.</h3>\n<p>그 실력을 증명 할 수 있는 활동을 해서, 결국 그 실력을 증명할 수 있어야한다고 생각합니당. 그게 가장 큰게 동아리, 그리고 프로젝트, 대외활동이라고 생각해요. 공모전도 좋구요.</p>\n<blockquote>\n<h2 id=\"마치면서\">마치면서</h2>\n</blockquote>\n<h3 id=\"정보력의-차이\">정보력의 차이..?</h3>\n<p>민감한 얘기지만 저조차도 그렇게 좋은 대학을 나온 것도 아니기에, 저는 사실 학벌의 차이는  존재한다고 생각하고, 당연하다고 생각해요.</p>\n<p>그렇지만, 그 차이가 가장 큰 부분이 바로 <strong>정보</strong>라고 생각합니다. 앞서 말했지만 저희 학교에는 그런 커뮤니티가 막 잘되있는 편은 아니라고 생각해요. 인맥을 끌어모아서 저는 굉장히 많은 도움을 받으며 취준할 수 있었지만, 다른 학교 동기들을 보며 잘되어있는 학교 커뮤니티를 보며, 그 정보력의 차이가 정말 크다고 생각했습니다.</p>\n<p>구글에 취준 후기를 찾아보고, 뭘 준비해야하는지 JD를 찾아보고, 선배들한테 커피챗을 사정하고. 제가 가장 도움이 되었던 부분이고, 이렇게 도움이 되었으면 하는 마음에 이 글도 쓰게됩니다.</p>\n<p><strong>마지막으로 정말로, 궁금한거나 정말 세세한거(혹시 학점이..?)이런 것두 괜찮으니까 제가 도움이 될 수 있는 부분이 있다면, 여쭤보신다면 정성을 다해서 도와드리겠습니다 :)</strong></p>\n<p><strong>운이 정말 좋았기에 제 실력에 과분하게 취업할 수 있었습니다. 제가 가질 수 있었던 좋은 운이 다른이에게 전달되었으면 하는 마음으로 글을 마칩니</strong></p></div></div><button class=\"but\">스크랩</button>",
              image_url: "https://blog.kakaocdn.net/dn/clyrhv/btqXJVvfOgF/1lMKjoQo3iW0pyYDmV2HVK/img.jpg",
              memo: "<ul><li><font size=\"2\">특정 기업을 대비해서 준비 했던 정보력과, 그리고 주위 인맥 쥐어짜서 얻을 수 이었던 <font color=\"#85ed38\"><b>조언</b></font></font></li></ul><h3 id=\"최종-합격\">최종 합격</h3><table style=\"font-size: 15px;\"><thead><tr style=\"box-sizing: border-box; max-width: 100%;\"><th>기업 이름</th><th>직무/컨셉</th><th>지원 결과</th><th>비고</th></tr></thead><tbody style=\"box-sizing: border-box; max-width: 100%;\"><tr style=\"box-sizing: border-box; max-width: 100%;\"><td style=\"box-sizing: border-box; max-width: 100%;\"><strong>삼성전자 대학생 인턴 (SW 개발)</strong></td><td style=\"box-sizing: border-box; max-width: 100%;\">SW 개발/프론트?</td><td style=\"box-sizing: border-box; max-width: 100%;\">최종 합격</td><td style=\"box-sizing: border-box; max-width: 100%;\"></td></tr><tr style=\"box-sizing: border-box; max-width: 100%;\"><td style=\"box-sizing: border-box; max-width: 100%;\"><strong>삼성전자 3급 공채 (SW 개발)</strong></td><td style=\"box-sizing: border-box; max-width: 100%;\">SW 개발/프론트?</td><td style=\"box-sizing: border-box; max-width: 100%;\">최종 합격</td><td style=\"box-sizing: border-box; max-width: 100%;\"></td></tr><tr style=\"box-sizing: border-box; max-width: 100%;\"><td style=\"box-sizing: border-box; max-width: 100%;\"><strong>현대자동차 (SW 개발)</strong></td><td style=\"box-sizing: border-box; max-width: 100%;\">스마트 팩토리 SW개발</td><td style=\"box-sizing: border-box; max-width: 100%;\">최종 합격</td><td style=\"box-sizing: border-box; max-width: 100%;\"></td></tr><tr style=\"box-sizing: border-box; max-width: 100%;\"><td style=\"box-sizing: border-box; max-width: 100%;\"><strong>신한카드 ICT 개발</strong></td><td style=\"box-sizing: border-box; max-width: 100%;\">SW 개발</td><td style=\"box-sizing: border-box; max-width: 100%;\">최종 합격</td><td style=\"box-sizing: border-box; max-width: 100%;\"></td></tr><tr style=\"box-sizing: border-box; max-width: 100%;\"><td style=\"box-sizing: border-box; max-width: 100%;\"><strong>현대오토에버 채용연계형 인턴(학교)</strong></td><td style=\"box-sizing: border-box; max-width: 100%;\">SW 개발(프론트엔드)</td><td style=\"box-sizing: border-box; max-width: 100%;\">최종 합격</td><td style=\"box-sizing: border-box; max-width: 100%;\"></td></tr><tr style=\"box-sizing: border-box; max-width: 100%;\"><td style=\"box-sizing: border-box; max-width: 100%;\"><b>스타트업 2곳</b><br><br><br><br><br><br><br><br>일단 프로젝트 경험에 있어 수치화가 중요한다&nbsp;<br><br><br></td><td style=\"box-sizing: border-box; max-width: 100%;\">SW 개발(프론트엔드)<br><br></td><td style=\"box-sizing: border-box; max-width: 100%;\">최종 합격<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></td></tr></tbody></table>",
              tags: [
                {
                  createdDate: "2024-01-20T14:10:43.85549",
                  modifiedDate: "2024-01-20T14:10:43.85549",
                  tagContent: "취준"
                },
                {
                    createdDate: "2024-01-20T14:10:43.85549",
                    modifiedDate: "2024-01-20T14:10:43.85549",
                    tagContent: "개발자"
                },
                {
                    createdDate: "2024-01-20T14:10:43.85549",
                    modifiedDate: "2024-01-20T14:10:43.85549",
                    tagContent: "신입"
                },
              ],
              title: "주니어 개발자 취준 후기",
              url: "https://velog.io/@hayounsong/2023%EB%85%84-%ED%95%98%EB%B0%98%EA%B8%B0-%EC%A3%BC%EB%8B%88%EC%96%B4-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%B7%A8%EC%A4%80-%ED%9B%84%EA%B8%B0",
              like_count: 49,
              is_like: false,
              createdDate: "2024-01-20T14:10:43.85549",
              modifiedDate: "2024-01-20T14:10:43.85549",
}

export default function test(){
    const mutation :any = useMutation({// mutation 이용 업데이트 수정 삭제 할때 이용
        mutationFn: (requestdata) =>{
            return axios.post ("http://localhost:3001/postDetail", requestdata)
        }
    })
    return(
        <div className={styles.background}>수정
            <div>{mutation.isPending ?('수정합니다'):
            (
                <>
                    {mutation.isError ?(
                        <div>오류: {mutation.error.message}</div>
                    ): null
                }
                    {mutation.isSuccess ? <div>수정 되었습니다</div>:null}
                    <button onClick={()=>{
                        mutation.mutate({requestdat1a})
                    }}>수정하기</button>
                </>
            )
            }
            </div>
        </div>
            
    )
}