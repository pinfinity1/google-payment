import {ComponentPropsWithoutRef} from "react";


type InputProps = ComponentPropsWithoutRef<"input">


export default function CustomInput(props: InputProps) {
    return (
        <p className={"w-full"}>
            <input
                className={"w-full p-4 text-base bg-grey-shade-10 rounded-xl placeholder:text-grey-shade-35 border border-grey-shade-15 focus:outline-none tracking-wide"} {...props}/>
        </p>
    )
}