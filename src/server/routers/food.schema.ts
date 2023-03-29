import { z } from "zod";

export const getMealsByCategorySchema = z.object({
  category: z.string(),
});

export type GetMealsByCategory = z.infer<typeof getMealsByCategorySchema>;
