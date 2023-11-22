import "../styles/SwiperContent.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import ModalComponent from "@/components/ModalComponent";

const ProductsSection = () => {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1533245270348-821d4d5c7514",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1664475130052-f58aaf58854e",
    },
    {
      img: "https://images.unsplash.com/photo-1620331310411-6c0819176107",
    },
    {
      img: "https://images.unsplash.com/photo-1675516922615-4fc6a5c1d8fa",
    },
    {
      img: "https://images.unsplash.com/photo-1527799595389-46c4c3aa0df2",
    },
    {
      img: "https://images.unsplash.com/photo-1620331317312-74b88bf40907",
    },
    {
      img: "https://images.unsplash.com/photo-1620331311520-246422fd82f9",
    },
    {
      img: "https://images.unsplash.com/photo-1501699169021-3759ee435d66",
    },
  ];

  return (
    <section
      id="products"
      className="mx-auto  flex h-screen w-[80vw] flex-col gap-10 "
    >
      <div className="border-l-2 border-solid border-primary">
        <p className="ml-2 text-primary">Products</p>
        <h1 className="ml-2 text-6xl text-white ">
          Check out our latest products
        </h1>
      </div>
      {/* <div className=" flex h-[80%] w-full items-center justify-center "> */}
      <div className="flex  sm:w-[60vw] xl:mb-0 xl:w-full">
        <Swiper
          slidesPerView={3}
          loop={true}
          speed={500}
          initialSlide={1}
          centeredSlides={true}
          slideToClickedSlide={true}
          grabCursor={true}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500000000000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          modules={[Autoplay, Scrollbar]}
          scrollbar={{
            hide: false,
          }}
        >
          {cards &&
            cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="mb-10 flex w-[25vw] flex-col gap-4 rounded-xl border-4 border-solid border-orange-500 p-4">
                  <img className="h-[40vh]" src={card.img} alt="Cartão" />
                  <ModalComponent image={card.img} />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* </div> */}
    </section>
  );
};

export default ProductsSection;
