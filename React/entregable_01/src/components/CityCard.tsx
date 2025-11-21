import Link from "next/link";
import ImageWrapper from "./ImageWrapper";

interface CityCardProps {
    name: string;   
    href: string;
    img: string;
}

export default function CityCard({name, href, img}: CityCardProps) {
  return (
      <Link href={href} key={name} className="flex flex-col items-center group hover:shadow-2xl rounded-lg transition-shadow p-2">
        <ImageWrapper src={img} alt={name} />
        <span className="mt-2 text-lg font-bold">{name}</span>
      </Link>
  )
}