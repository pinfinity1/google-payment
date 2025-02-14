import Link from "next/link";


export default function Footer () {
    return (
        <div
            className={"w-full bg-grey-shade-11"}>
            <div
                className={"w-full h-full max-w-[1596px] mx-auto flex flex-col items-center gap-6 lg:gap-10 pt-12 lg:pt-[60px] pb-8 px-4 lg:px-[80px] 2xl:px-[162px] "}>
                <h3 className={"text-2xl font-bold"}>General ads</h3>
                <div className={"text-[10px] md:text-base flex items-center gap-6"}>
                    <span>Advantages</span>
                    <span>Who for</span>
                    <span>How it Works</span>
                    <span>Contact</span>
                </div>
                <div className={"w-full h-[1px] bg-grey-shade-15 rounded"}></div>
                <div
                    className={"w-full bg-grey-shade-10 text-grey-shade-70 font-light flex flex-col gap-5 lg:flex-row items-center justify-center lg:justify-between p-6 rounded-xl lg:rounded-full"}>
                    <div><span className={"text-xl font-bold"}>General ads</span> All Rights Reserved</div>
                    <div>
                        <Link className={"hover:text-pr-green-60 transition-all duration-150"} href={"/privacy-policy"}>
                            Privacy Policy
                        </Link>
                        <span className={"mx-3"}>|</span>
                        <Link className={"hover:text-pr-green-60 transition-all duration-150"} href={"/user-agreement"}>
                            User Agreement
                        </Link>
                    </div>
                </div>
                <div className={"w-full h-[1px] bg-grey-shade-15 rounded"}></div>
            </div>
        </div>
    )
}