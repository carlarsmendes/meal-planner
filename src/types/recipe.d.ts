export type Recipe = {
    id: number;
    name: string;
    type: "Meal" | "Soup" | "Snack/Dessert" | "Side";
  };
  
  export type MealPlan = {
    meals: Recipe[];
    soups: Recipe[];
    snacks: Recipe[];
    sides: Recipe[];
  };