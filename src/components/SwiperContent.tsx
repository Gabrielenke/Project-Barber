import ActionButton from "./ActionButton";
import ScrollAnimation from "./ScrollAnimation";

const SwiperContent = () => {
  return (
    <div className="relative mt-10 flex h-full flex-col items-center justify-center gap-2 md:mt-0">
      <h1 className="mb-2 text-4xl font-bold md:mb-20 md:text-6xl">
        Euler Cortes
      </h1>
      <p className="text-4xl font-bold">
        Estamos prontos para transformar seu visua
      </p>

      <div className="my-20 flex gap-10"></div>
      <ScrollAnimation />
    </div>
  );
};

export default SwiperContent;
