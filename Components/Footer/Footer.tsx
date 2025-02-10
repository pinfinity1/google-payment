export default function Footer() {
    return (
        <div
            className={"w-full flex-grow flex flex-col items-center gap-6 lg:gap-10 pt-12 lg:pt-[60px] pb-8 px-4 lg:px-[80px] 2xl:px-[162px] bg-grey-shade-11"}>
            <h3 className={"text-2xl font-bold"}>LOGO</h3>
            <div className={"text-[10px] md:text-base flex items-center gap-6"}>
                <span>Avantages</span>
                <span>Who for</span>
                <span>How it Works</span>
                <span>Contact</span>
            </div>
            <div className={"w-full h-[1px] bg-grey-shade-15 rounded"}></div>
            <div
                className={"w-full bg-grey-shade-10 text-grey-shade-70 font-light flex flex-col gap-5 lg:flex-row items-center justify-center lg:justify-between p-6 rounded-xl lg:rounded-full"}>
                <div><span className={"text-xl font-bold"}>LOGO</span> All Rights Reserved</div>
                <div>Privacy Policy <span className={"mx-3"}>|</span> Terms of Service</div>
            </div>
            <div className={"w-full h-[1px] bg-grey-shade-15 rounded"}></div>
        </div>
    )
}