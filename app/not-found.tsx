import Image from "next/image";
import Link from "next/link";


export default function Custom404() {
    return (
        <main className={"w-full flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between"}>
            <div className={"w-1/2"}>
                <Image className={" w-full my-12"} priority width={160} height={160} src={"/warning404.svg"}
                       alt={"404"}/>
            </div>
            <div className={"w-1/2 flex flex-col items-center justify-center gap-5"}>
                <h1>404 - Page Not Found</h1>
                <Link href={"/"}
                      className={"bg-grey-shade-11 px-4 py-3 border border-pr-green-60 rounded hover:rounded-2xl hover:bg-pr-green-60 hover:text-black transition-all duration-300 "}>
                    Back
                    To
                    Home
                </Link>
            </div>
        </main>
    )
}