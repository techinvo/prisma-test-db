'use client'
import { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/input";
import { DatePicker } from "@nextui-org/date-picker";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useDisclosure } from "@nextui-org/modal";
import MorphForm from '@/app/components/MorphForm';
import ArrivalDataForm from '@/app/components/ArrivalDataForm';
import { fildinput } from '@/app/model/model';
import StatusModal from '@/app/components/StatusModal'; // Ensure the correct path and component name

export default function AddPet() {
  const [formData, setFormData] = useState({});
  const { isOpen, onOpenChange } = useDisclosure();
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  const handleDateChange = (name, value) => {
    const { years, months, days } = calculateAge(value);
    const ageString = `${years} ปี ${months} เดือน ${days} วัน`;

    setFormData({
      ...formData,
      [name]: value,
      age: ageString
    });
  };

  const handleStatusChange = (value) => {
    setFormData({
      ...formData,
      status: value
    });
    setStatus(value);
    if(value !== 'Healthy'){
      onOpenChange(true);
    }
  };

  const handleModalConfirm = (data) => {
    setFormData({
      ...formData,
      ...data
    });
  };

  const handleModalClose = () => {
    setStatus(''); // Reset the status field
    onOpenChange(false); // Close the modal
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Pet</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fildinput.map((d, i) => (
            <div key={i}>
              {d.type === 'select' ? (
                <Select
                  name={d.id}
                  labelPlacement="outside"
                  label={d.label}
                  placeholder={"Select " + d.label}
                  className="w-full"
                  value={d.id === 'status' ? status : formData[d.id] || ''}
                  onChange={(value) => d.id === 'status' ? handleStatusChange(value.target.value) : handleChange({ target: { name: d.id, value:value.target.value } })}
                >
                  {d.option.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </Select>
              ) : d.type === 'datetime' ? (
                <DatePicker
                  name={d.id}
                  label={d.label}
                  className="w-full"
                  labelPlacement="outside"
                  maxValue={today(getLocalTimeZone())}
                  onChange={(value) => handleDateChange(d.id, value)}
                />
              ) : (
                <Input
                  type={d.type}
                  name={d.id}
                  label={d.label}
                  labelPlacement="outside"
                  placeholder={'Enter ' + d.label}
                  className="w-full"
                  onChange={handleChange}
                  value={formData[d.id] || ''}
                  disabled={d.id === 'age'}
                />
              )}
            </div>
          ))}
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>

      <StatusModal 
        isOpen={isOpen} 
        onOpenChange={handleModalClose} 
        status={status} 
        onConfirm={handleModalConfirm} 
      />
    </div>
  );
}
