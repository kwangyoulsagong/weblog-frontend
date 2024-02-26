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
  const [showSearch, setShowSearch]=useState(false)

      return(
          <div className={styles.container}>
              {/* 여기안에는 데이터 접근 가능 */}
                <header className={styles.leftWrapper} >
                <section className={styles.leftSection}ref={leftWrapperRef} >
                {isLogin ? <AccessLinkBar /> : <UnAccessLinkBar />}
                </section>
           
            </header>
              <div className={styles.mainWrapper} ref={mainWrapperRef} >
                  <div className={styles.mainSectionInner}>
                  <main className={styles.main}>
                    {children}
                  </main>
                  </div>
              </div>
             {showSearch&& <Search/>}
              </div>
      )
  
  }