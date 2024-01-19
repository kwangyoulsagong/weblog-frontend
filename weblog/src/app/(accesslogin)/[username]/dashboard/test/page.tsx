"use client"
import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query"
import styles from "./test.module.css"
import axios from "axios"

export default function test(){
    return(
        <div className={styles.background}></div>
    )
}