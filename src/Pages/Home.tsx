
import { BookingSection } from "@/Layout/BookingSection";
import { Hero } from "@/Layout/Hero";
import Keunggulan from "@/Layout/Keunggulan";
import Tahapan from "@/Layout/Tahapan";
import AboutUs from "@/Layout/AboutUs";
import Armada from "@/Layout/Armada";
import Galeri from "@/Layout/Galeri";
import Testimoni from "@/Layout/Testimoni";
import { Mobil } from "@/App";

interface Galeri {
  gambar : string;
}

interface Props {
  mobil : Mobil[];
  isLoading : boolean;
  galeri : Galeri[];
  isGaleryLoading : boolean;
}

const Home = ({ mobil, galeri, isLoading, isGaleryLoading }: Props) => {
  return (
    <div className="bg-white">
      <Hero></Hero>
      <BookingSection></BookingSection>
      <Tahapan></Tahapan>
      <AboutUs></AboutUs>
      <Keunggulan></Keunggulan>
      <Armada data={mobil} isLoading={isLoading}></Armada>
      <Galeri data={galeri} isLoading={isGaleryLoading}></Galeri>
      <Testimoni></Testimoni>
    </div>
  );
};

export default Home;
