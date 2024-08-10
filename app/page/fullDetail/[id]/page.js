'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { calculateAge } from '@/app/model/lib';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const AnimalDetail = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchAnimal = async () => {
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/pet/id`, {
            id,
            status:'getById'
          });
          console.log(response.data)
          setAnimal(response.data);
        } catch (error) {
          console.error('Error fetching animal:', error);
        }
      };

      fetchAnimal();
    }
  }, [id]);

  if (!animal) {
    return <div>Loading...</div>;
  }

  // ข้อมูลจำลองสำหรับ spider chart
  const data = {
    labels: ['Activeness', 'Friendliness', 'Shyness', 'Hunger'],
    datasets: [
      {
        label: animal.name,
        data: [65, 59, 90, 81],
        backgroundColor: 'rgba(34, 202, 236, 0.2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        pointBackgroundColor: 'rgba(34, 202, 236, 1)',
      },
    ],
  };

  const handleDelete = async () => {
    console.log(id)
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/pet/id`,{
        id,
        status:'delete'
      });
      console.log('Pet deleted:', response.data);
      router.push( `${process.env.NEXT_PUBLIC_API_URL}/`, { scroll: false });
    } catch (error) {
      console.error('Error deleting pet:', error.response ? error.response.data : error.message);
    }
  }

  return (
    <div className="container mx-auto px-4 py-6 fade-in">
      <h1 className="text-3xl font-bold mb-4">{animal.name}</h1>
      <Button color="primary" onPress={handleDelete}>
        ลบ
      </Button>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-4">
          <Image
            className="w-full h-64 object-cover mb-4"
            src='https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg'
            alt={animal.name}
            width={400}
            height={250}
          />
          <div className="text-gray-700 text-base mb-4">
            <p><strong>ID:</strong> {animal.id}</p>
            <p><strong>No.:</strong> {animal.number}</p>
            <p><strong>Name:</strong> {animal.name}</p>
            <p><strong>Pet type:</strong> {animal.petType}</p>
            <p><strong>Gender:</strong> {animal.gender}</p>
            <p><strong>Date of Birth:</strong> {new Date(animal.dateOfBirth).toLocaleDateString()}</p>
            <p><strong>Status:</strong> {animal.status}</p>
            <p><strong>Note/Detail:</strong> {animal.note}</p>
            <p><strong>Habits:</strong> {animal.habits}</p>
            <p><strong>Favorite Food:</strong> {animal.favoriteFood}</p>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <Radar data={data} />
        </div>
      </div>
    </div>
  );
};

// ฟังก์ชันจำลองเพื่อดึงข้อมูลสัตว์จาก id
const getAnimalById = (id) => {
  const animals = [
    {
      id: 1,
      no: '001',
      name: 'เสือ',
      petType: 'snake',
      morph: {
        color: 'Orange',
        dominantGene: 'Albino',
        subGene: 'None',
      },
      gender: 'Male',
      dateOfBirth: '2015-06-25',
      status: 'Active',
      imageUrl: 'https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg',
      note: 'รายละเอียดเกี่ยวกับเสือ...',
      arrivalData: {
        price: {
          petPrice: 2000,
          shipping: 500,
        },
        date: '2016-01-15',
        from: 'Bangkok',
        weight: '150kg',
      },
      // Other data as needed...
    },
    {
      id: 2,
      no: '002',
      name: 'ช้าง',
      petType: 'LPG',
      morph: {
        color: 'Gray',
        dominantGene: 'None',
        subGene: 'None',
      },
      gender: 'Female',
      dateOfBirth: '2010-03-10',
      status: 'Inactive',
      dateOfInactiveness: '2020-05-10',
      causeOfInactiveness: 'Health Issues',
      imageUrl: 'https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg',
      note: 'รายละเอียดเกี่ยวกับช้าง...',
      arrivalData: {
        price: {
          petPrice: 50000,
          shipping: 10000,
        },
        date: '2011-04-20',
        from: 'Chiang Mai',
        weight: '3000kg',
      },
      // Other data as needed...
    },
    // เพิ่มข้อมูลสัตว์เพิ่มเติมตามที่ต้องการ
  ];
  return animals.find(animal => animal.id === parseInt(id));
};

export default AnimalDetail;