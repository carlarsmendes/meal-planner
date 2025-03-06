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
      <h1 className="text-xl font-bold mb-4 text-center">Your Meal Plan</h1>
      
      {mealPlan.meals.map((meal, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-2">
          <p><strong>Meal:</strong> {meal.name}</p>
          <button onClick={() => swapItem("meals", index)} className="w-full mt-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Swap</button>
        </div>
      ))}

      {mealPlan.soups.map((soup, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-2">
          <p><strong>Soup:</strong> {soup.name}</p>
          <button onClick={() => swapItem("soups", index)} className="w-full mt-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Swap</button>
        </div>
      ))}

      <button onClick={() => setMealPlan(null)} className="w-full mt-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Restart
      </button>
    </div>
  );
}
