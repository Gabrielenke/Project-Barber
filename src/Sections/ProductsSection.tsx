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
      img: "https://donalcides.com.br/wp-content/uploads/2021/02/pomada-para-cabelo-matte-don-alcides-freak-show-1-scaled.jpg",
    },
    {
      img: "https://donalcides.com.br/wp-content/uploads/2022/11/pomada-water-soluble-don-alcides-40g.jpg",
    },
    {
      img: "https://donalcides.com.br/wp-content/uploads/2022/11/kit-pomadas-fiber-water-matte-don-alcides-40g.jpg",
    },
    {
      img: "https://donalcides.com.br/wp-content/uploads/2020/02/oleo-para-barba-don-alcides-barber-shop-30ml-barba-negra-don-alcides-3437.jpg",
    },
    {
      img: "https://donalcides.com.br/wp-content/uploads/2021/02/pomada-para-cabelo-matte-don-alcides-freak-show-1-scaled.jpg",
    },
    {
      img: "https://donalcides.com.br/wp-content/uploads/2022/11/pomada-water-soluble-don-alcides-40g.jpg",
    },
    {
      img: "https://donalcides.com.br/wp-content/uploads/2022/11/kit-pomadas-fiber-water-matte-don-alcides-40g.jpg",
    },
    {
      img: "https://donalcides.com.br/wp-content/uploads/2020/02/oleo-para-barba-don-alcides-barber-shop-30ml-barba-negra-don-alcides-3437.jpg",
    },
  ];

  return (
    <section
      id="products"
      className="mx-auto  flex h-screen w-[80vw] flex-col gap-10 "
    >
      <div className="border-l-2 border-solid border-primary">
        <p className="ml-2 text-primary">Produtos</p>
        <h1 className="ml-2 text-6xl text-white ">
          Conheça alguns dos nossos produtos
        </h1>
      </div>
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
    </section>
  );
};

export default ProductsSection;
