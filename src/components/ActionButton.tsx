import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ActionButtonProps {
  className: string;
  text?: string;
  icon?: string;
  iconAlt?: string;
  link?:string | undefined;
}

const ActionButton = ({
  className,
  text,
  icon,
  iconAlt,
  link
}: ActionButtonProps) => {
  return (
    <Link href={link?link:""} target="_blank" className={`${className} items-center bg-primary px-4 py-4`}>
      {icon && iconAlt && (
        <Image className="h-full w-full" src={icon} alt={iconAlt} />
      )}
      {text}
    </Link>
  );
};

export default ActionButton;
