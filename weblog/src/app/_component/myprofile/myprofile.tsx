import styles from "./myprofile.module.css"
import Image from "next/image";
import profile from "@/asset/images/kwang.jpg"
import { useContext } from "react"
import { AuthContext } from "../Provider/authProvider"
export default function MyPage(){
    const {nickname}=useContext(AuthContext)
    return(
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.header}>
                    <div className={styles.profileCircle}>
                        <Image src={profile} alt="kwang"/>
                   </div>
                   <div className={styles.authContainer}>
                        <b>{nickname}</b>
                        <div className={styles.followers}>
                            <span>포스트 수 3개</span>
                            <span>팔로워: 1500</span>
                            <span>팔로잉: 255</span>
                        </div>
                        <span>email: sgky0511@naver.com</span>
                        <a href="https://velog.io/@tkrhdrhkdduf">velog.io/@tkrhdrhkdduf</a>
                        <span className={styles.subTitle}>나는 멋있는 남자/ 자기계발 하는중 !<br/> 올해는 행복하길!</span>
                    </div>
                 
                   
                </div>
                <div className={styles.headerTab}></div>
            </div>
            <div className={styles.setting}>

            </div>
        </div>
    )
}