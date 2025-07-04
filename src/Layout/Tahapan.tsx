import { Button } from "@/components/Button";
import Card from "@/components/Card";
import Logo1 from "../assets/1.webp";
import Logo2 from "../assets/2.webp";
import Logo3 from "../assets/3.webp";
import HeroBG from "../assets/HeroBG.webp";
import { motion } from "framer-motion";

export default function Tahapan() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-3">
      <div
        data-aos="fade-right"
         className="col-span-1 space-y-6 p-6 md:p-12 lg:col-span-2 lg:space-y-8 lg:px-32"
      >
        <Button color="green" onclick={() => null}>
          Tahapan Pemesanan
        </Button>
        <h2
          data-aos="fade-right"
          className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl"
        >
          Rental Mobil Dengan 3 Tahap
        </h2>
        <motion.div
          className="flex flex-col gap-4 md:flex-row md:gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Card Logo={Logo3} Deskripsi="Pilih layanan dan lokasi"></Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card Logo={Logo2} Deskripsi="Tentukan tanggal booking"></Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card Logo={Logo1} Deskripsi="Pilih layanan dan lokasi"></Card>
          </motion.div>
        </motion.div>
      </div>
      {/* Backgroundnya */}
      <motion.div
        className="absolute -right-96 -top-64  hidden w-[1000px] overflow-hidden lg:block"
        variants={bgVariant}
        initial="hidden"
        animate="visible"
      >
        <img className="" src={HeroBG} alt="" />
      </motion.div>
    </div>
  );
}
