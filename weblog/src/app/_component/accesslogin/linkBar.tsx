import Link from "next/link";

import styles from "@/app/_component/dashboard.module.css"
import Image from "next/image";
export default function LinkBar(){
    return(
        <div className={styles.leftFixedSection}>
        <a href="/dashboard/home">홈</a>
        <a href="/dashboard/myprofile">내 정보</a>
        <Link href="/광열/dashboard/mypost">내 포스트</Link>
        <a href="/dashboard/namu">지식 나무</a>
        
     </div>
    )
}