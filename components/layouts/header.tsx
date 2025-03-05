"use client";
import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  LogOut,
  ShoppingCart,
  Trash2,
  MinusCircle,
  PlusCircle,
  Pencil,
} from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import AvatarDefault from "../ui/avatar-default";
import { useCartStore } from "@/store/cart-store";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

function Header() {
  const [openCart, setOpenCart] = useState(false);
  const [openNoteModal, setOpenNoteModal] = useState(false);
  const [currentNote, setCurrentNote] = useState("");
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const { cart, addToCart, removeFromCart, updateNote } = useCartStore();

  const handleIncrease = (id: string) => {
    const item = cart.find((i) => i?.food.id === id);
    if (item) addToCart(item.food, 1);
  };

  const handleDecrease = (id: string) => {
    const item = cart.find((i) => i?.food.id === id);
    if (item && item.quantity > 1) {
      addToCart(item.food, -1);
    } else {
      removeFromCart(id);
    }
  };

  const handleEditNote = (id: string, note: string) => {
    setEditingItemId(id);
    setCurrentNote(note);
    setOpenNoteModal(true);
  };

  const handleSaveNote = () => {
    if (editingItemId) {
      updateNote(editingItemId, currentNote);
    }
    setOpenNoteModal(false);
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item?.food?.price * item.quantity,
    0
  );

  return (
    <header className="border-b">
      <div className="container px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-1">
          <Image
            className="size-[50px] object-contain"
            src={logo}
            alt="Logo mèo"
          />
          <div className="text-xl font-bold text-primary">CFood</div>
        </div>
        <div className="flex items-center gap-4">
          <Sheet open={openCart} onOpenChange={setOpenCart}>
            <SheetTrigger asChild>
              <button className="relative">
                <ShoppingCart className="stroke-primary" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Giỏ hàng</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4 px-4">
                {cart.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground">
                    Giỏ hàng trống.
                  </p>
                ) : (
                  cart.map((item) => (
                    <div key={item?.food?.id}>
                      <div className="flex items-center gap-4">
                        <Image
                          src={item?.food?.image}
                          alt={item?.food?.title}
                          width={80}
                          height={80}
                          className="size-[60px] rounded-md object-cover"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-semibold">
                            {item?.food?.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Intl.NumberFormat("vi-VN").format(
                              item?.food?.price
                            )}{" "}
                            VNĐ
                          </p>
                          <button
                            onClick={() =>
                              handleEditNote(item?.food?.id, item.note || "")
                            }
                            className="text-xs text-blue-500 flex items-center gap-1 mt-1"
                          >
                            <Pencil className="w-3 h-3" />
                            {item.note ? item.note : "Thêm ghi chú"}
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleDecrease(item?.food?.id)}
                          >
                            <MinusCircle className="stroke-white fill-red-500" />
                          </button>
                          <span className="text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrease(item?.food?.id)}
                          >
                            <PlusCircle className="stroke-white fill-green-500" />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item?.food?.id)}>
                          <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
              {cart.length > 0 && (
                <div className="mt-6 px-4">
                  <div className="flex justify-between font-semibold">
                    <span>Tổng:</span>
                    <span>
                      {new Intl.NumberFormat("vi-VN").format(totalPrice)} VNĐ
                    </span>
                  </div>
                  <Button className="w-full mt-4">Thanh toán</Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="size-[50px]">
                <AvatarFallback>
                  <AvatarDefault />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link className="flex items-center gap-2" href="/">
                  <LogOut /> Đăng xuất
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Modal chỉnh sửa ghi chú */}
      <Dialog open={openNoteModal} onOpenChange={setOpenNoteModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Chỉnh sửa ghi chú</DialogTitle>
          </DialogHeader>
          <textarea
            className="w-full h-16 mt-2 border border-gray-300 rounded-md p-2 text-sm"
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
            placeholder="Nhập ghi chú..."
          />
          <Button onClick={handleSaveNote} className="w-full mt-2">
            Lưu ghi chú
          </Button>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Header;
