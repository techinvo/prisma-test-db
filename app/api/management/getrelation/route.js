import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req, res) {
    const { tableName } = await req.json();
    try {
        // Get foreign key relationships
        const relationshipsResult = await prisma.$queryRaw`
            SELECT 
                COLUMN_NAME, 
                REFERENCED_TABLE_NAME, 
                REFERENCED_COLUMN_NAME 
            FROM 
                INFORMATION_SCHEMA.KEY_COLUMN_USAGE 
            WHERE 
                TABLE_NAME = ${tableName} 
                AND TABLE_SCHEMA = DATABASE() 
                AND REFERENCED_TABLE_NAME IS NOT NULL;
        `;
        const relationships = relationshipsResult.map(row => ({
            columnName: row.COLUMN_NAME,
            referencedTableName: row.REFERENCED_TABLE_NAME,
            referencedColumnName: row.REFERENCED_COLUMN_NAME
        }));
        return NextResponse.json({relationships});
    } catch (error) {
        return NextResponse.json({ error });
    }
}