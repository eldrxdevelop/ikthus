import type { Metadata } from "next"
import { Josefin_Sans } from "next/font/google"
import '../app/globals.css'

const josefinSans = Josefin_Sans({
    variable: "--font-josefin-sans",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Ikthus",
    description: "Secure updates from anywhere.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${josefinSans.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
