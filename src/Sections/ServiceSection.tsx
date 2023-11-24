import ServiceCard from "@/components/ServiceCard";
import { corte } from "@/assets/export";

const ServiceSection = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-10 text-white">
        <h1 className="flex flex-col items-center text-center text-6xl font-bold">
          Nossos Serviços
          <div className="h-4 w-32 border-b-[3px] border-solid border-orange-400" />
        </h1>
        <h2 className="text-6xl font-bold">Seja bem vindo</h2>
        
      </div>
      <section className="mx-auto mt-20 flex w-full flex-col flex-wrap md:h-[60vh] md:w-[60vw]  ">
        <ServiceCard
          title="Haircut"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          altImage="cutColumn"
          image={corte}
          classNameDivWrapper="group relative mr-5 h-[30vh] md:h-[52vh] w-full md:w-[15vw]"
          className=""
          classNameH1="whitespace-nowrap"
          classNameDescription="hidden  flex-col group-hover:ml-3 group-hover:mt-10 group-hover:flex group-hover:text-left "
        />
        <div className="mb-5 mt-10 flex flex-wrap justify-around gap-5 md:mt-0 md:flex-nowrap">
          <ServiceCard
            title="Haircut"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            altImage="cut"
            image={corte}
            classNameDivWrapper="group relative md:h-[25vh] md:w-[20vw]"
            className=""
            classNameH1="whitespace-nowrap"
            classNameDescription="hidden flex-col group-hover:ml-3 group-hover:mt-10 group-hover:flex group-hover:text-left"
          />
          <ServiceCard
            title="Haircut"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            altImage="cut25vw"
            image={corte}
            classNameDivWrapper="group relative md:h-[25vh] md:w-[25vw]"
            className=""
            classNameH1=""
            classNameDescription="hidden group-hover:mt-10 group-hover:block"
          />
        </div>
        <div className="mb-5 mt-10 flex flex-wrap justify-around gap-5 md:mt-0 md:flex-nowrap">
          <ServiceCard
            title="Haircut"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            altImage="cut25vw"
            image={corte}
            classNameDivWrapper="group relative md:h-[25vh] md:w-[25vw]"
            className=""
            classNameH1=""
            classNameDescription="hidden group-hover:mt-10 group-hover:block"
          />
          <ServiceCard
            title="Haircut"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            altImage="cut"
            image={corte}
            classNameDivWrapper="group relative md:h-[25vh] md:w-[20vw]"
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
