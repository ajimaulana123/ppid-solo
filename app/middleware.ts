// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function middleware(request: NextRequest) {
  const token = cookies().get('admin_token')?.value
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')

  if (isAdminRoute && token !== process.env.ADMIN_PERMANENT_TOKEN) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('from', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}