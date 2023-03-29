import { getMealsByCategorySchema } from "./food.schema";
import {
  getFoodCategoriesController,
  getMealsByCategoryController,
} from "./food.controller";
import { z } from "zod";
import { procedure, router } from "../trpc";

export const appRouter = router({
  getFoodCategories: procedure.query(() => getFoodCategoriesController()),
  getMealsByCategory: procedure
    .input(getMealsByCategorySchema)
    .query(({ input }) => getMealsByCategoryController(input)),
});

export type AppRouter = typeof appRouter;
