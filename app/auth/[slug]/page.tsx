"use client"
import Image from "next/image";
import {useParams} from "next/navigation";
import SignupComp from "@/Components/Auth/SignupComp";
import LoginComp from "@/Components/Auth/LoginComp";


export default function AuthPage() {
    const {slug} = useParams();

    
    return (
        <main className={"w-full flex items-center justify-center"}>
            <div
                className={"relative w-full max-w-[1064px] 2xl:max-w-[1326px] mx-auto border border-grey-shade-15 rounded-2xl p-8 lg:py-20 lg:px-20 2xl:px-[200px] text-center bg-[url(/auth-form.jpg)] md:bg-cover bg-center"}>
                {slug === "login" ? (
                    <LoginComp/>
                ) : (
                    <SignupComp/>
                )}
                <Image className={"absolute top-0 right-0 "} src={"/toprightspread.png"} width={280} height={280}
                       alt={"png element"}/>
            </div>
        </main>
    )
}