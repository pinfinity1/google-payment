import {type ReactNode} from "react";
import type {Metadata} from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import QueryProvider from "@/app/QueryProvider";
import {Toaster} from '@/components/ui/toaster';
import {ToastProvider, ToastViewport} from '@/components/ui/toast';
import localFont from 'next/font/local';
import "./globals.css";



const lexend = localFont({
    src : "../public/fonts/Lexend-Medium.ttf",
    weight: '400',
    style: 'normal',
    variable: '--font-lexend',
});

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
            <ToastProvider>
                <Header/>
                <main
                    className={"w-full max-w-[1596px] mx-auto flex-grow px-4 md:px-20 py-8 md:py-12"}>
                    {children}
                </main>
                <Footer/>
                <Toaster/>
                <ToastViewport/>
            </ToastProvider>
        </QueryProvider>
        </body>
        </html>
    );
}
