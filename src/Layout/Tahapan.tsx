import { Button } from "@/components/Button";
import Card from "@/components/Card";
import Logo1 from "../assets/1.png";
import Logo2 from "../assets/2.png";
import Logo3 from "../assets/3.png";
import HeroBG from "../assets/HeroBG.png";
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

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 space-y-8 p-32">
        <Button color="green">Tahapan Pemesanan</Button>
        <h1 className="text-5xl font-bold">Rental Mobil Dengan 3 Tahap</h1>
        <div className="flex gap-3">
          <Card Logo={Logo3} Deskripsi="Pilih layanan dan lokasi"></Card>
          <Card Logo={Logo2} Deskripsi="Tentukan tanggal booking"></Card>
          <Card Logo={Logo1} Deskripsi="Pilih layanan dan lokasi"></Card>
        </div>
      </div>
      {/* Backgroundnya */}
      <motion.div
        className="relative -top-40 right-10 -z-10 w-[500px] overflow-hidden"
        variants={bgVariant}
        initial="hidden"
        animate="visible"
      >
        <img className="" src={HeroBG} alt="" />
      </motion.div>
    </div>
  );
}
