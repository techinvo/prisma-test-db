import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const result = await prisma.$queryRaw`SHOW TABLES`;
        const tables = result.map(row => Object.values(row)[0]);
        return NextResponse.json(tables);
    } catch (err) {
        return NextResponse.json({ err: true, data: err });
    }
}

export async function POST(req, res) {
    const { tableName } = await req.json();
    try {
        const data = await prisma.$queryRaw`SELECT * FROM ${tableName}`;
        return NextResponse.json({data});
    } catch (error) {
        return NextResponse.json({ error });
    }
}

