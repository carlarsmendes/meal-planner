import React, { useState } from "react";
import SelectionScreen from "./SelectionScreen";
import { getRandomMealPlan } from "../utils/mealPlanUtils";
import { MealPlan } from "../types/recipe";


export default function MealPlanner() {
  const [mealPlan, setMealPlan] = useState<MealPlan | null>(null);

  const startMealPlan = (numMeals: number, numSoups: number, numSnacks: number, numSides: number) => {
    setMealPlan(getRandomMealPlan(numMeals, numSoups, numSnacks, numSides));
  };

  const swapItem = (type: keyof MealPlan, index: number) => {
    if (mealPlan) {
      setMealPlan((prev) => {
        if (!prev) return null;
        const newPlan = { ...prev };
        newPlan[type][index] = getRandomMealPlan(1, 1, 1, 1)[type][0];
        return newPlan;
      });
    }
  };

  if (!mealPlan) return <SelectionScreen onStart={startMealPlan} />;
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Your Meal Plan</h1>
      
      <h2 className="text-xl">Meals</h2>
      {mealPlan.meals.map((meal, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-2">
          <p><strong>Meal:</strong> {meal.name}</p>
          <button onClick={() => swapItem("meals", index)} className="p-4  mt-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Swap</button>
        </div>
      ))}

      <h2  className="text-xl">Soups</h2>

      {mealPlan.soups.map((soup, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-2">
          <p><strong>Soup:</strong> {soup.name}</p>
          <button onClick={() => swapItem("soups", index)} className="p-4 mt-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Swap</button>
        </div>
      ))}

    <h2  className="text-xl">Snacks</h2>

    {mealPlan.snacks.map((snack, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-2 flex">
              <p><strong>Snacks:</strong> {snack.name}</p>
              

              <button onClick={() => swapItem("snacks", index)} className="p-4 mt-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                </svg>
                Swap</button>
            </div>
          ))}
     <h2  className="text-xl">Sides</h2>
{mealPlan.sides.map((side, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-2 flex">
              <p><strong>Sides:</strong> {side.name}</p>
              <button onClick={() => swapItem("sides", index)} className="p-4  mt-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                </svg>
                Swap</button>
            </div>
          ))}

      <button onClick={() => setMealPlan(null)} className="p-4  mt-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Restart
      </button>
    </div>
  );
}
