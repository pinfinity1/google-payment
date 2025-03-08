import React from 'react'

interface CustomIconProps {
    children: React.ReactNode;
}


export const CustomIcon: React.FC<CustomIconProps> = ({children}) => {
    return (
        <div className={"w-[68px] h-[68px] text-pr-green-60 flex items-center justify-center rounded-full bg-gradient-to-b from-pr-green-60/20"}>
            <div className={"w-[52px] h-[52px] flex items-center justify-center rounded-full bg-gradient-to-b from-pr-green-60/20 border border-pr-green-65/50"}>
                {children}
            </div>
        </div>
    )
}