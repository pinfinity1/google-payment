import {type ReactNode} from "react";
import type {Metadata} from "next";
import {Lexend} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import QueryProvider from "@/app/QueryProvider";


const lexend = Lexend({subsets: ['latin']});

export const metadata: Metadata = {
    title: "General ads",
    description: "General ads",
};

export default function RootLayout ({children}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={lexend.className}
        >
        <QueryProvider>
            <Header/>
            <main
                className={"w-full max-w-[1596px] mx-auto flex-grow px-4 md:px-20 py-8 md:py-12"}>
                {children}
            </main>
            <Footer/>
        </QueryProvider>
        </body>
        </html>
    );
}
