import Link from "next/link";


export default function Header() {
    return (
        <div className={"w-full max-w-[1596px] mx-auto px-4 md:px-20 pt-10 md:pt-8 "}>
            <div
                className={"w-full flex items-center justify-between px-6 py-4 bg-grey-shade-11 border border-grey-shade-15 rounded-[12px] 2xl:rounded-[100px]"}>
                <Link href={"/"} className={"pl-5 pr-8 text-2xl font-bold"}>LOGO</Link>
                <div className={"hidden lg:flex items-center gap-6 px-8 text-[14px]"}>
                    <span>Advantages</span>
                    <span>Who for</span>
                    <span>How it Works</span>
                    <span>Contact</span>
                </div>
                <div className={"hidden sm:flex items-center gap-2"}>
                    <Link href={"/auth/signup"}
                          className={"border border-transparent hover:border-pr-green-60 px-4 py-3 rounded-[82px] transition-all duration-150"}>
                        Sign Up
                    </Link>
                    <Link href={"/auth/login"}
                          className={"bg-pr-green-60 text-grey-shade-11 px-6 py-3 rounded-[82px]"}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}