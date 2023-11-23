import React from "react";
import {
  OpeningCard,
  GetInTouchCard,
  Facebook,
  Linkedin,
  instagram,
  whatsapp,
} from "@/assets/export";
import ActionButton from "@/components/ActionButton";
import Image from "next/image";
import Link from "next/link";
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
            <h1 className="ml-2 text-3xl md:text-6xl ">Nossa Historia</h1>
          </div>
          <p className="max-w-[35vw] text-lg">
            "Na Barbearia Euler Cortes, nossa jornada começou recentemente, mas
            já estamos deixando nossa marca no mundo dos cortes impecáveis. Com
            talento afiado e atendimento personalizado, garantimos uma
            experiência única. Descubra o charme de uma barba bem cuidada e um
            corte de cabelo que reflete sua personalidade. Venha fazer parte da
            nossa história de estilo e tradição, onde cada visita é uma
            oportunidade de transformação"
          </p>
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
            <h1 className="ml-2 text-6xl ">Entre em contato</h1>
          </div>
          <p className="max-w-[35vw] text-lg">
            "Estamos prontos para transformar seu visual! Agende seu horário e
            venha descobrir a excelência em cortes e cuidados masculinos.
          </p>
          <div className="flex gap-10">
            <ActionButton className="h-12 w-[40%]" text="Agende seu horario" />
          </div>
          <div className="flex gap-6 ">
            <Link
              href="https://www.instagram.com/eulercortesamericana/"
              target="_blank"
              className="h-10 w-10"
            >
              <Image src={instagram} alt="" />
            </Link>
            <Link
              href="https://wa.me/19981335512"
              target="_blank"
              className="h-10 w-10"
            >
              <Image src={whatsapp} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
