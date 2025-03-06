import React, { useState } from "react";

interface SelectionProps {
  onStart: (meals: number, soups: number, snacks: number, sides: number) => void;
}

export default function SelectionScreen({ onStart }: SelectionProps) {
  const [numMeals, setNumMeals] = useState(2);
  const [numSoups, setNumSoups] = useState(1);
  const [numSnacks, setNumSnacks] = useState(1);
  const [numSides, setNumSides] = useState(2);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Customize Your Meal Plan</h1>

      <label className="block mb-2">Meals:</label>
      <input type="number" value={numMeals} onChange={(e) => setNumMeals(parseInt(e.target.value))} className="w-full p-2 border rounded mb-4" />

      <label className="block mb-2">Soups:</label>
      <input type="number" value={numSoups} onChange={(e) => setNumSoups(parseInt(e.target.value))} className="w-full p-2 border rounded mb-4" />

      <label className="block mb-2">Snacks/Desserts:</label>
      <input type="number" value={numSnacks} onChange={(e) => setNumSnacks(parseInt(e.target.value))} className="w-full p-2 border rounded mb-4" />

      <label className="block mb-2">Sides:</label>
      <input type="number" value={numSides} onChange={(e) => setNumSides(parseInt(e.target.value))} className="w-full p-2 border rounded mb-4" />

      <button
        onClick={() => onStart(numMeals, numSoups, numSnacks, numSides)}
        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Generate Meal Plan
      </button>
    </div>
  );
}
