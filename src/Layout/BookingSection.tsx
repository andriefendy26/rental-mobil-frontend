import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import { FaCarAlt, FaMapMarkerAlt, FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { Button } from "@/components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const BookingSection = () => {
  return (
    <div className="mx-4 my-6">
      <BookingSectionComp />
    </div>
  );
};

const BookingSectionComp = () => {
  const [step, setStep] = useState(1);
  const [layanan, setLayanan] = useState("Pilih Jenis Layanan");
  const [alamatDari, setAlamatDari] = useState("Tarakan");
  const [tujuanKe, setTujuanKe] = useState("Tarakan");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-lg">
      {step === 1 && (
        <div className="flex flex-wrap items-center justify-between gap-3 text-black">
          <Dropdown
            icon1={<FaCarAlt size={24} />}
            label="Layanan"
            desc={layanan}
            options={["Rental mobil lepas kunci", "Rental mobil + supir"]}
            onSelect={(val) => setLayanan(val)}
          />
          <Dropdown
            icon1={<FaCarAlt size={24} />}
            label="Unit"
            desc="Pilih Jenis Unit"
            options={["Avanza", "Innova", "Fortuner"]}
          />
          <div className="flex w-[180px] items-center gap-2 rounded-md border bg-white p-2">
            <FaMapMarkerAlt />
            <div>
              <div className="text-sm font-semibold">Alamat / Dari</div>
              <input
                type="text"
                value={alamatDari}
                onChange={(e) => setAlamatDari(e.target.value)}
                className="w-full bg-white text-xs text-black outline-none"
              />
            </div>
          </div>

          <div className="flex w-[180px] items-center gap-2 rounded-md border bg-white p-2">
            <FaMapMarkerAlt />
            <div>
              <div className="text-sm font-semibold">Tujuan / Ke</div>
              <input
                type="text"
                value={tujuanKe}
                onChange={(e) => setTujuanKe(e.target.value)}
                className="w-full bg-white text-xs text-black outline-none"
              />
            </div>
          </div>

          <Button color="maron" onclick={() => setStep(2)}>
            Berikutnya
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-wrap items-center justify-between gap-3 text-black">
          <div className="flex w-[180px] items-center gap-2 rounded-md border bg-white p-2">
            <FaUser />
            <div>
              <div className="text-sm font-semibold">Atas Nama</div>
              <input
                type="text"
                placeholder="Nama Pemesan"
                className="w-full bg-white text-xs text-black outline-none"
              />
            </div>
          </div>

          <div className="flex w-[180px] items-center gap-2 rounded-md border bg-white p-2">
            <FaPhoneAlt />
            <div>
              <div className="text-sm font-semibold">No Telepon</div>
              <input
                type="tel"
                placeholder="Nomor Telepon"
                className="w-full bg-white text-xs text-black outline-none"
              />
            </div>
          </div>

          <div className="flex w-[180px] items-center gap-2 rounded-md border bg-white p-2">
            <MdDateRange />
            <div>
              <div className="text-sm font-semibold">Dari Tanggal</div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="dd/MM/yyyy HH:mm"
                className="w-full bg-white text-xs text-black outline-none"
              />
            </div>
          </div>

          <div className="flex w-[180px] items-center gap-2 rounded-md border bg-white p-2">
            <MdDateRange />
            <div>
              <div className="text-sm font-semibold">Sampai Tanggal</div>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="dd/MM/yyyy HH:mm"
                className="w-full bg-white text-xs text-black outline-none"
              />
            </div>
          </div>

          <Button color="maron">Booking</Button>
        </div>
      )}
    </div>
  );
};
