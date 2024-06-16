import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req, res) {
    const { tableName } = await req.json();
    try {
        // Get column information
        const columnsResult = await prisma.$queryRaw`
            SELECT COLUMN_NAME 
            FROM INFORMATION_SCHEMA.COLUMNS 
            WHERE TABLE_NAME = ${tableName} AND TABLE_SCHEMA = DATABASE();
        `;
        const columns = columnsResult.map(row => row.COLUMN_NAME);

        return NextResponse.json({columns});
    } catch (error) {
        return NextResponse.json({ error });
    }
}