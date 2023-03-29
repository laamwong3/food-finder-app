import { Category, Meal } from "@/server/routers/food.type";
import { Card, Col, Row, Text } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";

interface QueryParams extends ParsedUrlQuery {
  categories: string;
  meals: string;
}

const MealCard = ({ meal }: { meal: Meal }) => {
  const { push, query } = useRouter();
  const { meals } = query as QueryParams;

  return (
    <Card
      isHoverable
      isPressable
      css={{
        boxShadow: "0 0 5px white",
      }}
      onPress={() => {
        push(`/categories/${meals}/${meal.idMeal}`);
      }}
    >
      <Card.Body>
        <Card.Image
          src={meal.strMealThumb}
          // height="150px"
          // objectFit="cover"
          alt={meal.strMeal}
          css={{ borderRadius: "14px" }}
        />{" "}
      </Card.Body>
      {/* <Card.Divider /> */}
      <Card.Footer>
        <Row justify="center" align="center">
          <Col>
            <Text css={{ textAlign: "center" }} h5 weight={"extrabold"}>
              {meal.strMeal}
            </Text>
            {/* <Text className="overflow-text" h5 weight={"light"}>
              {category.strCategoryDescription}
            </Text> */}
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default MealCard;
