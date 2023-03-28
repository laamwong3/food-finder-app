import { TRPCError } from "@trpc/server";
import { Categories } from "./food.type";

export const getFoodCategoriesController = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data: Categories = await response.json();
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
