import CardRate from "@/components/CardRate";
import Marquee from "react-fast-marquee";

export default function Testimoni() {
  const data = [
    {
      rating: 5,
      name: "Budi Santoso",
      description:
        "Pelayanan sangat memuaskan, mobil bersih dan nyaman. Proses sewa cepat dan mudah!",
      image:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      rating: 5,
      name: "Budi Santoso",
      description:
        "Pelayanan sangat memuaskan, mobil bersih dan nyaman. Proses sewa cepat dan mudah!",
      image:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      rating: 5,
      name: "Budi Santoso",
      description:
        "Pelayanan sangat memuaskan, mobil bersih dan nyaman. Proses sewa cepat dan mudah!",
      image:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  // Duplicate data for seamless loop
  const duplicatedData = [...data, ...data];

  return (
    <div className="mx-auto overflow-hidden px-4">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800">TESTIMONI</h1>
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
