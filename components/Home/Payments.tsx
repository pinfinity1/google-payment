import React from "react";
import {Building2, Calculator, DollarSign, Store, Users, Waypoints} from "lucide-react";
import {PaymentsItem} from "@/components/Home/PaymentsItem";


export const Payments= () => {
    return (
        <div className={"w-full"}>
            <p className={"text-center lg:text-left text-3xl text-pr-green-60 pb-5 pl-4"}>Use Cases</p>
            <div className={"relative w-full bg-grey-shade-11 rounded-2xl grid sm:grid-cols-2 lg:grid-cols-3 gap-3 p-5"}>
                <PaymentsItem icon={<DollarSign/>} title={"Cash Prize Promotions"}/>
                <PaymentsItem icon={<Users />} title={"Freelancer Collaborations"}/>
                <PaymentsItem icon={<Waypoints/>} title={"Affiliate Program Payouts"}/>
                <PaymentsItem icon={<Calculator/>} title={"Loan and Credit Issuance"}/>
                <PaymentsItem icon={<Store/>} title={"Supplier Payments and Settlements"}/>
                <PaymentsItem icon={<Building2/>} title={"Betting Company Payouts"}/>
                <div className={"absolute left-0 top-0 bg-[url(/top-left-spread.png)] bg-cover bg-no-repeat w-[120px] h-[120px] md:w-[180px] md:h-[180px]"}></div>
            </div>
        </div>
    )
}