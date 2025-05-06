// app/login/page.tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { loginAction } from '@/app/actions/auth'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
        <form action={loginAction}>
          <div className="space-y-4">
            <Input 
              name="token" 
              placeholder="Masukkan Token Admin" 
              required
            />
            <Button type="submit" className="w-full">
              Masuk
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}