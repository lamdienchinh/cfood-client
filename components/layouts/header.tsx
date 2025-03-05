import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { LogOut, ShoppingCart, Truck } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import AvatarDefault from "../ui/avatar-default";

function Header() {
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
          <div>
            <ShoppingCart className="stroke-primary" />
          </div>
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
    </header>
  );
}

export default Header;
