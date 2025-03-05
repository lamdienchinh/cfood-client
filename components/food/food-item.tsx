"use client";
import { PlusCircle, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Food } from "@/types";
import { useState } from "react";
import DetailModal from "./detail-modal";

function FoodItem({ data }: { data: Food }) {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="relative size-[250px]">
        <Image
          className="w-full h-full object-cover rounded-md"
          src={data?.image}
          width={250}
          height={250}
          alt="Ảnh"
        />
        <div className="p-1 text-sm text-primary aspect-square -translate-y-1/2 translate-x-1/2 flex items-center rounded-full bg-yellow-100 font-bold absolute right-0 top-0">
          5 <Star size={18} className="stroke-yellow-400 fill-yellow-400" />
        </div>
      </div>
      <div className="mt-2 font-semibold text-lg text-primary">
        {data?.title}
      </div>
      <div>{new Intl.NumberFormat("vi-VN").format(data.price)} VNĐ</div>
      <div className="mt-2">
        <Button
          onClick={() => setIsOpenDetail(true)}
          className="flex items-center cursor-pointer"
        >
          <PlusCircle /> Thêm món
        </Button>
      </div>
      {isOpenDetail && (
        <DetailModal
          data={data}
          open={isOpenDetail}
          onOpenChange={setIsOpenDetail}
        />
      )}
    </div>
  );
}

export default FoodItem;
