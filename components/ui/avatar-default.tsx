import Image from "next/image";
import avatar from "@/assets/avatar.png";
export default function AvatarDefault() {
  return <Image className='object-contain size-[40px]' src={avatar} alt="Ảnh đại diện" />;
}
