import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { contactUs } from '@/lib/schemaDb'
import { z } from 'zod'

// Define validation schema
const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Nama lengkap minimal 2 karakter" }),
  email: z.string().email({ message: "Email tidak valid" }),
  description: z.string().min(10, { message: "Deskripsi minimal 10 karakter" })
})

export async function POST(req: Request) {
  try {
    const rawBody = await req.json()
    
    // Validate with schema
    const validatedData = contactFormSchema.parse(rawBody)

    // Prepare data for database
    const dbData = {
      fullName: validatedData.fullName,
      email: validatedData.email,
      description: validatedData.description
    }

    // Insert into database
    const [result] = await db.insert(contactUs)
      .values(dbData)
      .returning()

    return NextResponse.json(result, { status: 201 })

  } catch (error) {
    // Handle Zod error
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: "Validasi gagal",
          details: error.errors.map(e => ({
            field: e.path[0],
            message: e.message
          }))
        },
        { status: 400 }
      )
    }

    console.error('Error:', error)
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    )
  }
}