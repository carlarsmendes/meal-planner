// /src/assets/recipes.ts
import { Recipe } from "../types/recipe";

export const sampleRecipes: Recipe[] = [
  // Meal
  { id: 1, name: "Grilled Chicken", type: "Meal" },
  { id: 2, name: "Beef Steak", type: "Meal" },
  { id: 3, name: "Vegetable Stir-Fry", type: "Meal" },

  // Soup
  { id: 4, name: "Tomato Soup", type: "Soup" },
  { id: 5, name: "Chicken Noodle Soup", type: "Soup" },
  { id: 6, name: "Lentil Soup", type: "Soup" },

  // Snack/Dessert
  { id: 7, name: "Chocolate Cake", type: "Snack/Dessert" },
  { id: 8, name: "Apple Pie", type: "Snack/Dessert" },
  { id: 9, name: "Ice Cream Sundae", type: "Snack/Dessert" },

  // Side
  { id: 10, name: "Garlic Bread", type: "Side" },
  { id: 11, name: "Steamed Vegetables", type: "Side" },
  { id: 12, name: "Mashed Potatoes", type: "Side" },
];
