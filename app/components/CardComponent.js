import { Image } from "@nextui-org/image";
import Link from 'next/link';

export default function CardComponent({ animal }) {

    return (
        <Link href={`${process.env.NEXT_PUBLIC_API_URL}/page/fullDetail/${animal.id}`}>
        <div className="block max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300">
          <Image 
            className="w-full h-64 object-cover" 
            src='https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg'
            alt={animal.name} 
            width={400} 
            height={250} 
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{animal.name}</div>
            <p className="text-gray-700 text-base">
              ชื่อวิทยาศาสตร์: {animal.scientificName}
            </p>
            <p className="text-gray-700 text-base">
              น้ำหนัก: {animal.weight} กิโลกรัม
            </p>
            <p className="text-gray-700 text-base">
              สถานะ: {animal.status}
            </p>
          </div>
        </div>
      </Link>
    );
}