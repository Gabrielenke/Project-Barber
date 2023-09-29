import ActionButton from "./ActionButton";
import ScrollAnimation from "./ScrollAnimation";

const SwiperContent = () => {
  return (
    <div className="relative mt-10 flex h-full flex-col items-center justify-center gap-2 md:mt-0">
      <h1 className="mb-2 text-4xl font-bold md:mb-20 md:text-6xl">
        Euler Cortes
      </h1>
      <p className="text-4xl font-bold">Relax,Look Great,Fell Confident</p>
      <p className="text-lg text-white/50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Quisquam voluptatum, quibusdam, quia, quod voluptates voluptatem
      </p>
      <div className="my-20 flex gap-10">
        <ActionButton className="text-white" text="Make an Appointment" />
        <ActionButton className="text-white" text="Contact us" />
      </div>
      <ScrollAnimation />
    </div>
  );
};

export default SwiperContent;
