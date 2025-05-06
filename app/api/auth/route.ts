import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// Simpan token di memory (dalam produksi gunakan database)
const validTokens = new Set<string>()

export async function GET() {
  const token = cookies().get('admin_token')?.value
  return NextResponse.json({ isAuthenticated: validTokens.has(token || '') })
}

export async function POST(req: Request) {
  const { token } = await req.json()

  if (token === process.env.ADMIN_PERMANENT_TOKEN) {
    cookies().set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/admin',
    })
    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ success: false }, { status: 401 })
}