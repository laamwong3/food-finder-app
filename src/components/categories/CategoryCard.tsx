import { Category } from "@/server/routers/food.type";
import { Card, Col, Row, Text } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Card isHoverable css={{ boxShadow: "0 0 5px white" }}>
      <Card.Body>
        <Card.Image
          src={category.strCategoryThumb}
          // height="150px"
          objectFit="cover"
          alt={category.strCategoryDescription}
          css={{ borderRadius: "14px" }}
        />{" "}
      </Card.Body>
      {/* <Card.Divider /> */}
      <Card.Footer>
        <Row justify="center" align="center">
          <Col>
            <Text css={{ textAlign: "center" }} h3 weight={"extrabold"}>
              {category.strCategory}
            </Text>
            <Text className="overflow-text" h5 weight={"light"}>
              {category.strCategoryDescription}
            </Text>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default CategoryCard;
