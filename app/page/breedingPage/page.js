'use client'
import { useRouter } from 'next/navigation'

const animals = [
    { id: 1, name: 'Leopard Gecko', type: 'Reptile', status: 'Active' },
    { id: 2, name: 'Corn Snake', type: 'Reptile', status: 'Inactive' },
    { id: 3, name: 'Ball python', type: 'Reptile', status: 'Active' },
    { id: 4, name: 'Hognose snake', type: 'Reptile', status: 'Active' },
  ];

export default function breedingPage() {
    const router = useRouter()
    const gotoDetailBreeding = function(id){
        router.push(`${process.env.NEXT_PUBLIC_API_URL}/page/breedingPage/${id}`)
    }
  return (
    <div className='max-w-4xl p-4'>
              <h1 className="text-2xl font-bold mb-4">Animal List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {animals.map((animal) => (
          <div key={animal.id} onClick={() => gotoDetailBreeding(animal.id)}
            className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer">
            <h2 className="text-xl font-semibold">{animal.name}</h2>
            <p className="text-gray-600">{animal.type}</p>
            <p className={`text-sm mt-2 ${animal.status === 'Active'? 'text-green-500': 'text-red-500'}`}>
              Status: {animal.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
