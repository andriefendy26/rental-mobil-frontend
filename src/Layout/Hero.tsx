import { Button } from "@/components/Button";
import BGHeader from "../assets/BGHero.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import Typewriter from "@/components/Typewriter";

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

  // const words = [
  //   { text: "Rental ", className: "text-white" },
  //   { text: "Terbaik ", className: "text-white" },
  //   { text: "untuk ", className: "text-white" },
  //   { text: "Kebutuhan ", className: "text-white" },
  //   { text: "Anda", className: "text-white" },
  // ];

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden rounded-bl-[100px] rounded-br-[100px] ">
      <div
        className="absolute  inset-0 z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BGHeader})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* gradient */}
      <div className="absolute  inset-0 z-20 bg-black opacity-60" />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-2xl px-4 text-center "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="mb-6 text-4xl font-bold text-white md:text-5xl"
          variants={fadeInUp}
        >
          Rental Terbaik untuk Kebutuhan Anda
        </motion.h1>
        <motion.p
          className="mb-8 max-w-2xl text-lg text-white md:text-xl"
          variants={fadeInUp}
        >
          Nikmati perjalanan nyaman dengan armada kendaraan berkualitas dan
          layanan terpercaya dari Tujuh Sembilan Oto Rental Berau.
        </motion.p>
        <motion.div className="flex justify-center gap-4" variants={fadeInUp}>
          <Link to="/armada">
          <Button color="maron" onclick={() => null}>
            Lihat Armada Kami
          </Button>
          </Link>
          <Button color="blackW" onclick={() => null}>
            Pesan Sekarang
          </Button>
        </motion.div>
      </motion.div>
      {/* <div className="relative z-20 mx-4 max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md md:p-12"></div> */}
    </div>
  );
};
