import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = ['/admin']

export function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isProctedRoute = protectedRoutes.includes(path)
    const token = request.cookies.get('token')?.value
    if (isProctedRoute && !token) {
        return NextResponse.redirect(new URL('/auth', request.nextUrl))
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/admin/:path*',
}