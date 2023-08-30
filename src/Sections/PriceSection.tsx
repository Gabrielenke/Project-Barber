import { Eyebrown, Scissors, Beard } from "@/assets/export";
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
          <h1 className="ml-2 text-6xl ">We cut hair, not corners</h1>
          <p className="ml-2 mt-2 max-w-[50vw] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            blanditiis delectus, tempore, voluptas aliquid distinctio optio
            quibusdam error laudantium quaerat quisquam voluptate? Blanditiis
            commodi doloremque fugit voluptas tenetur, recusandae id.
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-10 ">
          <PriceCard
            iconAlt="Scissors"
            icon={Scissors}
            title="Hair cut & styling"
            price={36}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        quidem dolorem accusamus dicta esse illum aspernatur harum excepturi ea?
        Accusamus iusto pariatur cupiditate dolorum quos repellendus maxime
        debitis sequi totam."
          />
          <PriceCard
            iconAlt="Beard"
            icon={Beard}
            title="Hair cut & styling"
            price={36}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        quidem dolorem accusamus dicta esse illum aspernatur harum excepturi ea?
        Accusamus iusto pariatur cupiditate dolorum quos repellendus maxime
        debitis sequi totam."
          />
          <PriceCard
            iconAlt="Eyebrown"
            icon={Eyebrown}
            title="Hair cut & styling"
            price={36}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        quidem dolorem accusamus dicta esse illum aspernatur harum excepturi ea?
        Accusamus iusto pariatur cupiditate dolorum quos repellendus maxime
        debitis sequi totam."
          />
          <PriceCard
            iconAlt="Scissors"
            icon={Scissors}
            title="Hair cut & styling"
            price={36}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        quidem dolorem accusamus dicta esse illum aspernatur harum excepturi ea?
        Accusamus iusto pariatur cupiditate dolorum quos repellendus maxime
        debitis sequi totam."
          />
        </div>
        <ActionButton className="w-52 self-center" text="Make Appointment" />
      </div>
    </>
  );
};

export default PriceSection;
