"use client"
import {useParams} from "next/navigation";
import SignupComp from "@/components/Auth/SignupComp";
import LoginComp from "@/components/Auth/LoginComp";
import {useState} from "react";
import {VerifyOTP} from "@/components/Auth/VerifyOTP";


export default function AuthPage() {
    const [showOTP, setShowOTP] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    
    const {slug} = useParams();
    
    const handleShowOTP = () => {
        setShowOTP(prev => !prev);
    }

    return (
        <main className={"w-full flex items-center justify-center"}>
            <div
                className={"relative w-full max-w-[1064px] 2xl:max-w-[1326px] mx-auto border border-grey-shade-15 rounded-2xl px-4 py-8 lg:py-20 lg:px-20 2xl:px-[200px] text-center bg-[url(/auth-form.jpg)] md:bg-cover bg-center"}>
                {showOTP ? (
                    <VerifyOTP email={email}/>
                ) : slug === "login" ? (
                    <LoginComp showVerifyOTP={handleShowOTP} setEmail={setEmail} />
                ) : (
                    <SignupComp showVerifyOTP={handleShowOTP} setEmail={setEmail} />
                )
                }
                <div className={"absolute top-0 right-0 bg-[url('/top-right-spread.png')] w-[160px] h-[160px]"}></div>
            </div>
        </main>
    )
}