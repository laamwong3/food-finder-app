import CategoryCard from "@/components/categories/CategoryCard";
import { Category } from "@/server/routers/food.type";
import { trpc } from "@/utils/trpc";
import { Container, Grid } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const categories = () => {
  const { data } = trpc.getFoodCategories.useQuery();
  console.log(data);
  return (
    <Container>
      <Grid.Container gap={2} justify={"center"}>
        {data
          ? data.categories.map((category, index) => (
              <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                <CategoryCard category={category} />
              </Grid>
            ))
          : null}
      </Grid.Container>
    </Container>
  );
};

export default categories;
