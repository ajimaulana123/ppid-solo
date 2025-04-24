import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { submission } from '@/lib/schemaDb'
import { submissionFormSchema } from '@/lib/submission/schemaSubmissionForm'
import { z } from 'zod' // Tambahkan import ini

export async function POST(req: Request) {
  try {
    const rawBody = await req.json()
    
    // Validasi dengan schema yang ada
    const validatedData = submissionFormSchema.parse(rawBody)

    // Konversi ke format yang sesuai dengan Drizzle schema
    const dbData = {
      nik: validatedData.nik.toString(),
      fullName: validatedData.fullName,
      reasonOfSubmission: validatedData.reasonOfSubmission,
      chronology: validatedData.chronology,
    }

    // Insert ke database
    const [result] = await db.insert(submission)
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