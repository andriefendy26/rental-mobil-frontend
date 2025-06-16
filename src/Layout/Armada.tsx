import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CardArmada from "@/components/CardArmada";
import BGArmada from "../assets/BGArmada.png";
import Avanza from "../assets/Avanza.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "@/components/Button";

export default function Armada() {
  const Armada = [
    { judul: "Avanza", img: Avanza, price: 600000 },
    { judul: "Avanza", img: Avanza, price: 1000000 },
    { judul: "Avanza", img: Avanza, price: 600000 },
    { judul: "Avanza", img: Avanza, price: 600000 },
    { judul: "Avanza", img: Avanza, price: 600000 },
  ];
  return (
    <div
      className="bg-[#464b49] bg-cover bg-center bg-repeat py-10"
      style={{ backgroundImage: `url(${BGArmada})` }}
    >
      <div className="w-full space-y-3 place-self-center bg-[#464b49] py-7 text-center text-white">
        <h1 className="text-4xl font-bold">ARMADA KAMI</h1>
        <p className="text-lg">Berikut tipe dan jenis unit armada kami</p>
      </div>
      <div className="gap-8 px-40 py-10 text-center space-y-6">
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          //   pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Armada.map((item, i) => (
            <SwiperSlide>
              <CardArmada
                key={i}
                judul={item.judul}
                image={item.img}
                price={item.price}
              ></CardArmada>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button color="maron" onclick={() => null}>
          <a>Selengkapnya</a>
        </Button>
      </div>
    </div>
  );
}
