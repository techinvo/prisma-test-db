"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardComponent from "@/app/components/CardComponent";

const animals = [
  {
    id: 1,
    name: 'เสือ',
    scientificName: 'Panthera tigris',
    weight: 220,
    status: 'เสี่ยงสูญพันธุ์',
    imageUrl: 'https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg'
  },
  {
    id: 2,
    name: 'ช้าง',
    scientificName: 'Elephas maximus',
    weight: 5000,
    status: 'ใกล้สูญพันธุ์',
    imageUrl: 'https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg'
  },
  // เพิ่มข้อมูลสัตว์เพิ่มเติมตามที่ต้องการ
];

export default function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/pet`);
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);
  return (
    <div className="container mx-auto px-4 fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pets.map((pet) => (
          <CardComponent key={pet.id} animal={pet} />
        ))}
      </div>
    </div>
  );
}
