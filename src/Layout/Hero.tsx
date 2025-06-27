import { Button } from "@/components/Button";
import BGHeader from "../assets/BGHero.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import Typewriter from "@/components/Typewriter";
import { TypeAnimation } from "react-type-animation";
import Phone from "@/Api/Phone.json";
import { Helmet } from "react-helmet-async";

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
  const phoneNumber = Phone.nomor;
  const message = `==============================
  *HALO SAYA INGIN MEMESAN*
  ==============================
  
  Halo *CV Tujuh Sembilan Oto Rent Car*,
  
  Saya tertarik untuk melakukan pemesanan mobil. Mohon informasi lebih lanjut mengenai ketersediaan unit dan proses pemesanan.
  
  🙏 Terima kasih 🙏  
  📩 Dikirim via http://cvtujuhsembilnotorentcar.com`;

  const encodedMessage = encodeURIComponent(message);

  // const words = [
  //   { text: "Rental ", className: "text-white" },
  //   { text: "Terbaik ", className: "text-white" },
  //   { text: "untuk ", className: "text-white" },
  //   { text: "Kebutuhan ", className: "text-white" },
  //   { text: "Anda", className: "text-white" },
  // ];

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Rental mobil terpercaya di Berau. CV. Tujuh Sembilan Oto menyediakan armada berkualitas dan layanan profesional untuk perjalanan pribadi, bisnis, hingga proyek tambang."
        />
        <link rel="canonical" href="https://cvtujuhsembilanotorentcar.com/" />
        <meta property="og:title" content="Home - CV. Tujuh Sembilan Oto" />
        <meta
          property="og:description"
          content="Selamat datang di CV. Tujuh Sembilan Oto, solusi terbaik untuk kebutuhan rental mobil di Berau dan sekitarnya. Kami menawarkan berbagai pilihan kendaraan—dari city car hemat BBM, MPV keluarga, hingga double cabin 4x4 untuk keperluan tambang.

Didukung oleh tim profesional dan armada yang selalu dirawat, kami siap memberikan pengalaman perjalanan yang aman, nyaman, dan efisien. Baik untuk perjalanan pribadi, tamu perusahaan, atau keperluan proyek jangka panjang, Tujuh Sembilan Oto adalah mitra transportasi yang bisa Anda andalkan."
        />
        <meta property="og:image" content={BGHeader} />
        <meta
          property="og:url"
          content="https://cvtujuhsembilanotorentcar.com/"
        />
        <meta property="og:type" content="website" />

        {/* Optional: Twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - CV. Tujuh Sembilan Oto" />
        <meta
          name="twitter:description"
          content="Selamat datang di CV. Tujuh Sembilan Oto, solusi terbaik untuk kebutuhan rental mobil di Berau dan sekitarnya. Kami menawarkan berbagai pilihan kendaraan—dari city car hemat BBM, MPV keluarga, hingga double cabin 4x4 untuk keperluan tambang.

Didukung oleh tim profesional dan armada yang selalu dirawat, kami siap memberikan pengalaman perjalanan yang aman, nyaman, dan efisien. Baik untuk perjalanan pribadi, tamu perusahaan, atau keperluan proyek jangka panjang, Tujuh Sembilan Oto adalah mitra transportasi yang bisa Anda andalkan."
        />
        <meta name="twitter:image" content={BGHeader} />

        <link rel="canonical" href="/" />
      </Helmet>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden rounded-bl-[50px] rounded-br-[50px] md:rounded-bl-[100px] md:rounded-br-[100px] ">
        <div
          className="absolute  inset-0 z-10 bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{
            backgroundImage: `url(${BGHeader})`,
          }}
        ></div>

        {/* gradient */}
        <div className="absolute inset-0 z-20 bg-black opacity-60" />

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
            Rental Terbaik untuk{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Kebutuhan",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Perjalanan",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                fontStyle: "bold",
                letterSpacing: "2px",
              }}
              repeat={Infinity}
            />
            Anda
          </motion.h1>
          <motion.h2
            className="mb-8 max-w-2xl text-lg text-white md:text-xl"
            variants={fadeInUp}
          >
            Nikmati perjalanan nyaman dengan armada kendaraan berkualitas dan
            layanan terpercaya dari Tujuh Sembilan Oto Rental Berau.
          </motion.h2>
          <motion.div className="flex justify-center gap-4" variants={fadeInUp}>
            <Link to="/armada">
              <Button color="maron" onclick={() => null}>
                Lihat Armada Kami
              </Button>
            </Link>
            <a
              href={`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`}
              target="_blank"
            >
              <Button color="blackW" onclick={() => null}>
                Pesan Sekarang
              </Button>
            </a>
          </motion.div>
        </motion.div>
        {/* <div className="relative z-20 mx-4 max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md md:p-12"></div> */}
      </div>
    </>
  );
};
