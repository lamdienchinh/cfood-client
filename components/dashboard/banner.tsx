import banner from "@/assets/food-banner.png";
import Image from "next/image";
import cat_rice from "@/assets/rice.png";

export default function Banner() {
  return (
    <div className="mb-4 px-4 flex items-center min-h-[400px] w-full relative rounded-[15px] overflow-hidden">
      <Image
        className="absolute inset-0 object-cover"
        src={banner}
        alt="Ảnh banner"
      />
      <div className="absolute z-1 inset-0 bg-black/30" />
      <div className="w-full relative z-2 flex items-center justify-between">
        <div>
          <h1 className="mb-6 text-3xl font-bold text-primary-foreground">
            Xin chào, Người dùng!
          </h1>
          <p className="text-primary-foreground text-lg">
            Chào mừng bạn đã đến với hệ thống CFood của chúng tôi.
          </p>
          <p className="mb-8 text-primary-foreground text-lg">
            Bạn đã đăng nhập thành công vào hệ thống. Từ đây bạn có thể xem thực
            đơn và đặt món ăn.
          </p>
        </div>
        <Image
          className="object-contain size-[200px]"
          src={cat_rice}
          alt="Mèo ăn cơm"
        />
      </div>
    </div>
  );
}
