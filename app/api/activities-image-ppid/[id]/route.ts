import { db } from '@/lib/db';
import { activiesImagePpid } from '@/lib/schemaDb';
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { uploadImage, deleteImage } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const singleNews = await db
      .select()
      .from(activiesImagePpid)
      .where(eq(activiesImagePpid.id, Number(params.id)))
      .limit(1);

    if (!singleNews.length) {
      return NextResponse.json(
        { error: 'Berita tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json(singleNews[0]);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Gagal memuat detail berita' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    
    // Validasi ID
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'ID berita harus berupa angka' },
        { status: 400 }
      );
    }

    // Parse FormData
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const imageFile = formData.get('image') as File | null;
    const removeImage = formData.get('removeImage') === 'true';

    // Validasi input
    if (!title || !content) {
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

    // Handle file upload jika ada file baru
    let imageUrl = null;
    if (imageFile && imageFile.size > 0) {
      try {
        const uploadResult = await uploadImage(imageFile); // Gunakan fungsi upload yang sama dengan POST
        imageUrl = uploadResult.path;
      } catch (uploadError) {
        console.error('Upload error:', uploadError);
        return NextResponse.json(
          { error: 'Gagal mengupload gambar' },
          { status: 500 }
        );
      }
    }

    // Update data di database
    const updateData = {
      title,
      content,
      updatedAt: new Date(),
      ...(imageUrl ? { imageUrl } : {}),
      ...(removeImage ? { imageUrl: null } : {}),
    };

    const updatedNews = await db.update(activiesImagePpid)
      .set(updateData)
      .where(eq(activiesImagePpid.id, id))
      .returning();

    if (updatedNews.length === 0) {
      return NextResponse.json(
        { error: 'Berita tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Berita berhasil diperbarui',
      data: updatedNews[0]
    });

  } catch (error) {
    console.error('Error updating news:', error);
    return NextResponse.json(
      { error: 'Gagal memperbarui berita' },
      { status: 500 }
    );
  }
}


export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Convert string ID to number
    const newsId = parseInt(params.id);
    
    // Validate the ID is actually a number
    if (isNaN(newsId)) {
      return NextResponse.json(
        { error: 'ID berita tidak valid' },
        { status: 400 }
      );
    }

    // 1. Get news item first to obtain imageUrl
    const [newsItem] = await db.select()
      .from(activiesImagePpid)
      .where(eq(activiesImagePpid.id, newsId)) // Now comparing number with number
      .limit(1);

    if (!newsItem) {
      return NextResponse.json(
        { error: 'Berita tidak ditemukan' },
        { status: 404 }
      );
    }

    // 2. Delete image from storage if exists
    if (newsItem.imageUrl) {
      try {
        await deleteImage(newsItem.imageUrl);
      } catch (error) {
        console.error('Gagal menghapus gambar:', error);
        // Continue with deletion even if image deletion fails
      }
    }

    // 3. Delete from database
    await db.delete(activiesImagePpid)
      .where(eq(activiesImagePpid.id, newsId));

    return NextResponse.json(
      { message: 'Berita berhasil dihapus' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error deleting news:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}
