import {CustomIcon} from "@/components/common/CustomIcon";
import React, {type ReactElement} from "react";

interface PaymentsItemProps {
    title: string;
    icon: ReactElement
}


export const PaymentsItem = ({title , icon} : PaymentsItemProps) => {
    return (
        <div className={"w-full flex sm:flex-col items-center justify-normal sm:justify-center gap-4 p-5 bg-grey-shade-10 rounded-xl border border-grey-shade-15 z-10"}>
            <CustomIcon>
                {icon}
            </CustomIcon>
            <p className={"text-white text-sm sm:text-center"}>{title}</p>
        </div>
    )
}