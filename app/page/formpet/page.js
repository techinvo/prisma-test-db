'use client'
import { useState } from 'react';
import MorphForm from '@/app/components/MorphForm';
import ArrivalDataForm from '@/app/components/ArrivalDataForm';

const petTypes = ['SNAKE', 'LPG', 'TREE_FROGS'];
const genders = ['MALE', 'FEMALE', 'UNKNOWN'];
const statuses = ['ACTIVE', 'INACTIVE'];

export default function AddPet() {
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    petType: petTypes[0],
    morphId: '',
    gender: genders[0],
    dateOfBirth: '',
    status: statuses[0],
    dateOfInactiveness: '',
    cause: '',
    note: '',
    arrivalDataId: '',
    habits: '',
    favoriteFood: '',
    activeness: 0,
    friendliness: 0,
    shyness: 0,
    hunger: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Pet</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1" htmlFor="number">Number</label>
            <input
              type="number"
              name="number"
              id="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="petType">Pet Type</label>
            <select
              name="petType"
              id="petType"
              value={formData.petType}
              onChange={handleChange}
              className="w-full border p-2"
            >
              {petTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          morph
          <MorphForm onChange={handleChange} />
          <div>
            <label className="block mb-1" htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border p-2"
            >
              {genders.map((gender) => (
                <option key={gender} value={gender}>{gender}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1" htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border p-2"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1" htmlFor="dateOfInactiveness">Date of Inactiveness</label>
            <input
              type="date"
              name="dateOfInactiveness"
              id="dateOfInactiveness"
              value={formData.dateOfInactiveness}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="cause">Cause</label>
            <input
              type="text"
              name="cause"
              id="cause"
              value={formData.cause}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="note">Note</label>
            <textarea
              name="note"
              id="note"
              value={formData.note}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          
          arrival
          <ArrivalDataForm onChange={handleChange} />
          <div>
            <label className="block mb-1" htmlFor="habits">Habits</label>
            <textarea
              name="habits"
              id="habits"
              value={formData.habits}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="favoriteFood">Favorite Food</label>
            <input
              type="text"
              name="favoriteFood"
              id="favoriteFood"
              value={formData.favoriteFood}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="activeness">Activeness</label>
            <input
              type="number"
              name="activeness"
              id="activeness"
              value={formData.activeness}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="friendliness">Friendliness</label>
            <input
              type="number"
              name="friendliness"
              id="friendliness"
              value={formData.friendliness}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="shyness">Shyness</label>
            <input
              type="number"
              name="shyness"
              id="shyness"
              value={formData.shyness}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="hunger">Hunger</label>
            <input
              type="number"
              name="hunger"
              id="hunger"
              value={formData.hunger}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}
