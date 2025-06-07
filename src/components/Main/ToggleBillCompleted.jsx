import { useState } from "react";

export const ToggleBillCompleted = () => {
  const [completBill, setCompletBill] = useState(true);
  console.log(completBill);
  return (
    <div className="w-full h-24 flex justify-center items-center gap-6 select-none">
      <input
        id="toogleBillCompleted"
        onClick={() => {
          setCompletBill(!completBill);
        }}
        type="checkbox"
        defaultChecked
        className="toggle"
      />
      <label
        htmlFor="toogleBillCompleted"
        className="text-3xl font-bold cursor-pointer"
      >
        {completBill ? "Medio Boleto" : "Boleto completo"}
      </label>
    </div>
  );
};
