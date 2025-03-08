import HomeBanner from "@/components/Home/HomeBanner";
import Advantages from "@/components/Home/Advantages";
import {Payments} from "@/components/Home/Payments";


export default function Home() {
    return (
        <div className={"flex flex-col items-center gap-20"}>
            <HomeBanner />
            <Advantages />
            <Payments />
        </div>
    );
}
