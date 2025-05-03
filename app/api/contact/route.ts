import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { contactUs } from '@/lib/schemaDb'
import { z } from 'zod'
import { like, or, sql } from 'drizzle-orm'

// Define validation schema
const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Nama lengkap minimal 2 karakter" }),
  email: z.string().email({ message: "Email tidak valid" }),
  description: z.string().min(10, { message: "Deskripsi minimal 10 karakter" })
})

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const rawPage = Number(searchParams.get('page')) || 1
    const limit = Number(searchParams.get('limit')) || 10
    const search = searchParams.get('search') || ''

    // Always start at page 1 when searching (if there are results)
    const page = search ? 1 : rawPage

    // Count query - use raw SQL for reliability
    const countSql = search
      ? sql`SELECT COUNT(*) FROM "ContactUs" 
           WHERE "fullName" ILIKE ${`%${search}%`}`
      : sql`SELECT COUNT(*) FROM "ContactUs"`

    const totalResult = await db.execute(countSql)
    const total = Number(totalResult.rows[0].count) || 0

    // Data query
    const dataQuery = db
      .select()
      .from(contactUs)

    if (search) {
      dataQuery.where(
        or(
          like(contactUs.fullName, `%${search}%`),
        )
      )
    }

    const requestData = await dataQuery
      .orderBy(contactUs.createdAt)
      .limit(limit)
      .offset((page - 1) * limit)

    // Calculate pagination metadata
    const totalPages = Math.ceil(total / limit)
    const hasNextPage = page * limit < total
    const hasPreviousPage = page > 1

    // Ensure pagination is always shown when there are results
    const showPagination = total > 0

    return NextResponse.json({
      data: requestData,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage,
        hasPreviousPage,
        showPagination, // Explicit flag for UI
        currentSearch: search,
      },
    })
  } catch (error) {
    console.error('Error fetching contact uss:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contact uss' },
      { status: 500 }
    )
  }
}

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
