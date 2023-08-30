import React from "react";
import { OpeningCard, GetInTouchCard } from "@/assets/export";
import ActionButton from "@/components/ActionButton";
import Image from "next/image";
const AboutSection = () => {
  return (
    <>
      <div
        id="FirstWrapper"
        className="mx-auto mt-10 flex w-[80vw] justify-between "
      >
        <div
          id="content-wrapper"
          className="flex w-[40vw] flex-col gap-10  text-white"
        >
          <div className="border-l-2 border-solid border-primary">
            <p className="ml-2 text-primary">Boardroom</p>
            <h1 className="ml-2 text-6xl ">Story of our barbershop</h1>
          </div>
          <p className="max-w-[35vw] text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            praesentium porro minus iure deleniti voluptatem quis, magnam ipsum
            sit delectus, nihil cumque natus doloribus odit eaque laborum
            explicabo vitae enim.
          </p>
          <ActionButton className="w-56" text="Make an Appointment" />
        </div>
        <div className="w-[40vw]">
          <Image
            className="h-[80%] w-full"
            src={OpeningCard}
            alt="OpeningCard"
          />
        </div>
      </div>

      <div id="SecondWrapper" className="mx-auto mt-10 flex w-[80vw] gap-16 ">
        <div className="-ml-36 -mt-28 w-[40vw]">
          <Image
            className="h-[80%] w-full "
            src={GetInTouchCard}
            alt="SecondCard"
          />
        </div>
        <div
          id="content-wrapper"
          className="flex w-[40vw] flex-col gap-8 text-white"
        >
          <div className="border-l-2 border-solid border-primary">
            <p className="ml-2 text-primary">Boardroom</p>
            <h1 className="ml-2 text-6xl ">Get in touch with us</h1>
          </div>
          <p className="max-w-[35vw] text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            praesentium porro minus iure deleniti voluptatem quis, magnam ipsum
            sit delectus, nihil cumque natus doloribus odit eaque laborum
            explicabo vitae enim.
          </p>
          <div className="flex gap-10">
            <ActionButton className="h-24 w-1/2" text="Make an Appointment" />
            <ActionButton className="h-24 w-1/2" text="Make an Appointment" />
          </div>
          <div className="flex gap-6 ">
            <ActionButton className="h-10 w-10 rounded-md" text="ic" />
            <ActionButton className="h-10 w-10 rounded-md" text="ic" />
            <ActionButton className="h-10 w-10 rounded-md" text="ic" />
            <ActionButton className="h-10 w-10 rounded-md" text="ic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
