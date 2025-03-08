import React, { type ReactElement} from "react";
import {CustomIcon} from "@/components/common/CustomIcon";


interface AdvantagesItemProps {
    title: string;
    icon: ReactElement;
    children: string;
}


export const AdvantagesItem = ({title , icon , children} : AdvantagesItemProps) => {
    return (
        <div className={"flex flex-col items-center gap-4 py-4"}>
            <CustomIcon>
                {icon}
            </CustomIcon>
            <p className={"text-base text-center text-white"}>{title}</p>
            <p className={"text-grey-shade-70 text-sm font-light text-center px-3"}>{children}</p>
        </div>
    )
}