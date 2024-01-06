import { ReactNode } from "react";
import styles from "./menubar.module.css"
import Image from "next/image";
import Logo from "@/asset/images/logo.svg"
type props = {children:ReactNode}
export default function MenuBar({children}:props){
    return(
        <div className={styles.container}>
            <div className={styles.moduleMenubar}>
            <Image className={styles.logo} src={Logo} alt='logo' />
            <line className={styles.moduleLine}></line>
            </div>{children}</div>
    )

}