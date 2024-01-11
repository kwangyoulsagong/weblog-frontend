"use client"
import styles from "./home.module.css"
export default function Home(){
  
    return(
        <div className={styles.moduleBackground}>
            <div className={styles.innerContents}>
                <div className={styles.popularTab}>인기포스트</div>
            </div>
        </div>
    )
}