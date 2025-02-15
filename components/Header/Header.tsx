import Link from "next/link";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import CustomButton from "@/components/common/CustomButton";


export default function Header () {
    return (
        <div className={"w-full max-w-[1596px] mx-auto px-4 md:px-20 pt-10 md:pt-8 "}>
            <div
                className={"w-full flex items-center justify-between px-6 py-4 bg-grey-shade-11 border border-grey-shade-15 rounded-[12px] 2xl:rounded-[100px]"}>
                <Link href={"/"} className={"pl-5 pr-8 text-2xl font-bold"}>General ads</Link>
                <div className={"hidden xl:flex items-center gap-6 px-8 text-[14px]"}>
                    <span>Advantages</span>
                    <span>Who for</span>
                    <span>How it Works</span>
                    <span>Contact</span>
                </div>
                <div className={"hidden lg:flex items-center gap-2"}>
                    <Link href={"/auth/signup"}
                          className={"border border-transparent hover:border-pr-green-60 px-4 py-3 rounded-[82px] transition-all duration-150"}>
                        Sign Up
                    </Link>
                    <Link href={"/auth/login"}
                          className={"bg-pr-green-60 text-grey-shade-11 px-6 py-3 rounded-[82px]"}>
                        Login
                    </Link>
                </div>
                <Sheet>
                    <SheetTrigger
                        className={"lg:hidden bg-pr-green-60 text-black px-6 py-3 rounded-full focus:outline-none"}><Menu/></SheetTrigger>
                    <SheetContent className="xs:w-[400px] bg-grey-shade-11" side={"left"}>
                        <SheetHeader>
                            <SheetTitle className={"text-2xl text-grey-shade-75 font-bold py-3 border-b"}>
                                General ads
                            </SheetTitle>
                            <SheetDescription className={"py-4"}>
                                <div className={"flex items-center text-center gap-2 text-pr-green-60"}>
                                    <SheetClose asChild>
                                        <CustomButton href={"/auth/signup"}>
                                            Sign Up
                                        </CustomButton>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <CustomButton href={"/auth/login"}>
                                            Login
                                        </CustomButton>
                                    </SheetClose>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            
            </div>
        </div>
    )
}