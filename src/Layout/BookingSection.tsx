import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import { FaArrowDown, FaCarAlt } from "react-icons/fa";
import { Button } from "@/components/Button";

export const BookingSection = () => {
  return (
    <div className="mx-10 my-6">
      <BookingSectionComp />
    </div>
  );
};

const BookingSectionComp = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center gap-6 rounded-xl bg-[#f8f8f8] p-6 shadow-xl">
      {step === 1 && (
        <>
          <div className="flex flex-wrap justify-center gap-4">
            <Dropdown
              icon1={<FaCarAlt size={30} />}
              icon2={<FaArrowDown size={20} />}
            />
            <Dropdown
              icon1={<FaCarAlt size={30} />}
              icon2={<FaArrowDown size={20} />}
            />
            <Dropdown
              icon1={<FaCarAlt size={30} />}
              icon2={<FaArrowDown size={20} />}
            />
          </div>
          <Button color="maron" onclick={() => setStep(2)}>
            Berikutnya
          </Button>
        </>
      )}

      {step === 2 && (
        <>
          <form className="w-full max-w-md space-y-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full rounded-md border p-3"
            />
            <input
              type="tel"
              placeholder="Nomor HP"
              className="w-full rounded-md border p-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border p-3"
            />
            <Button color="maron">Kirim Pemesanan</Button>
          </form>
        </>
      )}
    </div>
  );
};
