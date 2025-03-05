import image from "@/assets/goicuon.avif";
import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
function FoodItem() {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="relative size-[250px]">
        <Image
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt="Ảnh"
        />
        <div className="p-1 text-sm text-primary aspect-square -translate-y-1/2 translate-x-1/2 flex items-center rounded-full bg-yellow-100 font-bold absolute right-0 top-0">
          5 <Star size={18} className="stroke-yellow-400 fill-yellow-400" />
        </div>
      </div>
      <div className="mt-2 font-semibold text-lg text-primary">Gỏi cuốn</div>
      <div>120.000 VNĐ</div>
      <div className="mt-2">
        <Button>Đặt món</Button>
      </div>
    </div>
  );
}

export default FoodItem;
