"use client"
import Image from "next/image"
import styles from "./home.module.css"
import likesIcon from "@/asset/images/likestar.png"
import searchIcon from "@/asset/images/main/search.png"
import { useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { AuthContext } from "./Provider/authProvider"
import { InfiniteData, useInfiniteQuery, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useInView } from "react-intersection-observer"

type Post ={
    postId: number;
    nickname: string;
    title: string;
    tags: string [];
    likeCount: number;
    is_like: boolean;
    imageUrl: string;
    createdDate: string;
    modifiedDate: string;
}
export default  function Home(){
    const {isLogin,nickname}=useContext(AuthContext)
    const tabRef=useRef<HTMLDivElement>(null)
    const slideRef = useRef<HTMLDivElement>(null);
    const postTabRef = useRef<HTMLDivElement>(null!);
    const bestWrapperRef=useRef<HTMLDivElement>(null!)
    const imageBoxRef = useRef<HTMLDivElement>(null!)
    const [tabMenu, setTabMenu]=useState("popularTab")
    const [datePostMenu, setDatePostMenu]=useState("주간")
    const [upScroll, setUpScroll] = useState(0);
    const router=useRouter()

    //인기포스트 요청
    async function onHandleBestPostPreview({ pageParam }: { pageParam?: number }) {
        try {
            const response = await axios.get(`http://localhost:8000/api/v1/posts/ranks?type=weekly&number=20&offset=${pageParam}&limit=12`)
            console.log(response.data)
            return response.data.slicedData
        } catch (error) {
            console.error(error)
        }
    }
    //리액트쿼리를 이용한 데이터 헨들 무한스크롤
    const {data:bestPost, isLoading, isError, isSuccess, fetchNextPage, hasNextPage, isFetching  }=useInfiniteQuery<Post[],object,InfiniteData<Post[]>,[_1: string],number>({
        queryKey:["bestPostPreview"],
        queryFn: onHandleBestPostPreview,
        initialPageParam:0,
        getNextPageParam: (lastpage)=>lastpage.at(-1)?.postId,
   

    })

    //스클롤 감지 하단으로 가면 다음 요청 보내기
    const {ref,inView}=useInView({
        threshold:0,
        delay:0,

    });
    useEffect(()=>{
        if (inView && !isFetching && hasNextPage) {
            fetchNextPage();
          }

    },[inView,isFetching,hasNextPage,fetchNextPage])

    
      
      


    useEffect(() => {
        if (postTabRef?.current && slideRef?.current) {
            const handleScroll = () => {
                const scrollDetection = slideRef.current?.scrollTop as number;
                if (upScroll < scrollDetection) {
                  postTabRef.current.style.height="0";
                  postTabRef.current.style.opacity="0"
                  postTabRef.current.style.transition="0.5s"
                } else {
                    postTabRef.current.style.height="40px"
                    postTabRef.current.style.opacity="100%"
                    postTabRef.current.style.transition="0.5s"
                }
                setUpScroll(scrollDetection);
            };
    
            slideRef.current.addEventListener("scroll", handleScroll);
    
            return () => {
                slideRef.current?.removeEventListener("scroll", handleScroll);
            };
        }
    }, [postTabRef, slideRef, upScroll])
    

    const onHandleTab=(prev:string)=>{
        setTabMenu(prev);
        if (slideRef.current) {
            slideRef.current.scrollLeft = tabMenu === "recommendTab" ? 0: 3000;
            slideRef.current.style.scale = "0.75";
            slideRef.current.style.transition = "0.5s";
          
            const intervalId = setInterval(() => {
              if (slideRef.current) {
                slideRef.current.style.scale = "1";
              }
            }, 500);
          
            setTimeout(() => {
              clearInterval(intervalId);
            }, 500);

          }
    }
    useEffect(()=>{
      if(tabRef.current){
        tabRef.current.style.left=tabMenu==="recommendTab"? '100px':'0'
        tabRef.current.style.transition="0.5s"
      }
    },[tabMenu])

    const onHandlePost =()=>{
        if(isLogin){
            router.push(`/${nickname}/dashboard/home/post`)
        }
        else{
            router.push(`/dashboard/home/post`)
        }
        
    }
    const handlePostTab= (tab:any)=>{
        setDatePostMenu(tab)
    }
    const styleComponent = (tab:any) => {
        return {
            borderBottom: datePostMenu === tab ? "1px solid #D7FFB8" : "none",
        };
      };
    return(
        <div className={styles.moduleBackground} >
            <div className={styles.homeContainer}>
                <div className={styles.postTab}>
                    <div className={styles.searchBar}>
                        <Image src={searchIcon} alt="search"></Image>
                        <span>포스트 검색...</span>
                    </div>
                    <h1>인기포스트</h1>
                    <div className={styles.popularTab}>
                        <span>주간</span>
                        <span>월간</span>
                        <span>연간</span>
                    </div>
                </div>
            </div>
        </div>
    )
}