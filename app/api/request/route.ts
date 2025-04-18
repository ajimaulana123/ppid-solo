import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { requestPeople } from '@/lib/schema'
import { requestFormSchema } from '@/lib/schemaRequestForm'
import { z } from 'zod' // Tambahkan import ini

export async function POST(req: Request) {
  try {
    const rawBody = await req.json()
    
    // Validasi dengan schema yang ada
    const validatedData = requestFormSchema.parse(rawBody)

    // Konversi ke format yang sesuai dengan Drizzle schema
    const dbData = {
      fullName: validatedData.fullName,
      nik: validatedData.nik.toString(), // Konversi number ke string
      phone: validatedData.phone.toString(), // Konversi number ke string
      email: validatedData.email,
      detailInformation: validatedData.detailInformation
    }

    // Insert ke database
    const [result] = await db.insert(requestPeople)
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

    // Handle duplicate error
    if (error instanceof Error && /unique/i.test(error.message)) {
      return NextResponse.json(
        { error: "Data sudah terdaftar (NIK/email harus unik)" },
        { status: 409 }
      )
    }

    console.error('Error:', error)
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    )
  }
}