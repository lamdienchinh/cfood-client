"use client";
import { useState } from "react";
import FoodList from "../food/food-list";
import { Button } from "../ui/button";
import { beverage_list, dessert_list, hotpot_list, main_list } from "@/consts";
import { Food } from "@/types";

const food_categories = [
  {
    name: "Món chính",
    key: "main",
    list: main_list,
  },
  {
    name: "Món tráng miệng",
    key: "dessert",
    list: dessert_list,
  },
  {
    name: "Thức uống",
    key: "beverage",
    list: beverage_list,
  },
  {
    name: "Lẩu",
    key: "hotpot",
    list: hotpot_list,
  },
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>("main");
  const [selectedList, setSelectedList] = useState<Food[]>(
    food_categories[0].list
  );
  return (
    <div>
      <div className="flex flex-col gap-4 items-center justify-center mb-6">
        <h2 className="font-semibold text-3xl">Đặt món ăn</h2>
        <p className="text-lg text-primary">
          Vui lòng chọn món ăn bên dưới để thêm vào giỏ hàng và đặt hàng
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 mb-8">
        {food_categories.map((category) => (
          <Button
            className="cursor-pointer"
            onClick={() => {
              setSelectedList(category.list);
              setSelectedCategory(category.key);
            }}
            variant={selectedCategory === category.key ? "default" : "outline"}
            key={category.key}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <FoodList food_list={selectedList} />
    </div>
  );
}

export default Menu;
