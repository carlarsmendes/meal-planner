import {Recipe, MealPlan } from "../types/recipe";
import { sampleRecipes } from "../assets/recipes";

export const getRandomMealPlan = (numMeals: number, numSoups: number, numSnacks: number, numSides: number): MealPlan => {
    const getRandomItems = (type: string, count: number) =>
      sampleRecipes.filter((r) => r.type === type).sort(() => 0.5 - Math.random()).slice(0, count);
  
    return {
      meals: getRandomItems("Meal", numMeals),
      soups: getRandomItems("Soup", numSoups),
      snacks: getRandomItems("Snack/Dessert", numSnacks),
      sides: getRandomItems("Side", numSides),
    };
  };
