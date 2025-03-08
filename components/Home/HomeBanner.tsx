import Image from "next/image";


export default function HomeBanner () {
    return (
        <section className={"w-full flex flex-col md:flex-row items-center justify-around gap-20 lg:gap-0 mt-10"}>
            <div className={"text-center md:text-left space-y-2 pb-10"}>
                <h3 className={"text-3xl tracking-wide xl:font-semibold"}>Welcome to Payment Service</h3>
                <h2 className={"text-4xl font-semibold text-pr-green-60"}>General ads</h2>
            </div>
            <div className={"relative flex items-center justify-center"}>
                <Image priority src={'/credit-card-bro.svg'} width={320} height={280} alt={"online banking logo"} />
                <span className={"absolute -top-[60px] -right-[40px] xl:-right-[70px] bg-[url(/ArrowGroup.png)] w-[220px] h-[200px] bg-cover -z-10"}></span>
            </div>
        </section>
    )
}