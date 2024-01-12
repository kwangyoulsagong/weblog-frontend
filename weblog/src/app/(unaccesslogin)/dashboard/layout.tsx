"use client"
import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./dashboard.module.css"
import Image from "next/image";
import Logo from "@/asset/images/logo.svg"
import Link from "next/link";
import { useRouter } from "next/navigation";
type props = {children:ReactNode}
const tabRedirectMap = {
  popularTab: '/dashboard/home/popular',
  recommendTab: '/dashboard/home/recommend',
};
export default function MenuBar({children}:props){
  const tabRef=useRef<HTMLDivElement>(null)
  const [menubar , setMenubar]=useState(false)
  const [logoimg,setLogo]=useState(true)
  const onHandleMenubar = () => {
    setMenubar(!menubar);
    setLogo(!logoimg)
  };
  const router=useRouter()
  const [tabMenu, setTabMenu]=useState<keyof typeof tabRedirectMap>("popularTab")
  const onHandleTab=(prev:keyof typeof tabRedirectMap)=>{
      setTabMenu(prev);
      router.push(tabRedirectMap[prev])
      localStorage.setItem('activeTab', prev);
    
  }
  //현재 링크 유지
  useEffect(() => {
    const activeTab = localStorage.getItem('activeTab') as keyof typeof tabRedirectMap;

    if (activeTab && tabRedirectMap[activeTab]) {
      setTabMenu(activeTab);
    }
  }, []);
  //메뉴바 이동 스크롤
  useEffect(()=>{
    if(tabRef.current){
      tabRef.current.style.left=tabMenu==="recommendTab"? '100px':'0'
      tabRef.current.style.transition="0.5s"
    }
  },[tabMenu])
    return(
        <div className={styles.container}>
            {menubar&&(
              <header className={styles.leftWrapper}>
              <section className={styles.leftSection}>
                <div className={styles.leftFixedSection}>
                   <Link href="/dashboard/home"><Image className={styles.logo} src={Logo} alt='logo' /></Link>
                   <div className={styles.moduleLine}></div>
                   <Link href="/dashboard/myprofile">내 정보</Link>
                   <Link href="/dashboard/namu">지식 나무</Link>
                </div>
              </section>
         
          </header>
            )}
            <div className={styles.mainWrapper} >
                <div className={styles.mainSectionInner}>
                <div className={styles.meuBarSection}>
                    <div className={styles.menuBarFixedSection}>
                     <span onClick={onHandleMenubar}>메뉴바</span>
                      {logoimg&& <Image className={styles.LogoImg} src={Logo} alt="Logo"></Image>}
                    </div>
                  </div>
                <main className={styles.main}>
                <div className={styles.postTabContainer}>
                    <div className={styles.postTab}>
                      <div ref={tabRef} className={styles.tabActive}>
                      </div>
                      <section className={styles.popularTab}  onClick={()=> onHandleTab("popularTab")}> 인기포스트</section>
                        <section className={styles.recommendTab } onClick={()=>onHandleTab("recommendTab")}> 추천순</section>
                    </div>
                </div>
                  {children}</main>
                </div>
            </div>
            </div>
    )

}