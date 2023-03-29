import CategoryCard from "@/components/categories/CategoryCard";
import MealCard from "@/components/categories/meals/mealId/MealCard";
import Navigation from "@/components/common/Navigation";
import { Category } from "@/server/routers/food.type";
import { trpc } from "@/utils/trpc";
import {
  Avatar,
  Badge,
  Button,
  Col,
  Collapse,
  Container,
  Grid,
  Image,
  Link,
  Spacer,
  Text,
} from "@nextui-org/react";
import { NextParsedUrlQuery } from "next/dist/server/request-meta";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React, { useEffect, useState } from "react";

interface QueryParams extends ParsedUrlQuery {
  categories: string;
  meals: string;
  mealId: string;
}

const mealId = () => {
  const { query, back } = useRouter();
  const { mealId } = query as QueryParams;

  const { data } = trpc.getMealById.useQuery({ idMeal: mealId });
  console.log(data?.ingredients);

  return (
    <>
      <Navigation title={"Details"} />
      <Container md>
        <Grid.Container
          gap={2}
          justify={"center"}
          css={{
            mt: "$xl",
            boxShadow: "0 0 10px white",
            borderRadius: "$3xl",
            background: "black",
          }}
        >
          <Grid xs={12} sm={6}>
            <Image
              css={{ borderRadius: "$3xl" }}
              src={data?.image ?? ""}
              alt={data?.name ?? ""}
              objectFit="cover"
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <Col>
              <Text h2 weight={"extrabold"} css={{ textAlign: "center" }}>
                {data?.name}
              </Text>
              <Text h3 weight={"bold"}>
                Ingredients:
              </Text>
              {data
                ? data.ingredients.map((ingredient, index) => (
                    <Badge
                      size={"lg"}
                      css={{ mr: "$1" }}
                      enableShadow
                      // variant={"bordered"}
                      color={"primary"}
                    >
                      {ingredient}
                    </Badge>
                  ))
                : null}
              <Spacer />
              <Text h3 weight={"bold"}>
                Video Link:
              </Text>
              {data?.video ? (
                <Link href={data?.video ?? "#"} target="_blank">
                  How to make {data?.name?.toUpperCase()}
                </Link>
              ) : null}
              <Spacer />
              <Button color={"gradient"} auto size={"lg"} onPress={back}>
                Back
              </Button>
            </Col>
          </Grid>
        </Grid.Container>
        <Spacer y={2} />
        <Collapse
          css={{
            width: "100%",
          }}
          title={data?.name}
          subtitle={"Step by step instructions"}
          shadow
          contentLeft={
            <Avatar src={data?.image ?? ""} size="lg" bordered squared />
          }
        >
          <Text h4>{data?.instructions}</Text>
        </Collapse>
      </Container>
    </>
  );
};

export default mealId;
