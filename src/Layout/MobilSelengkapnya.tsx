import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CardArmada from "@/components/CardArmada";
import BGArmada from "../assets/BGArmada.png";

import { Button } from "@/components/Button";
import { Mobil } from "@/App";
import { Key } from "react";

interface Props {
  mobil: Mobil[];
  isLoading: boolean;
}

export default function MobilSelengkapnya({ mobil, isLoading }: Props) {
  // const Armada = [
  //   { judul: "Avanza", img: Avanza, price: 600000 },
  //   { judul: "Rush", img: Rush, price: 1000000 },
  //   { judul: "Avanza", img: Avanza, price: 600000 },
  //   { judul: "Avanza", img: Avanza, price: 600000 },
  //   { judul: "Avanza", img: Avanza, price: 600000 },
  // ];

  return (
    <div
      className="relative overflow-hidden bg-[#464b49] bg-cover bg-center bg-no-repeat py-16 pt-24"
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
        {isLoading ? (
          <div className="my-10 text-center text-6xl text-white">Loading</div>
        ) : mobil.length > 0 ? (
          <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-4 ">
            {mobil.map((item: Mobil, i: Key) => (
              <CardArmada
                key={i}
                judul={item.merek}
                image={item.gambar}
                price={item.harga}
                transmisi={item.transmisi}
                bahanbakar={item.bahan_bakar}
                warna={item.warna}
                kapasitas={item.kapasitas}
              />
            ))}
          </div>
        ) : (
          <div className="my-10 text-center text-6xl text-white">Mobil Masih Kosong</div>
        )}

        {/* Button */}
        <div className=" text-center">
          <Button color="maron" onclick={() => null}>
            <span className="px-6">Selengkapnya</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
