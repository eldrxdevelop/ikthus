"use client"
import Image from "next/image"
import { useUser } from '@auth0/nextjs-auth0'

export default function Home() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>
    if (user) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center p-8">
                <div>Welcome {user.name}</div>
                <div>Email: {user.email}</div>
                <a href="/auth/logout">Logout</a>
            </div>
        )
    }
}
