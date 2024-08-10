import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const { id, status } = await req.json();

        const numericId = parseInt(id, 10); // แปลง id เป็นตัวเลข

        if (isNaN(numericId)) {
            throw new Error('Invalid ID');
        }
        console.log(id)
        if (status === 'delete') {
            res =await prisma.pet.deleteMany({
                where: { id: numericId },
            });
            return NextResponse.json({ message: res });
        } else {
            const pet = await prisma.pet.findUnique({
                where: { id: numericId },
            });
            if (!pet) {
                throw new Error('Pet not found');
            }
            return NextResponse.json(pet);
        }
    } catch (err) {
        return NextResponse.json({ err: true, message: err.message });
    }
}
