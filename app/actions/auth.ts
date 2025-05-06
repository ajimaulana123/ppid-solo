// app/actions/auth.ts
'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function loginAction(formData: FormData) {
  const token = formData.get('token')?.toString()
  
  if (!token || token !== process.env.ADMIN_PERMANENT_TOKEN) {
    // Redirect dengan pesan error menggunakan query params
    redirect('/login?error=Invalid token')
    return // Ini tidak akan pernah dieksekusi, hanya untuk TypeScript
  }

  cookies().set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  })
  
  redirect('/admin/form-pengajuan')
}