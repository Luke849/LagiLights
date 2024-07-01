import { NextResponse } from "next/server";

export async function GET() {
    const lights = [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
        { id: 3, name: 'test3' },
        { id: 4, name: 'test4' },
    ];
    return NextResponse.json({ lights });
}