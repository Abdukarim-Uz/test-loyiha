// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    const token = false
    const isAdminPath = request.nextUrl.pathname.startsWith('/admin')

    if (isAdminPath && !token) {
        // Agar token bo'lmasa, login sahifasiga yo'naltirish
        return NextResponse.redirect(new URL('/auth', request.url))
    }
}

export const config = {
    matcher: '/admin/:path*',
}