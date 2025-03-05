import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
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
            <Link href="/login">
              <Button variant="outline">Đăng nhập</Button>
            </Link>
            <Link href="/register">
              <Button>Đăng ký</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Đặt món ăn trực tuyến dễ dàng
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Khám phá các món ăn ngon, đặt hàng nhanh chóng và theo dõi đơn
              hàng của bạn trong thời gian thực.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/register">
                <Button size="lg">Bắt đầu ngay</Button>
              </Link>
              <Link href="/menu">
                <Button variant="outline" size="lg">
                  Xem thực đơn
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
