import FoodList from "../food/food-list";

function Menu() {
  return (
    <div>
      <div className="flex flex-col gap-4 items-center justify-center mb-8">
        <h2 className="font-semibold text-3xl">Đặt món ăn</h2>
        <p className="text-lg text-primary">Vui lòng chọn món ăn bên dưới để thêm vào giỏ hàng và đặt hàng</p>
      </div>
      <FoodList />
    </div>
  );
}

export default Menu;
