// app/api/visitors/route.ts
import { NextResponse } from 'next/server';

let serverCount = 0;

export async function POST() {
  serverCount++;
  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json({ count: serverCount });
}
