import { NextResponse } from 'next/server';
import chapter2Data from '../../data/chapter2.json';

export async function GET() {
  return NextResponse.json(chapter2Data);
} 