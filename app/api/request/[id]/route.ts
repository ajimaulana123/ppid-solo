// Perbaikan API route (app/api/request/[id]/route.ts)
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { requestPeople } from '@/lib/schemaDb'
import { z } from 'zod'
import { eq } from 'drizzle-orm'

const updateStatusSchema = z.object({
  requestStatus: z.enum(['sedang diproses', 'ditolak', 'selesai diproses'])
})

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id // Ambil ID dari route parameter
    
    if (!id) {
      return NextResponse.json(
        { error: "ID diperlukan untuk update" },
        { status: 400 }
      )
    }

    const rawBody = await req.json()
    const validatedData = updateStatusSchema.parse(rawBody)

    const [updated] = await db.update(requestPeople)
      .set({ 
        requestStatus: validatedData.requestStatus,
        updatedAt: new Date()
      })
      .where(eq(requestPeople.id, Number(id)))
      .returning()

    if (!updated) {
      return NextResponse.json(
        { error: "Data tidak ditemukan" },
        { status: 404 }
      )
    }

    return NextResponse.json(updated, { status: 200 })

  } catch (error) {
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