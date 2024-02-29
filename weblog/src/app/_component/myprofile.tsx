"use client"
import { useState } from "react"
import styles from "./myprofile.module.css"
import MyProfile from "./myprofile/myprofile"
import profileImg from "@/asset/images/main/kwang.jpg"
import alarmImg from "@/asset/images/main/notification.png"
import messageImg from "@/asset/images/main/message.png"
import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type profileType={
    nickname:string
    imageUrl: string
    email:string

}

export default function MyComponentProfile(){

    async function onHandleProfile(){
        try{
            const response= await axios.get("http://localhost:8000/api/v1/profiles/mine")
            return response.data;
        }
        catch(error){
            console.error(error)
        }
    }

    const {data:profileData, isLoading, isSuccess, isError}=useQuery<profileType>({
        queryKey:["profileKey"],
        queryFn:onHandleProfile,
    })

    return(
        <div className={styles.container}>
             <div className={styles.background}>
                <div className={styles.top}>
                    <div className={styles.myProfileContainer}>
                        <div className={styles.profiletop}>
                            <div className={styles.profileCircle}>
                                <Image src={profileImg} alt="profileImg"></Image>
                            </div>
                            <div className={styles.info}>
                                <b>{profileData?.nickname}</b>
                                <span>{profileData?.email}</span>
                            </div>
                        </div>
                        <div className={styles.profileBottom}>
                            <div className={styles.exp}>
                                <div></div>
                            </div>
                            <span>프로필 설정</span>
                        </div>
                    </div>
                    <div className={styles.alarmBox}>
                    <Image src={alarmImg} alt="alarmImg"></Image>
                    <span>알림</span>
                </div>
                <div className={styles.messageBox}>
                    <Image src={messageImg} alt="messageImg"></Image>
                    <span>메시지</span>
                </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.privacyContainer}></div>
                    <div className={styles.setting}></div>
                    <div className={styles.plannerSetting}></div>
                </div>
             </div>
        </div>
    )
}