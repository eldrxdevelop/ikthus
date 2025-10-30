import type { NextRequest } from "next/server"
import { auth0 } from "./lib/auth0"

export async function middleware(request: NextRequest) {
    const result = await auth0.middleware(request)
    return result
}

export const config = {
    matcher: [
        "/user/:path*",
        "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
}