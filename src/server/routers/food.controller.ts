import { TRPCError } from "@trpc/server";
import { GetMealsByCategory } from "./food.schema";
import { Categories, Meals } from "./food.type";

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
      message: "Failed to get food categories",
      cause: error,
    });
  }
};
