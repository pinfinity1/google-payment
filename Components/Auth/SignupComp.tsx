import CustomInput from "@/Components/common/CustomInput";
import CustomButton from "@/Components/common/CustomButton";


export default function SignupComp() {
    return (
        <>
            <h3 className={"text-pr-green-60 text-[28px] mb-3"}>Sign Up</h3>
            <p className={"font-extralight text-grey-shade-75"}>
                Join our community today! Create an account to unlock
                exclusive features and personalized experiences.
            </p>
            <form className={"relative w-full flex flex-col items-center gap-8 pt-8 z-10"}>
                <div className={"w-full grid grid-cols-2 gap-5"}>
                    <CustomInput type={"text"} placeholder={"Enter First Name"}/>
                    <CustomInput type={"text"} placeholder={"Enter Last Name"}/>
                    <CustomInput type={"email"} placeholder={"Enter your Email"}/>
                    <CustomInput type={"password"} placeholder={"Enter your Password"}/>
                </div>
                <div className={"w-full lg:max-w-[400px] flex flex-col items-center gap-5 sm:px-20 lg:p-0"}>
                    <CustomButton type={"submit"}>Sign Up</CustomButton>
                    <CustomButton href={"/auth/login"}>Login</CustomButton>
                </div>
            </form>
        </>
    )
}