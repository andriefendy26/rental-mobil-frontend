import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Armada from "./Layout/Armada";
import Layout from "./Pages/Layout";
import MobilSelengkapnya from "./Layout/MobilSelengkapnya";
import Artikel from "./Layout/Artikel";

import { getAllCar, getArtikel } from "./Api/Mobil";
import DetailArtikel from "./Layout/DetailArtikel";
import DetailAboutUs from "./Layout/DetailAboutUs";

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
  const [loading, setLoading] = useState<boolean>(true);

  //Mobil State
  const [dataMobil, setDataMobil] = useState<Mobil[]>([]);

  //Artikel State
  const [detailArtikel, setArtikel] = useState([]);


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

  // const getDataArtikelByID = async () => {
  //   try {
  //     const respons = await getArtikel(1);
  //     setArtikel(respons.data.artikel);
  //     console.log("isi respone artikel", respons.data.artikel);
  //   } catch (error) {
  //     console.error("Gagal mengambil data mobil:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  useEffect(() => {
    getDataMobil();
    // getDataArtikelByID();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home mobil={dataMobil} isLoading={loading}></Home>,
        },
        {
          path: "/armada",
          element: <MobilSelengkapnya mobil={dataMobil} isLoading={loading}></MobilSelengkapnya>,
        },
        {
          path: "/artikel",
          element: <Artikel></Artikel>,
        },
        {
          path : "/artikel/detail/:id",
          element : <DetailArtikel></DetailArtikel>
        },
        {
          path: "/tentangkami",
          element: <DetailAboutUs/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
