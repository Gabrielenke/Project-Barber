import React, { useEffect } from "react";

const ScrollSlider = () => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("scrollSlider");

      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      var scrolled = ((winScroll / height) * 100).toFixed(0);

      if (element) {
        element.style.width = scrolled + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Certifique-se de remover o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`fixed top-0 z-40 h-1 bg-primary`} id="scrollSlider"></div>
  );
};

export default ScrollSlider;
