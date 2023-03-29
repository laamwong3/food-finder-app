import { getMealByIdSchema, getMealsByCategorySchema } from "./food.schema";
import {
  getFoodCategoriesController,
  getMealByIdController,
  getMealsByCategoryController,
} from "./food.controller";
import { z } from "zod";
import { procedure, router } from "../trpc";

export const appRouter = router({
  getFoodCategories: procedure.query(() => getFoodCategoriesController()),
  getMealsByCategory: procedure
    .input(getMealsByCategorySchema)
    .query(({ input }) => getMealsByCategoryController(input)),
  getMealById: procedure
    .input(getMealByIdSchema)
    .query(({ input }) => getMealByIdController(input)),
});

export type AppRouter = typeof appRouter;
