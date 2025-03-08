import {AdvantagesItem} from "@/components/Home/AdvantagesItem";
import {Banknote, BriefcaseConveyorBelt, Wallet} from "lucide-react";


export default function Advantages() {
    return (
        <section className={"w-full py-5"}>
            <p className={"text-center lg:text-left text-3xl pb-5 pl-4 border-b border-grey-shade-20"}>Our <span className={"text-pr-green-60"}>Product</span></p>
            <div className={"w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-grey-shade-15"}>
                <AdvantagesItem title={"Bank Card Payments"} icon={<Wallet />} >
                    We process payments to credit cards
                </AdvantagesItem>
                <AdvantagesItem title={"Client Transaction Efficiency"} icon={<BriefcaseConveyorBelt />} >
                    Efficient transactions with a large client base
                </AdvantagesItem>
                <AdvantagesItem title={"Payment System Partnerships"} icon={<Banknote />} >
                    We collaborate with the following payment systems: VISA, MasterCard
                </AdvantagesItem>
            </div>
        </section>
    )
}