import CategoryCard from "@/components/categories/CategoryCard";
import MealCard from "@/components/categories/meals/mealId/MealCard";
import Navigation from "@/components/common/Navigation";
import { Category } from "@/server/routers/food.type";
import { trpc } from "@/utils/trpc";
import { Container, Grid } from "@nextui-org/react";
import { NextParsedUrlQuery } from "next/dist/server/request-meta";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React, { useEffect, useState } from "react";

interface QueryParams extends ParsedUrlQuery {
  categories: string;
  meals: string;
}

const meals = () => {
  const { query } = useRouter();
  const { meals } = query as QueryParams;

  const { data } = trpc.getMealsByCategory.useQuery({ category: meals });
  // console.log(data);

  return (
    <>
      <Navigation title={meals} />
      <Container>
        <Grid.Container gap={2} justify={"center"} css={{ mt: "$2" }}>
          {data
            ? data.meals.map((meal, index) => (
                <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                  <MealCard meal={meal} />
                </Grid>
              ))
            : null}
        </Grid.Container>
      </Container>
    </>
  );
};

export default meals;
