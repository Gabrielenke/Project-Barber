import { Beard, Eyebrown, Scissors } from "@/assets/Icons/export";
import ActionButton from "@/components/ActionButton";
import PriceCard from "@/components/PriceCard";
import React from "react";

const PriceSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        <div className="flex flex-col items-center text-center text-white">
          <div className="mb-10 ml-2 h-10 w-2 border-l-2 border-solid border-primary" />
          <p className="ml-2 text-primary">Boardroom</p>
          <h1 className="ml-2 text-6xl ">Conheça alguns dos nossos preços</h1>
        </div>
        <div className="flex flex-wrap justify-between gap-10 ">
          <PriceCard
            iconAlt="Scissors"
            icon={Scissors}
            title="Corte de cabelo"
            price={30}
            description="Descubra cortes impecáveis em nossa barbearia, onde a habilidade encontra estilo. Nossos barbeiros talentosos proporcionam looks autênticos em um ambiente acolhedor. Oferecemos preços acessíveis para todos os estilos."
          />
          <PriceCard
            iconAlt="Barboterapia"
            icon={Beard}
            title="Barboterapia"
            price={30}
            description="Explore a barboterapia em nosso espaço, onde relaxamento e estilo se encontram. Nossa equipe habilidosa oferece cuidados especializados em um ambiente acolhedor. Preços acessíveis para uma experiência única."
          />
          <PriceCard
            iconAlt="Eyebrown"
            icon={Eyebrown}
            title="Corte e Sobrancelha"
            price={36}
            description="Aperfeiçoe suas sobrancelhas em nossa barbearia. Nossos profissionais garantem um design impecável em um ambiente acolhedor. Estilo acessível para realçar sua beleza única"
          />
          <PriceCard
            iconAlt="Scissors"
            icon={Scissors}
            title="Platinado"
            price={36}
            description="Descubra o platinado perfeito em nossa barbearia. Nossos especialistas em coloração criam tons deslumbrantes em um ambiente acolhedor. Estilo e qualidade a preços acessíveis para todos."
          />
        </div>
      </div>
    </>
  );
};

export default PriceSection;
