import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CardArmada from "@/components/CardArmada";
import BGArmada from "../assets/BGArmada.png";
// import Avanza from "../assets/Avanza.png";
// import Rush from "../assets/Rush.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "@/components/Button";
import { Key } from "react";

export interface Mobil {
  id: number;
  merek: string;
  gambar: string;
  harga: number;
  transmisi: string;
  bahan_bakar: string;
  warna: string;
  kapasitas: string;
}

interface ArmadaProps {
  data: Mobil[];
  isLoading: boolean;
}

export default function Armada({ data, isLoading }: ArmadaProps) {
  // const Armada = [
  //   { judul: "Avanza", img: Avanza, price: 600000 },
  //   { judul: "Rush", img: Rush, price: 1000000 },
  //   { judul: "Avanza", img: Avanza, price: 600000 },
  //   { judul: "Avanza", img: Avanza, price: 600000 },
  //   { judul: "Avanza", img: Avanza, price: 600000 },
  // ];

  return (
    <div
      className="relative overflow-hidden bg-[#464b49] bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `url(${BGArmada})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative ">
        {/* Header */}
        <div className="container mx-auto px-4 text-center ">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            ARMADA KAMI
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-yellow-400"></div>
          <p className="mt-6 text-lg text-gray-200">
            Berikut tipe dan jenis unit armada kami
          </p>
        </div>

        {/* Carousel */}
        <div className="mx-auto mt-12 px-4 xl:mx-32">
          {isLoading ? (
            <div className="text-5xl text-white">Loadinggg</div>
          ) : (
            <Swiper
              navigation={true}
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="pb-12"
            >
              {data.length > 0 ? (
                data.map((item: Mobil, i: Key) => (
                  <SwiperSlide key={i} className="p-4">
                    <CardArmada
                      judul={item.merek}
                      image={item.gambar}
                      price={item.harga}
                      transmisi={item.transmisi}
                      bahanbakar={item.bahan_bakar}
                      warna={item.warna}
                      kapasitas={item.kapasitas}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <div className="text-6xl text-white text-center">Mobil masih kosong</div>
              )}
            </Swiper>
          )}

          {/* Button */}
          <div className=" text-center">
            <Button color="maron" onclick={() => null}>
              <span className="px-6">Selengkapnya</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
