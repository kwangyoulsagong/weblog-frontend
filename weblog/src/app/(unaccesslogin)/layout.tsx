"use client"
import { ReactNode } from "react";
import styles from "@/app/_component/main.module.css"
import { useQueryClient } from "@tanstack/react-query";
import ReactQueryProvider from "@/app/_component/Provider/ReactQueryProvider";
import { Provider } from 'react-redux'
import store from "@/app/store/store"
import { GoogleOAuthProvider } from "@react-oauth/google";
type Props ={children:ReactNode, modal:ReactNode}
export default function Layout({children, modal}: Props){
    return(
        <GoogleOAuthProvider clientId="483801956877-j1ucs55ki30uj8inkinf8fod2477m9a2.apps.googleusercontent.com">
        <Provider store={store}>
        <ReactQueryProvider>
        <div className={styles.container}>
            {children}
            {modal}
        </div>
        </ReactQueryProvider>
        </Provider>
        </GoogleOAuthProvider>
    )
} 