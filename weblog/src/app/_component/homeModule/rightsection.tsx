import Image from "next/image"
import styles from "./rightsection.module.css"
import profileImg from "@/asset/images/main/kwang.jpg"
import alarmImg from "@/asset/images/main/notification.png"
import messageImg from "@/asset/images/main/message.png"
import { AuthContext } from "@/app/_component/Provider/authProvider"
import { useContext, useEffect, useRef, useState } from "react"
export default function RightSection(){
    const {isLogin,nickname}=useContext(AuthContext)
    return(
        <div className={styles.rightSection}>
            <div className={styles.box}>
                <div className={styles.profileCircle}>
                    <Image src={profileImg} alt="profileImg"></Image>
                </div>
                <span>{nickname}</span>
                <div className={styles.profileMenu}>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className={styles.notificationBox}>
                <div className={styles.alarmBox}>
                    <Image src={alarmImg} alt="alarmImg"></Image>
                    <span>알림</span>
                </div>
                <div className={styles.messageBox}>
                    <Image src={messageImg} alt="messageImg"></Image>
                    <span>메시지</span>
                </div>
            </div>
        </div>
    )
}