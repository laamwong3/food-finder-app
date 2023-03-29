import { z } from "zod";

export const getMealsByCategorySchema = z.object({
  category: z.string(),
});

export const getMealByIdSchema = z.object({
  idMeal: z.string(),
});

export type GetMealsByCategory = z.infer<typeof getMealsByCategorySchema>;
export type GetMealById = z.infer<typeof getMealByIdSchema>;
