'use client'
import { useState } from 'react';

export default function ArrivalDataForm({ onChange }) {
  const [arrivalData, setArrivalData] = useState({
    petPrice: '',
    shipping: '',
    arrivalDate: '',
    from: '',
  });

  const handleArrivalChange = (e) => {
    const { name, value } = e.target;
    setArrivalData((prev) => ({
      ...prev,
      [name]: value,
    }));
    onChange(e);
  };

  return (
    <>
      <div>
        <label className="block mb-1" htmlFor="petPrice">Pet Price</label>
        <input
          type="number"
          name="petPrice"
          id="petPrice"
          value={arrivalData.petPrice}
          onChange={handleArrivalChange}
          className="w-full border p-2"
        />
      </div>
      <div>
        <label className="block mb-1" htmlFor="shipping">Shipping</label>
        <input
          type="number"
          name="shipping"
          id="shipping"
          value={arrivalData.shipping}
          onChange={handleArrivalChange}
          className="w-full border p-2"
        />
      </div>
      <div>
        <label className="block mb-1" htmlFor="arrivalDate">Arrival Date</label>
        <input
          type="date"
          name="arrivalDate"
          id="arrivalDate"
          value={arrivalData.arrivalDate}
          onChange={handleArrivalChange}
          className="w-full border p-2"
        />
      </div>
      <div>
        <label className="block mb-1" htmlFor="from">From</label>
        <input
          type="text"
          name="from"
          id="from"
          value={arrivalData.from}
          onChange={handleArrivalChange}
          className="w-full border p-2"
        />
      </div>
    </>
  );
}
