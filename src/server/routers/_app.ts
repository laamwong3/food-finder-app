import { getFoodCategoriesController } from "./food.controller";
import { z } from "zod";
import { procedure, router } from "../trpc";

export const appRouter = router({
  getFoodCategories: procedure.query(() => getFoodCategoriesController()),
});

export type AppRouter = typeof appRouter;
