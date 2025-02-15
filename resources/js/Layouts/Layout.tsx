import type React from "react";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//     title: "EcoShop - Your Eco-Friendly Store",
//     description: "Discover eco-friendly products that make a difference",
// };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Toaster position="top-center" reverseOrder={false} />
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
