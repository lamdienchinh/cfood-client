import FoodItem from "./food-item";

function FoodList() {
  return (
    <div className='grid grid-cols-4 gap-3'>
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
    </div>
  );
}

export default FoodList;
