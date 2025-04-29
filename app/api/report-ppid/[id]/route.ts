import { db } from '@/lib/db';
import { reportPpid } from '@/lib/schemaDb';
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const singleNews = await db
      .select()
      .from(reportPpid)
      .where(eq(reportPpid.id, Number(params.id)))
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