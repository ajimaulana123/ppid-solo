import { NextResponse } from 'next/server';

export async function GET() {
  const fileUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!fileUrl) {
    return NextResponse.json({ error: 'Supabase URL is not defined' }, { status: 500 });
  }

  try {
    const response = await fetch(fileUrl, { method: 'HEAD' });

    if (response.ok) {
      return NextResponse.json({ message: 'Supabase storage is alive', status: response.status }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Ping failed', status: response.status }, { status: response.status });
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
