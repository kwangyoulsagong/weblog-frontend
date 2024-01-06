import { redirect } from "next/navigation";

export default function Login(){
    //리다이렉트로 이 라우팅 주소로 이동
    redirect('/account/login');
}