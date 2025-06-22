import CardRate from "@/components/CardRate";
import Marquee from "react-fast-marquee";

export default function Testimoni() {
  const data = [
    {
      rating: 5,
      name: "Yusri Pratama",
      description:
        "obil disini selama seminggu, terbaik lah pelayanannya, mobilnya oke mantap, intinya terbaik lah, siapa yg mau rental disini aku rekomend banget guysTempat rental mobil terbaik, saya pernah rental mobil disini selama seminggu, terbaik lah pelayanannya, mobilnya oke mantap, intinya terbaik lah, siapa yg mau rental disini aku rekomend banget guys",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVrYLSpXXjp0qhJpCBQMkpt19nj57On2ub6qxRmwvFJRkCx21bH=s30-c-rp-mo-br100",
    },
    {
      rating: 5,
      name: "Asbudi",
      description:
        "Mobilnya bagus, biaya sewa terjangkau, ownernya fast respon..jadi nyaman rental disini..",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocIshWN6tLk_d9fhz9ywbJNQuID-yFnw_viCiJgU7493oQAS3wo=w41-h41-p-rp-mo-br100",
    },
    {
      rating: 5,
      name: "Suprianto Haseng",
      description:
        "Saya sangat puas dengan layanan rental mobil ini! Proses pemesanan yang mudah dan cepat, sangat ramah serta membantu. Mobil yang ada dalam kondisi bersih dan terawat dengan baik, memberikan kenyamanan selama perjalanan. Selain itu, harga yang ditawarkan juga sangat kompetitif.",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVobm_tovNcb9BFjwi6lLAs9VzHzpZE5K5Pkmn2s0Fts2I_glgCpw=w41-h41-p-rp-mo-br100",
    },
    {
      rating: 5,
      name: "Salma Arsyad",
      description:
        "Pelayanan nya super baik, owner nya ramah pokoknya mantul jgn lupa rental mobil disini ya",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjW0oHi2Lgv-VbUV-wbibh6Mx0BgNAhDNRA4faGLq-ofh6ifjkg=w41-h41-p-rp-mo-br100",
    },
    {
      rating: 5,
      name: "Zuria Suriaa",
      description:
        "Sudah langganan rental mobil di sini Bahkan perna juga kontrak bulanan Unit lengkap bersih Pelayanannya sangat baik terpercaya, free juga antar antar jemput bandara",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjXImwV_7V46a-Ayl5V9ENlRvAMDWGTnKvV1ArT-QcKFNUWOAqhsEA=w41-h41-p-rp-mo-br100",
    },
    {
      rating: 5,
      name: "Ria Asriani",
      description:
        "Worthy banget sih menurutku, aku rekomendasi kan buat kalian yang lagi cari mobil rental dibagian berau dan sekitarnya😍",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocIRCx2I2Fhp_iUcP9U4tdNlPXD4REq_DuxYX275Y4Sq0cfgcA=w41-h41-p-rp-mo-br100",
    },
    {
      rating: 5,
      name: "drmais",
      description:
        "Respon admin cepat dan ramah melalui WhatsApp atau telepon. Proses pemesanan juga mudah dan transparan, tanpa biaya tersembunyi. Cocok untuk kebutuhan wisata, perjalanan bisnis, proyek lapangan, atau antar-jemput",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjXlEBj-gklwrT5dv1FRcPeYEqyocgZ76C0NB867Z0D1ve6PcC0=w41-h41-p-rp-mo-br100",
    },
    {
      rating: 5,
      name: "Roezdieana Florin",
      description:
        "Suka rental disini, pelayanannya ramah, baik dan yang pasti mobil nya bersih dan bagus.. Pokok nya best",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjWaO8Muu8TojMH907tTQzXj1a53w_tkbLMRlHXAloXg8tyH_4g=w41-h41-p-rp-mo-br100",
    },
    {
      rating: 5,
      name: "Tika Sartika",
      description: "Mobil Tepat waktu,aman & nyaman.",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjXMXdfZBRACOx8CBaQNfQY1whX5RlCpz-xpGISaTY7gzSJaBok=w41-h41-p-rp-mo-br100",
    },
  ];

  // Duplicate data for seamless loop
  const duplicatedData = [...data, ...data];

  return (
    <div className="mx-auto mt-10 overflow-hidden px-4">
      <div className="mb-16 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">TESTIMONI</h1>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#800000]"></div>
        <p className="mt-4 text-lg text-gray-600">
          Pengalaman pelanggan tentang kami
        </p>
      </div>

      <Marquee gradient={true}>
        <div className="flex gap-10 py-10">
          {duplicatedData.map((item, index) => (
            <div key={index} className="">
              <CardRate
                rating={item.rating}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
