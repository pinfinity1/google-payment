import {type ReactNode} from "react";
import type {Metadata} from "next";
import {Lexend} from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";


const lexend = Lexend({subsets: ['latin']});

export const metadata: Metadata = {
    title: "Google ADS",
    description: "Easy Pay",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={lexend.className}
        >
        <Header/>
        <main className={"w-full min-h-[calc(100dvh_-_124px)] px-4 md:px-20"}>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
