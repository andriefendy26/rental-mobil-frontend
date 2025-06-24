import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CardArmada from "@/components/CardArmada";
import BGArmada from "../assets/BGArmada.png";

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

export interface ArmadaProps {
  data: Mobil[];
  isLoading: boolean;
}

// Empty State Component
const EmptyArmadaState = () => (
  <div className="flex flex-col items-center justify-center px-4 py-20">
    {/* Animated Car Icon */}
    <div className="relative mb-8">
      <div className="flex h-32 w-32 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-[#800000] to-[#800000]/40 shadow-2xl">
        <svg
          className="h-16 w-16 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
        </svg>
      </div>
      {/* Floating particles */}
      <div className="absolute -right-2 -top-2 h-4 w-4 animate-bounce rounded-full bg-white"></div>
      <div className="absolute -bottom-1 -left-3 h-3 w-3 animate-bounce rounded-full bg-white delay-300"></div>
      <div className="absolute -left-4 top-4 h-2 w-2 animate-bounce rounded-full bg-white delay-700"></div>
    </div>

    {/* Main Message */}
    <div className="max-w-md space-y-4 text-center">
      <h3 className="mb-2 text-3xl font-bold text-white">
        Armada Sedang Dipersiapkan
      </h3>
      <p className="text-lg leading-relaxed text-gray-300">
        Tim kami sedang mempersiapkan koleksi kendaraan terbaik untuk Anda.
        Segera hadir dengan pilihan yang lebih lengkap!
      </p>
    </div>

    {/* Decorative Elements */}
    <div className="mt-8 flex space-x-3">
      <div className="h-3 w-3 animate-ping rounded-full bg-white"></div>
      <div className="h-3 w-3 animate-ping rounded-full bg-white delay-150"></div>
      <div className="h-3 w-3 animate-ping rounded-full bg-white delay-300"></div>
    </div>
  </div>
);

// Loading State Component
const LoadingArmadaState = () => (
  <div className="flex flex-col items-center justify-center py-20">
    {/* Animated Loading Car */}
    <div className="relative mb-8">
      <div className="h-20 w-20 animate-spin rounded-full border-4 border-[#80000] border-t-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="h-8 w-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
        </svg>
      </div>
    </div>

    <h3 className="mb-2 text-2xl font-semibold text-white">Memuat Armada...</h3>
    <p className="text-gray-300">Mohon tunggu sebentar</p>

    {/* Loading bars */}
    <div className="mt-6 flex space-x-2">
      <div className="h-8 w-2 animate-pulse rounded bg-white delay-0"></div>
      <div className="h-8 w-2 animate-pulse rounded bg-white delay-150"></div>
      <div className="h-8 w-2 animate-pulse rounded bg-white delay-300"></div>
      <div className="delay-450 -bg-[#800000] h-8 w-2 animate-pulse rounded"></div>
    </div>
  </div>
);

export default function Armada({ data, isLoading }: ArmadaProps) {
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
      <div className="relative">
        {/* Header */}
        <div  className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            ARMADA KAMI
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-yellow-400"></div>
          <p className="mt-6 text-lg text-gray-200">
            Berikut tipe dan jenis unit armada kami
          </p>
        </div>

        {/* Main Content */}
        <div data-aos="fade-right" className="mx-auto mt-12 px-4 xl:mx-32">
          {isLoading ? (
            <LoadingArmadaState />
          ) : data.length > 0 ? (
            <>
              {/* Carousel */}
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
                {data.map((item: Mobil, i: Key) => (
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
                ))}
              </Swiper>

              {/* Button */}
              <div className="text-center">
                <Button color="maron" onclick={() => null}>
                  <span className="px-6">Selengkapnya</span>
                </Button>
              </div>
            </>
          ) : (
            <EmptyArmadaState />
          )}
        </div>
      </div>
    </div>
  );
}
