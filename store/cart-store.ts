import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Food } from "@/types";

type CartItem = {
  food: Food;
  quantity: number;
  note?: string;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (food: Food, quantity: number, note?: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateNote: (id: string, note: string) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (food, quantity, note) => {
        const { cart } = get();
        const existingItem = cart.find((item) => item.food.id === food.id);

        if (existingItem) {
          set({
            cart: cart.map((item) =>
              item.food.id === food.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({ cart: [...cart, { food, quantity, note }] });
        }
      },
      removeFromCart: (id) =>
        set({ cart: get().cart.filter((item) => item.food.id !== id) }),
      clearCart: () => set({ cart: [] }),
      updateNote: (id, note) =>
        set({
          cart: get().cart.map((item) =>
            item.food.id === id ? { ...item, note } : item
          ),
        }),
    }),
    { name: "cart-storage" }
  )
);
