import { useState, useEffect } from "react";

const ScrollAnimation = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY;
      setScroll(scrollCheck);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div
        className={`
        relative h-10 w-6 overflow-hidden rounded-full border-2 border-solid border-[#fff] transition-all duration-500 ease-in-out${
          scroll > 0 ? "-translate-y-full opacity-0" : "opacity-1"
        }before:absolute before:left-1/2 before:top-[7px] before:h-[5px] before:w-[5px] before:-translate-x-1/2 before:animate-wheel before:rounded-full before:bg-[#fff]`}
      ></div>
    </div>
  );
};

export default ScrollAnimation;
