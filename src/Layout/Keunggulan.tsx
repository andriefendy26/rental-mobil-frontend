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
  const keunggulanData: KeunggulanProps[] = [
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const carVariants = {
    left: {
      hidden: { opacity: 0, x: -300, rotate: -5 },
      visible: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
          duration: 1.2,
          ease: "easeOut",
          delay: 0.5,
        },
      },
    },
    right: {
      hidden: { opacity: 0, x: 300, rotate: 5 },
      visible: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
          duration: 1.2,
          ease: "easeOut",
          delay: 0.7,
        },
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#800000] via-[#900000] to-[#700000] py-16 text-white">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        {/* Floating elements for visual interest */}
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-yellow-400/5 blur-xl"></div>
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-yellow-400/5 blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Enhanced Header */}
        <motion.div
          className="mb-16 text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-4xl font-bold tracking-wide sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Keunggulan Kami
          </motion.h1>
          <motion.div
            className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          ></motion.div>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Keunggulan Rental Mobil Kami Dibandingkan yang Lainnya
          </motion.p>
        </motion.div>

        {/* Enhanced Grid Cards */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {keunggulanData.map(({ Logo, Judul, Deskripsi }, index) => (
              <motion.div
                key={index}
                className="flex justify-center"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Card2 Logo={Logo} Judul={Judul} Deskripsi={Deskripsi} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Car Images Section */}
        <div className="relative mt-20 lg:mt-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row lg:gap-16">
              {/* Left Car */}
              <motion.div
                className="relative max-w-md flex-1 md:max-w-lg lg:max-w-xl"
                variants={carVariants.left}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}
              >
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-yellow-400/20 to-transparent blur-lg"></div>
                <img
                  src={Car1}
                  alt="Premium Car Rental - Car 1"
                  className="relative h-auto w-full object-contain drop-shadow-2xl"
                  loading="lazy"
                />
              </motion.div>

              {/* Right Car */}
              <motion.div
                className="relative max-w-md flex-1 md:max-w-lg lg:max-w-xl"
                variants={carVariants.right}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}
              >
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-l from-yellow-400/20 to-transparent blur-lg"></div>
                <img
                  src={Car2}
                  alt="Premium Car Rental - Car 2"
                  className="relative h-auto w-full object-contain drop-shadow-2xl"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          {/* Decorative Road Line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1 }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
