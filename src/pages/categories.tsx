import CategoryCard from "@/components/categories/CategoryCard";
import { Category } from "@/server/routers/food.type";
import { trpc } from "@/utils/trpc";
import { Grid } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const categories = () => {
  const { data } = trpc.getFoodCategories.useQuery();
  console.log(data);
  return (
    <Grid.Container>
      {data
        ? data.categories.map((category, index) => (
            <Grid xs={12} sm={6} key={index}>
              <CategoryCard category={category} />
            </Grid>
          ))
        : null}
    </Grid.Container>
  );
};

export default categories;
