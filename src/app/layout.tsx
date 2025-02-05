import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: { default: "Next Blog", template: "%s | Next Blog" },
    description:
        "Full stack next blog with app router, server actions and authentication.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="max-w-screen-lg mx-auto px-4">
                    <Header />
                    <main className="w-full min-h-[75vh]">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
