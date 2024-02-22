"use client"
import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import styles from "./dashboard.module.css"
import Image from "next/image";
import Logo from "@/asset/images/logo.svg"
import UnAccessLinkBar from "./unaccesslogin/linkBar";
import AccessLinkBar from "./accesslogin/linkBar"
import { AuthContext } from "./Provider/authProvider";
import { useRouter } from "next/navigation";
import profile from "@/asset/images/kwang.jpg"
import Link from "next/link";
import Search from "./search";
import hamburger from "@/asset/images/burger.png"
import cross from "@/asset/images/cross.png"

type props = {children:ReactNode}
export default function Dashboard({children}:props){
  const router=useRouter()
  const { isLogin, nickname, setIsLogin } = useContext(AuthContext);
  const leftWrapperRef = useRef<HTMLDivElement>(null!)
  const mainWrapperRef=useRef<HTMLDivElement>(null!)
  const [menubar, setMenubar] = useState(false);
  const [logoimg, setLogo] = useState(true);
  const [dropMenu,setDropMenu]=useState(false)
  const [showSearch, setShowSearch]=useState(false)
  const onHandleLogout=()=>{
    setIsLogin(false)
    router.push("/dashboard/home")
  }

  const onHandleMenubar = () => {
    setMenubar(!menubar);
    if (leftWrapperRef.current&&mainWrapperRef.current) {
      leftWrapperRef.current.style.width=!menubar? "110px":"30px";
      mainWrapperRef.current.style.width=!menubar? "90vw":"95vw";
      mainWrapperRef.current.style.transition="0.5s"

    }
  };
  const handleDropdownMenu = ()=>{
    setDropMenu((prev)=>!prev)
  }
  const handleSearchBar=()=>{
    setShowSearch(!showSearch)
  }

      return(
          <div className={styles.container}>
              {/* 여기안에는 데이터 접근 가능 */}
                <header className={styles.leftWrapper} >
                <section className={styles.leftSection}ref={leftWrapperRef} >
                <button className={styles.menuBtn}  onClick={onHandleMenubar}>
                  <Image src={menubar? cross: hamburger } alt="burger"></Image>
                        </button>
                {isLogin ? <AccessLinkBar /> : <UnAccessLinkBar />}
                </section>
           
            </header>
              <div className={styles.mainWrapper} ref={mainWrapperRef} >
                  <div className={styles.mainSectionInner}>
                  <div className={styles.meuBarSection}>
                      <div className={styles.menuBarFixedSection}>
                       
                        {logoimg&& <Image className={styles.LogoImg} src={Logo} alt="Logo"></Image>}
                        <div className={styles.profile_header}>
                          <div className={styles.searchBar} onClick={handleSearchBar}>
                            <span>검색</span>
                            <div className={styles.iconSearch}></div>
                          </div>
                        
                        {isLogin && <button className={styles.notification}></button>}
                        {isLogin && <div className={styles.profileCircle} onClick={handleDropdownMenu}>
                          <Image src={profile} alt="kwang"/>
                        </div>}
                       </div>
                       {isLogin&& <div className={styles.dropdown}>
                          <div className={styles.dropMenu}  style={{height:dropMenu? '100vh':'0px', transition: "0.5s"}}>
                          {isLogin && <b className={styles.nickname}>{nickname}</b>}
                             <Link href="">마이페이지</Link>
                            <button onClick={onHandleLogout}>로그아웃</button>
                          </div>
                          </div>}
                      </div>
                    </div>
                  <main className={styles.main}>
                    {children}
                  </main>
                  </div>
              </div>
             {showSearch&& <Search/>}
              </div>
      )
  
  }