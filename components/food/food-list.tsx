import { Food } from "@/types";
import FoodItem from "./food-item";

function FoodList({ food_list = [] }: { food_list?: Food[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
      {food_list?.map((food, index: number) => (
        <FoodItem key={index} data={food} />
      ))}
    </div>
  );
}

export default FoodList;
