import React from "react";

interface ActionButtonProps {
  className: string;
  text: string;
  icon?: string;
  iconAlt?: string;
}

const ActionButton = ({
  className,
  text,
  icon,
  iconAlt,
}: ActionButtonProps) => {
  return (
    <button className={`${className} items-center bg-primary px-4 py-4`}>
      {icon && <img src={icon} alt={iconAlt} />}
      {text}
    </button>
  );
};

export default ActionButton;
