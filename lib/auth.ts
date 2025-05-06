import { cookies } from 'next/headers'

export async function validateToken() {
  const token = cookies().get('admin_token')?.value
  if (!token) return false

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`, {
      headers: { 'Cookie': cookies().toString() }
    })

    // Check if response is JSON
    const contentType = res.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      const text = await res.text()
      console.error('Expected JSON, got:', text)
      return false
    }

    const data = await res.json()
    return data.isAuthenticated === true
  } catch (error) {
    console.error('Token validation failed:', error)
    return false
  }
}