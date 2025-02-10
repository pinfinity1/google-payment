import Link from "next/link";


export default function Header() {
    return (
        <div className={"w-full px-4 md:px-20 pt-10 pb-8 md:pt-8 md:pb-6"}>
            <div
                className={"w-full max-w-[1596px] flex items-center justify-between px-6 py-4 bg-grey-shade-11 border border-grey-shade-15 rounded-[12px] 2xl:rounded-[100px]"}>
                <h3 className={"text-2xl font-bold"}>LOGO</h3>
                <div className={"hidden lg:flex items-center gap-6"}>
                    <span>Avantages</span>
                    <span>Who for</span>
                    <span>How it Works</span>
                    <span>Contact</span>
                </div>
                <div className={"hidden sm:flex items-center gap-5"}>
                    <Link href={"/signup"}>
                        Sign Up
                    </Link>
                    <Link href={"/login"} className={"bg-pr-green-60 text-grey-shade-11 px-6 py-3 rounded-[82px]"}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}