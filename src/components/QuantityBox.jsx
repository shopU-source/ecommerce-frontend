import { Button } from "@mui/material";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

function QuantityBox() {
  const [quantityValue, setQuantityValue] = useState(1);

  function increaseQuantity() {
    setQuantityValue(quantityValue + 1);
  }

  function decreaseQuantity() {
    if (quantityValue > 1) {
      setQuantityValue(quantityValue - 1);
    }
  }

  return (
    <div className="quantityBox flex items-center relative">
      <input
        type="number"
        className="w-full h-[45px] p-2 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md pl-5"
        value={quantityValue}
        readOnly
      />
      <div className="flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50">
        <Button
          className="!min-w-[30px] !w-[20px] !h-[20px] !text-black rounded-none"
          onClick={increaseQuantity}
        >
          <FaAngleUp />
        </Button>
        <Button
          className="!min-w-[30px] !w-[20px] !h-[20px] !text-black rounded-none"
          onClick={decreaseQuantity}
        >
          <FaAngleDown />
        </Button>
      </div>
    </div>
  );
}

export default QuantityBox;
