import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return NextResponse.json({
        success: true
    })
}