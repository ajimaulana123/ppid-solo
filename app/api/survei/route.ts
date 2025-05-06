import { db } from '@/lib/db';
import { survei } from '@/lib/schemaDb';
import { desc, sql, ilike, and } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { uploadImage } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get('page')) || 1;
    const search = searchParams.get('search') || '';
    const limit = Number(searchParams.get('limit')) || 9; 
    const offset = (page - 1) * limit;

    // Query dengan filter pencarian
    const query = db
      .select()
      .from(survei)
      .where(
        search 
          ? and(
              ilike(survei.title, `%${search}%`),
              // Bisa ditambahkan field lain untuk dicari:
              // or(ilike(news.content, `%${search}%`))
            )
          : undefined
      )
      .orderBy(desc(survei.createdAt));

    const allNews = await query.limit(limit).offset(offset);

    // Hitung total data dengan filter yang sama
    const totalQuery = await db
      .select({ count: sql<number>`count(*)` })
      .from(survei)
      .where(
        search 
          ? and(
              ilike(survei.title, `%${search}%`),
              // or(ilike(news.content, `%${search}%`))
            )
          : undefined
      );

    const totalPages = Math.ceil(totalQuery[0].count / limit);

    return NextResponse.json({
      data: allNews,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: totalQuery[0].count,
        itemsPerPage: limit,
        searchQuery: search
      }
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Gagal memuat berita' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const title = formData.get('title')?.toString() || '';
    const content = formData.get('content')?.toString() || '';
    const imageFile = formData.get('image') as File | null;

    // Enhanced validation
    if (!title.trim() || !content.trim()) {
      return NextResponse.json(
        { error: 'Judul dan konten harus diisi' },
        { status: 400 }
      );
    }

    if (title.length > 255) {
      return NextResponse.json(
        { error: 'Judul tidak boleh lebih dari 255 karakter' },
        { status: 400 }
      );
    }

    // File upload handling
    let imagePath = null;
    if (imageFile && imageFile.size > 0) {
      try {
        const uploadResult = await uploadImage(imageFile);
        imagePath = uploadResult.path;
      } catch (uploadError) {
        console.error('Upload error:', uploadError);
        return NextResponse.json(
          { error: uploadError instanceof Error ? uploadError.message : 'Gagal mengupload gambar' },
          { status: 500 }
        );
      }
    }

    // Database operation
await db.insert(survei)
      .values({
        title,
        content,
        imageUrl: imagePath,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .returning();

    return NextResponse.json({
      message: 'Berita berhasil dibuat'
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating news:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}