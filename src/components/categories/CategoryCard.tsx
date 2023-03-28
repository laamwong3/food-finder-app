import { Category } from "@/server/routers/food.type";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Card isHoverable>
      <Card.Body>
        <Image
          src={category.strCategoryThumb}
          alt={category.strCategoryDescription}
          fill
        />
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
