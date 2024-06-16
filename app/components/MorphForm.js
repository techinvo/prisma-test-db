'use client'
import { useState } from 'react';

export default function MorphForm({ onChange }) {
  const [morphData, setMorphData] = useState({
    color: '',
    dominantGene: '',
    subGene: '',
  });

  const handleMorphChange = (e) => {
    const { name, value } = e.target;
    setMorphData((prev) => ({
      ...prev,
      [name]: value,
    }));
    onChange(e);
  };

  return (
    <>
      <div>
        <label className="block mb-1" htmlFor="color">Color</label>
        <input
          type="text"
          name="color"
          id="color"
          value={morphData.color}
          onChange={handleMorphChange}
          className="w-full border p-2"
        />
      </div>
      <div>
        <label className="block mb-1" htmlFor="dominantGene">Dominant Gene</label>
        <input
          type="text"
          name="dominantGene"
          id="dominantGene"
          value={morphData.dominantGene}
          onChange={handleMorphChange}
          className="w-full border p-2"
        />
      </div>
      <div>
        <label className="block mb-1" htmlFor="subGene">Sub Gene</label>
        <input
          type="text"
          name="subGene"
          id="subGene"
          value={morphData.subGene}
          onChange={handleMorphChange}
          className="w-full border p-2"
        />
      </div>
    </>
  );
}
