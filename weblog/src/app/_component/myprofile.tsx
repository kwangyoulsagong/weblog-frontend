"use client"
import { useState } from "react"
import styles from "./myprofile.module.css"
import MyProfile from "./myprofile/myprofile"
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
                    <b>{profileData?.nickname}</b>
                    <span>{profileData?.email}</span>
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