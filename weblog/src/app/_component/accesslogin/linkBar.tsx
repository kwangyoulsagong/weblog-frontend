"use client"
import Link from "next/link";
import styles from "@/app/_component/dashboard.module.css"
import Image from "next/image";
import dashboardImg from "@/asset/images/dashboard.svg"
import userImg from "@/asset/images/user.svg"
import mypostImg from "@/asset/images/post.svg"
import treeImg from "@/asset/images/tree.svg"
import { useContext, useState } from "react"
import { AuthContext } from "../Provider/authProvider"
import { useRouter } from "next/navigation"
export default function LinkBar(){
    const {nickname}=useContext(AuthContext)
    const router=useRouter();
    const [btnPressed,setBtnPressed]=useState<String>("home")

    const handleHome=(prev:string)=>{
        router.push(`/${nickname}/dashboard/home`)
        setBtnPressed(prev)
    }
    const handleMyProfile=(prev:string)=>{
        router.push(`/${nickname}/dashboard/myprofile`)
        setBtnPressed(prev)
    }
    const handleMyPost=(prev:string)=>{
        router.push(`/${nickname}/dashboard/mypost`)
        setBtnPressed(prev)
    }
    return(
        <div className={styles.leftFixedSection}>
        <div id="home" style={{ backgroundColor: btnPressed === "home" ? "rgba(0, 0, 0, 0.1" : "#f4f4f4" }} onClick={()=>handleHome("home")}>
            <Image src={dashboardImg} alt="dashboardImg"></Image>
            홈</div>
        <div id="mypage" style={{ backgroundColor: btnPressed === "mypage" ? "rgba(0, 0, 0, 0.1" : "#f4f4f4" }} onClick={()=>handleMyProfile("mypage")}>
            <Image src={userImg} alt="userImg"></Image>
            마이페이지</div>
        <div id="mypost" style={{ backgroundColor: btnPressed === "mypost" ? "rgba(0, 0, 0, 0.1" : "#f4f4f4" }} onClick={()=>handleMyPost("mypost")}>
        <Image src={mypostImg}  alt="mypostImg"></Image>
            내 포스트</div>
        <div >
            <Image src={treeImg} alt="treeImg"></Image>
            지식 나무</div>
        
     </div>
    )
}