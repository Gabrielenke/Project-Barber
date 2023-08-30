import ServiceCard from "@/components/ServiceCard";

const ServiceSection = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-10 text-white">
        <h1 className="flex flex-col items-center text-center text-6xl font-bold">
          Our Services
          <div className="h-4 w-32 border-b-[3px] border-solid border-orange-400" />
        </h1>
        <h2 className="text-6xl font-bold">Welcome to our barbershop</h2>
        <p className="max-w-[700px] text-lg">
          Founded in 2004,Boarroom salon for men in the authority in mens`s
          grooming we cater to men who are looking for an elavated barbershop
          experience
        </p>
      </div>
      <section className="mx-auto mt-20 flex h-[60vh] w-[60vw] flex-col flex-wrap  ">
        <ServiceCard
          title="Haircut"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          altImage="cutColumn"
          image="https://images.unsplash.com/photo-1533245270348-821d4d5c7514"
          classNameDivWrapper="group relative mr-5 h-[52vh] w-[15vw]"
          className=""
          classNameH1="whitespace-nowrap"
          classNameDescription="hidden  flex-col group-hover:ml-3 group-hover:mt-10 group-hover:flex group-hover:text-left "
        />
        <div className="mb-5 flex gap-5">
          <ServiceCard
            title="Haircut"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            altImage="cut"
            image="https://images.unsplash.com/photo-1634302086887-13b5585a8831"
            classNameDivWrapper="group relative h-[25vh] w-[20vw]"
            className=""
            classNameH1="whitespace-nowrap"
            classNameDescription="hidden flex-col group-hover:ml-3 group-hover:mt-10 group-hover:flex group-hover:text-left"
          />
          <ServiceCard
            title="Haircut"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            altImage="cut25vw"
            image="https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4"
            classNameDivWrapper="group relative h-[25vh] w-[25vw]"
            className=""
            classNameH1=""
            classNameDescription="hidden group-hover:mt-10 group-hover:block"
          />
        </div>
        <div className="flex gap-5">
          <ServiceCard
            title="Haircut"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            altImage="cut25vw"
            image="https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4"
            classNameDivWrapper="group relative h-[25vh] w-[25vw]"
            className=""
            classNameH1=""
            classNameDescription="hidden group-hover:mt-10 group-hover:block"
          />
          <ServiceCard
            title="Haircut"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            altImage="cut"
            image="https://images.unsplash.com/photo-1634302086887-13b5585a8831"
            classNameDivWrapper="group relative h-[25vh] w-[20vw]"
            className=""
            classNameH1="whitespace-nowrap"
            classNameDescription="hidden flex-col group-hover:ml-3 group-hover:mt-10 group-hover:flex group-hover:text-left"
          />
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
