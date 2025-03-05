import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Food } from "@/types";
import { MinusCircle, PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import { useCartStore } from "@/store/cart-store";
import { toast } from "sonner";

function DetailModal({
  data,
  open,
  onOpenChange,
}: {
  data: Food;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
}) {
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState<string>("");
  const addToCart = useCartStore((state) => state.addToCart);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) || value <= 0 ? 1 : value);
  };

  const handleAddToCart = () => {
    addToCart(data, quantity, note);
    onOpenChange?.(false);
    toast.success("Thêm vào giỏ hàng thành công");
  };

  const totalPrice = quantity * data?.price;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <div className="flex items-start gap-4">
          <Image
            className="rounded-md object-contain"
            width={200}
            height={200}
            src={data?.image}
            alt={data?.title}
          />
          <div className="flex flex-col">
            <DialogTitle className="text-lg font-semibold">
              {data?.title}
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              Món cà ri đậm đà từ đậu hủ và rau củ, giàu chất xơ, vitamin, hỗ
              trợ tiêu hóa, tăng cường sức khỏe tim mạch.
            </p>
            <p className="mt-1 font-semibold text-primary">
              {new Intl.NumberFormat("vi-VN").format(data.price)} VNĐ
            </p>
          </div>
        </div>

        {/* Số lượng */}
        <div className="mt-4 flex items-center gap-2">
          <p className="text-sm font-medium">Số lượng:</p>
          <div className="flex items-center gap-2 mt-2">
            <button onClick={handleDecrease} disabled={quantity <= 1}>
              <MinusCircle className="w-5 h-5 stroke-white fill-red-500" />
            </button>
            <input
              inputMode="numeric"
              value={quantity}
              onChange={handleInputChange}
              className="w-12 border border-neutral-300 rounded-md text-center"
              min="1"
            />
            <button onClick={handleIncrease}>
              <PlusCircle className="w-5 h-5 stroke-white fill-green-500" />
            </button>
          </div>
        </div>

        {/* Lưu ý */}
        <div className="mt-4">
          <p className="text-sm font-medium">Lưu ý cho quán:</p>
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            className="w-full h-16 mt-2 border border-gray-300 rounded-md p-2 text-sm"
            placeholder="Nhập ghi chú..."
          />
        </div>

        {/* Nút đặt món */}
        <div className="flex justify-end mt-4">
          <Button className="px-6 py-2 w-full" onClick={handleAddToCart}>
            Thêm vào giỏ hàng +{" "}
            {new Intl.NumberFormat("vi-VN").format(totalPrice)} VNĐ
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DetailModal;
