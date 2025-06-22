import axios from "axios";

export interface Mobil {
  id: number;
  merek: string;
  no_plat: string | null;
  gambar: string;
  harga: number;
  status: string;
  kapasitas: string;
  warna: string;
  bahan_bakar: string;
  transmisi: string;
  created_at: string;
  updated_at: string;
  jenis_mobil_id: number;
  deleted_at: string | null;
}

export interface CarResponse {
  status: number;
  data: {
    mobil: Mobil[];
  };
}

export const getAllCar = async (): Promise<CarResponse> => {
  try {
    const response = await axios.get<CarResponse>(
    `${import.meta.env.VITE_API_URL_LOCAL}/mobil`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Gagal mengambil data mobil: ${error.message}`);
    } else {
      throw new Error("Terjadi kesalahan tak terduga.");
    }
  }
};

export const getArtikel = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL_LOCAL}/artikel`,
    );
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Gagal mengambil data mobil: ${error.message}`);
    } else {
      throw new Error("Terjadi kesalahan tak terduga.");
    }
  }
}

export const getArtikelById = async (id : unknown) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL_LOCAL}/artikel/${id}`,
    );
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Gagal mengambil data mobil: ${error.message}`);
    } else {
      throw new Error("Terjadi kesalahan tak terduga.");
    }
  }
}

export const getAllGalery = async () => {
 try {
  const response = await axios.get( `${import.meta.env.VITE_API_URL_LOCAL}/galeri`)
  return response.data
 } catch (error) {
  if (axios.isAxiosError(error)) {
    throw new Error(`Gagal mengambil data mobil: ${error.message}`);
  } else {
    throw new Error("Terjadi kesalahan tak terduga.");
  }
 }
}