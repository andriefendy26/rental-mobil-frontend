import Card2 from "@/components/Card2";
import Logo1 from "../assets/1.png";
import Logo2 from "../assets/8.png";
import Logo3 from "../assets/7.png";
import Logo4 from "../assets/6.png";
import Logo5 from "../assets/5.png";
import Logo6 from "../assets/4.png";
import Car1 from "../assets/CarKeunggulan2.png";
import Car2 from "../assets/CarKeunggulan1.png";
import { motion } from "framer-motion";

interface KeunggulanProps {
  Logo: string;
  Judul: string;
  Deskripsi: string;
}

export default function Keunggulan() {
  const Keunggulan: KeunggulanProps[] = [
    {
      Logo: Logo1,
      Judul: "Tersedia Pilihan Mobil",
      Deskripsi:
        "Berbagai jenis mobil sewa tersedia sesuai kebutuhan perjalanan atau pekerjaan Anda.",
    },
    {
      Logo: Logo2,
      Judul: "Mobil Rental Terawat",
      Deskripsi:
        "Selalu dalam kondisi prima, dirawat secara berkala untuk kenyamanan dan keamanan Anda.",
    },
    {
      Logo: Logo3,
      Judul: "Biaya Sewa Terjangkau",
      Deskripsi:
        "Harga bersaing untuk semua kalangan, dengan pilihan paket yang fleksibel.",
    },
    {
      Logo: Logo4,
      Judul: "Banyak Paket Sewa",
      Deskripsi:
        "Sewa harian, mingguan, hingga bulanan. Bisa disesuaikan dengan kebutuhan Anda.",
    },
    {
      Logo: Logo5,
      Judul: "Layanan 24 Jam",
      Deskripsi:
        "Kami siap melayani Anda kapan pun dengan sistem pemesanan yang fleksibel.",
    },
    {
      Logo: Logo6,
      Judul: "Promo & Diskon",
      Deskripsi:
        "Manfaatkan berbagai promo dan diskon menarik untuk pelanggan setia kami.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#800000] py-16 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-wide sm:text-5xl">
            Keunggulan Kami
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 bg-yellow-400"></div>
          <p className="mt-6 text-lg text-gray-200">
            Keunggulan Rental Mobil Kami Dibandingkan yang Lainnya
          </p>
        </div>

        {/* Grid Cards */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Keunggulan.map(({ Logo, Judul, Deskripsi }, index) => (
              <div key={index} className="flex justify-center">
                <Card2 Logo={Logo} Judul={Judul} Deskripsi={Deskripsi} />
              </div>
            ))}
          </div>
        </div>

        {/* Car Images */}
        <div className="relative mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <motion.img
                src={Car1}
                alt="Car 1"
                className="relative -left-48 md:w-[550px]"
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.2,
                }}
              />
              <motion.img
                src={Car2}
                alt="Car 2"
                className="relative -right-48 md:w-[550px]"
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.4,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
