import { Button } from "@/components/Button";
import BGHeader from "../assets/BGHeader.png";
import { motion } from "framer-motion";
import Typewriter from "@/components/Typewriter";

export const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const wordsd = [
    { text: "Rental ", className: "text-white" },
    { text: "Terbaik ", className: "text-white" },
    { text: "untuk ", className: "text-white" },
    { text: "Kebutuhan ", className: "text-white" },
    { text: "Anda", className: "text-white" },
  ];

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={BGHeader}
        alt="background"
        className="absolute inset-0 z-0 h-full w-full object-cover object-[center_30%]"
      />

      {/* gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/70 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-3xl px-4 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="mb-6 text-4xl font-bold text-white md:text-6xl"
          variants={fadeInUp}
        >
          Rental Terbaik untuk Kebutuhan Anda
        </motion.h1>
        <motion.p
          className="mb-8 text-lg text-white md:text-xl"
          variants={fadeInUp}
        >
          Nikmati perjalanan nyaman dengan armada kendaraan berkualitas dan
          layanan terpercaya dari Tujuh Sembilan Oto Rental Berau.
        </motion.p>
        <motion.div className="flex justify-center gap-4" variants={fadeInUp}>
          <Button color="maron">Lihat Armada Kami</Button>
          <Button color="black">Pesan Sekarang</Button>
        </motion.div>
      </motion.div>
    </div>
  );
};
