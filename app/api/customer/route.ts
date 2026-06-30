import { NextResponse } from 'next/server';
import { getCustomerSnapshot } from '@/lib/mockData';
export async function GET() { return NextResponse.json(await getCustomerSnapshot()); }
