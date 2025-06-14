import { Button } from "@/components/Button";
import HeroBG from "../assets/HeroBG.png";
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

  const bgVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const wordsd = [
    { text: "Selamat ", className: "text-black" },
    { text: "Datang ", className: "text-black" },
    { text: "di ", className: "text-black" },
    { text: "Tujuh ", className: "text-black" },
    { text: "Sembilan ", className: "text-black" },
    { text: "Oto Rental", className: "text-black" },
  ];

  return (
    <div className="container grid grid-cols-3">
      <div className="col-span-2 flex min-h-[600px] items-center p-32   ">
        <motion.div
          className="space-y-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-6xl font-bold" variants={fadeInUp}>
            <Typewriter words={wordsd} />
            {/* Rental Terbaik untuk Kebutuhan Anda */}
          </motion.h1>
          <motion.p className="text-xl" variants={fadeInUp}>
            Nikmati perjalanan nyaman dengan armada kendaraan berkualitas dan
            layanan terpercaya dari Tujuh Sembilan Oto Rental Berau.
          </motion.p>
          <motion.div className="flex gap-4" variants={fadeInUp}>
            <Button color="maron">Lihat Armada Kami</Button>
            <Button color="black">Pesan Sekarang</Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Backgroundnya */}
      <motion.div
        className="absolute -right-48 -top-36 -z-10 w-[1000px] overflow-hidden"
        variants={bgVariant}
        initial="hidden"
        animate="visible"
      >
        <img className="" src={HeroBG} alt="" />
      </motion.div>
    </div>
  );
};
