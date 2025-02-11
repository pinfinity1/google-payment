import CustomInput from "@/Components/common/CustomInput";
import CustomButton from "@/Components/common/CustomButton";


export default function LoginComp() {
    return (
        <>
            <h3 className={"text-pr-green-60 text-[28px] mb-3"}>Login</h3>
            <p className={"font-extralight text-grey-shade-75"}>Welcome back! Please log in to access your
                account.
            </p>
            <form className={"relative w-full flex flex-col items-center gap-8 pt-8 z-10"}>
                <div className={"w-full flex flex-col lg:flex-row items-center gap-5"}>
                    <CustomInput type={"email"} placeholder={"Enter your Email"}/>
                    <CustomInput type={"password"} placeholder={"Enter your Password"}/>
                </div>
                <div className={"w-full lg:max-w-[400px] flex flex-col items-center gap-5 sm:px-20 lg:p-0"}>
                    <CustomButton type={"submit"}>Log in</CustomButton>
                    <CustomButton href={"/auth/signup"}>Sign Up</CustomButton>
                </div>
            </form>
        </>
    )
}