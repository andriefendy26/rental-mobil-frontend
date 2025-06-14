import BGAboutus from "../assets/BGAboutus.png";

export default function AboutUs() {
  return (
    <section className="overflow-hidden text-white">
      <div className="rounded-t-3xl bg-[#800000] py-6 text-center">
        <h2 className="text-2xl font-bold tracking-wide md:text-3xl">
          TENTANG KAMI
        </h2>
      </div>
      <div
        className="relative w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${BGAboutus})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 text-center md:px-16">
          <p className="text-lg leading-relaxed md:text-xl">
            <span className="block">
              CV. Tujuh Sembilan Oto adalah penyedia jasa rental mobil
              terpercaya di Berau yang berkomitmen memberikan layanan terbaik
              untuk memenuhi kebutuhan transportasi Anda, baik untuk keperluan
              pribadi, perusahaan, maupun proyek tambang. Dengan beragam pilihan
              unit kendaraan mulai dari mobil manual, matic, hingga kendaraan
              spesifikasi tambang, kami siap menjadi mitra perjalanan Anda di
              Berau dan sekitarnya.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
