import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req, res) {
    const {   
        number,
        name,
        petType,
        gender,
        dateOfBirth,
        age,
        status,
        note,
        habits,
        favoriteFood,
    } = await req.json();
    try {
        const birthDate = new Date(
            dateOfBirth.year,
            dateOfBirth.month - 1,
            dateOfBirth.day
          );
    
          const newPet = await prisma.pet.create({
            data: {
              number: parseInt(number, 10),
              name,
              petType,
              gender,
              dateOfBirth: birthDate,
              age,
              status,
              note,
              habits,
              favoriteFood,
              morphId: 1, // Example placeholder value, replace with actual morphId if necessary
              arrivalDataId: 1, // Example placeholder value, replace with actual arrivalDataId if necessary
              personalityScaleId: 1, // Example placeholder value, replace with actual personalityScaleId if necessary
            },
          });
        return NextResponse.json({ newPet });
    } catch (error) {
        return NextResponse.json({ error });
    }
}

export async function GET() {
    try {
        const   pets = await prisma.pet.findMany();

        return NextResponse.json(pets);
    } catch (err) {
        return NextResponse.json({ err: true, data: err });
    }
}