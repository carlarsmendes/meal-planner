import React, { useState } from "react";
import ItemSelector from './ItemSelector';

interface SelectionProps {
  onStart: (meals: number, soups: number, snacks: number, sides: number) => void;
}

export default function SelectionScreen({ onStart }: SelectionProps) {
  const [numMeals, setNumMeals] = useState(2);
  const [numSoups, setNumSoups] = useState(1);
  const [numSnacks, setNumSnacks] = useState(1);
  const [numSides, setNumSides] = useState(2);

  const options = [1,2,3];

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Customize Your Meal Plan</h1>

        <ItemSelector label="Meals" value={numMeals} setValue={setNumMeals} options={options} />
        <ItemSelector label="Soups" value={numSoups} setValue={setNumSoups} options={options} />
        <ItemSelector label="Snacks" value={numSnacks} setValue={setNumSnacks} options={options} />
        <ItemSelector label="Sides" value={numSides} setValue={setNumSides} options={options} />
      
      <button
        onClick={() => onStart(numMeals, numSoups, numSnacks, numSides)}
        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300  cursor-pointer"
      >
        Generate Meal Plan
      </button>
    </div>
  );
}
