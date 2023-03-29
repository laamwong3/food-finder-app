import { TRPCError } from "@trpc/server";
import { GetMealById, GetMealsByCategory } from "./food.schema";
import { Categories, Meals, SingleMeal } from "./food.type";

export const getFoodCategoriesController = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = (await response.json()) as Categories;
    const categories = data.categories;

    return {
      categories,
    };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to get food categories",
      cause: error,
    });
  }
};

export const getMealsByCategoryController = async ({
  category,
}: GetMealsByCategory) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = (await response.json()) as Meals;
    const meals = data.meals;

    return {
      meals,
    };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to get meals by category",
      cause: error,
    });
  }
};
export const getMealByIdController = async ({ idMeal }: GetMealById) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const data = (await response.json()) as SingleMeal;
    const meal = data.meals[0];

    const image = meal.strMealThumb;
    const name = meal.strMeal;
    const ingredients = Object.keys(meal)
      .filter((key) => key.indexOf("strIngredient") === 0)
      .map((key) => meal[key])
      .filter(Boolean);
    const video = meal.strYoutube;
    const instructions = meal.strInstructions;
    return {
      image,
      name,
      ingredients,
      video,
      instructions,
    };
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to get meal by id",
      cause: error,
    });
  }
};
