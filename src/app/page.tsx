"use client";

import ServiceSection from "@/Sections/ServiceSection";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";

import { Pagination, Autoplay } from "swiper/modules";
import SwiperContent from "../components/SwiperContent";
import AboutSection from "@/Sections/AboutSection";
import PriceSection from "@/Sections/PriceSection";
import ProductsSection from "@/Sections/ProductsSection";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex h-screen w-full items-center justify-center"
      >
        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="flex h-full w-full overflow-hidden"
          style={
            {
              "--swiper-pagination-color": "white",
            } as React.CSSProperties
          }
        >
          <SwiperSlide className="flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1521490878864-a50e9fcb5718)] bg-cover bg-center text-center text-white">
            <SwiperContent />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1521490214993-bfb6f7dc096d)] bg-cover bg-center text-center text-white">
            <SwiperContent />
          </SwiperSlide>
         
        </Swiper>
      </section>

      <section
        id="services"
        className="mt-10 flex min-h-screen flex-col justify-center md:h-screen"
      >
        <ServiceSection />
      </section>
      <section id="about" className="mx-auto min-h-screen w-[80vw]">
        <AboutSection />
      </section>
      <section
        id="contact"
        className="mx-auto mt-10 flex h-screen w-[80vw] flex-col  gap-10"
      >
        <PriceSection />
      </section>
      <ProductsSection />
    </>
  );
}
