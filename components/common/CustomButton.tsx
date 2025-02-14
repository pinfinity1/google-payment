import {type ComponentPropsWithoutRef} from "react";
import Link from "next/link";


type ButtonProps = ComponentPropsWithoutRef<"button"> & {
    href?: never
}

type LinkProps = ComponentPropsWithoutRef<"a"> & {
    href: string
}

function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
    return "href" in props
}


export default function CustomButton(props: ButtonProps | LinkProps) {
    if (isLinkProps(props)) {
        return <Link className={"w-full bg-grey-shade-15 py-4 rounded-xl"} {...props} />
    }
    return (
        <button className={"w-full bg-pr-green-60 text-black py-4 rounded-xl"} {...props}/>
    )
}