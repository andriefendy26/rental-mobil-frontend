import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
// import Armada from "./Layout/Armada";
import Layout from "./Pages/Layout";
import MobilSelengkapnya from "./Layout/MobilSelengkapnya";
import Artikel from "./Layout/Artikel";

import { getAllCar, getAllGalery, getArtikel } from "./Api/Mobil";
import DetailArtikel from "./Layout/DetailArtikel";
import DetailAboutUs from "./Layout/DetailAboutUs";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import GaleriDetail from "./Layout/GaleriDetail";

export interface Mobil {
  id: number;
  merek: string;
  gambar: string;
  harga: number;
  transmisi: string;
  bahan_bakar: string;
  warna: string;
  kapasitas: string;
}

function App() {
  //loadingMobil
  const [loading, setLoading] = useState<boolean>(true);
  
  //loadingGlaery
  const [loadingGalery, setLoadingGalery] = useState<boolean>(true);

  //Mobil State
  const [dataMobil, setDataMobil] = useState<Mobil[]>([]);

  //Artikel State
  const [detailArtikel, setArtikel] = useState([]);

  //Artikel State
  const [dataGaleri, setGaleri] = useState([]);


  //Mobil Function 
  const getDataMobil = async () => {
    try {
      const response = await getAllCar();
      setDataMobil(response.data.mobil);
    } catch (error) {
      console.error("Gagal mengambil data mobil:", error);
    } finally {
      setLoading(false);
    }
  };

  const getDataArtikel = async () => {
    try {
      const respons = await getArtikel();
      setArtikel(respons.data.artikel);
      console.log("isi respone artikel", respons.data.artikel);
    } catch (error) {
      console.error("Gagal mengambil data mobil:", error);
    } finally {
      setLoading(false);
    }
  }

  const getGalery = async () => {
    try {
      const respon = await getAllGalery();
      setGaleri(respon.data.galeri)
      console.log(respon.data);
    } catch (error) {
      console.error("Gagal mengambil data mobil:", error);
    } finally {
      setLoadingGalery(false);
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 1500,
      // delay: 500,
    });
    getDataMobil();
    getDataArtikel();
    getGalery();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Home
              mobil={dataMobil}
              galeri={dataGaleri}
              isLoading={loading}
              isGaleryLoading={loadingGalery}
            ></Home>
          ),
        },
        {
          path: "/armada",
          element: (
            <MobilSelengkapnya
              mobil={dataMobil}
              isLoading={loading}
            ></MobilSelengkapnya>
          ),
        },
        {
          path: "/artikel",
          element: <Artikel data={detailArtikel}></Artikel>,
        },
        {
          path: "/galeri",
          element: (
            <GaleriDetail
              data={dataGaleri}
              isLoading={loadingGalery}
            ></GaleriDetail>
          ),
        },
        {
          path: "/artikel/detail/:id",
          element: <DetailArtikel></DetailArtikel>,
        },
        {
          path: "/tentangkami",
          element: <DetailAboutUs />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
