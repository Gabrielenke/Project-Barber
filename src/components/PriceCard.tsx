import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  price: number;
  description: string;
  icon: string;
  iconAlt: string;
}

const PriceCard = ({ title, price, description, icon, iconAlt }: Props) => {
  return (
    <div className="flex h-32 w-[38vw] flex-col items-center gap-2 bg-[#d9d9d9] px-4 py-1">
      <div className="flex w-full items-center justify-between ">
        <div className="flex items-center gap-2">
          <Image className="h-8 w-8" src={icon} alt={iconAlt} />
          <h2>{title}</h2>
        </div>
        <div>
          <span className="font-bold">R${price}</span>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default PriceCard;
