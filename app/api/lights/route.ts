import { NextResponse } from "next/server";

export async function GET() {
    const lights = [
        { 
            id: 1,
            name: 'test1',
            color: '#ff9100',
            type: 'on'
        },
        {
            id: 2,
            name: 'test2',
            color: '#ff2a00',
            type: 'off'
        },
        {
            id: 3,
            name: 'test3',
            color: '#ffdd00',
            type: 'off'
        },
        {
            id: 4,
            name: 'test4',
            color: '#ffdd00',
            type: 'off'
        },
        {
            id: 5,
            name: 'test5',
            color: '#ffdd00',
            type: 'off'
        },
    ];
    return NextResponse.json({ lights });
}