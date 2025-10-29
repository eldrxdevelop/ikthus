import type { Metadata } from "next"
import { Josefin_Sans } from "next/font/google"
import { auth0 } from "@/lib/auth0"
import './globals.css'

const josefinSans = Josefin_Sans({
    variable: "--font-josefin-sans",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Ikthus",
    description: "Secure updates from anywhere."
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${josefinSans.variable} antialiased`}>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}