"use client"
import { useEffect } from 'react'

export default function LoginRedirect() {
    useEffect(() => {
        globalThis.location.href = '/auth/login'
    }, [])
}