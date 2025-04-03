import { Button, Rating } from "@mui/material";
import { useState } from "react";
import QuantityBox from "./QuantityBox";
import { IoCartOutline, IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";

function ProductDetailsComponent() {
  const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
      <h1 className="text-[24px] font-[600] mb-2">
        Keitra Women Maroon Printed Viscose Rayon Kurta Pant And Dupatta Set|
        Kurta Set Women
      </h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-600 text-[13px]">
          Brand:{" "}
          <span className="font-[500] text-black opacity-75">KEITRA</span>{" "}
        </span>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <span className="text-[13px] cursor-pointer">Review (5)</span>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <span className="oldPrice line-through text-[20px] font-[500]">
          &#8377; 199900
        </span>
        <span className="price text-primary font-[600] text-[20px]">
          &#8377; 180000
        </span>
      </div>
      <p className="mt-3 pr-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore et
        eaque blanditiis incidunt aliquam voluptatum, ducimus impedit vitae
        error repudiandae. Nemo, reprehenderit optio provident at modi fugit
        magnam consectetur architecto.
      </p>
      <div className="mt-3 mb-5">
        <span className="text-[14px]">
          Available in stocks:{" "}
          <span className="text-primary ml-2 font-bold">147 items</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[16px]">Size: </span>
        <div className="flex items-center gap-1 actions">
          <Button
            className={`${
              productActionIndex === 0 ? "!bg-primary !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(0)}
          >
            S
          </Button>
          <Button
            className={`${
              productActionIndex === 1 ? "!bg-primary !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(1)}
          >
            M
          </Button>
          <Button
            className={`${
              productActionIndex === 2 ? "!bg-primary !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(2)}
          >
            L
          </Button>
          <Button
            className={`${
              productActionIndex === 3 ? "!bg-primary !text-white" : ""
            }`}
            onClick={() => setProductActionIndex(3)}
          >
            XL
          </Button>
        </div>
      </div>
      <p className="text-[14px] mt-4 mb-2 text-black">
        Free Shipping (Est. Delivery Time 1-2 Days)
      </p>
      <div className="flex items-center gap-4 py-4">
        <div className="quantityBoxWrapper w-[70px]">
          <QuantityBox />
        </div>
        <Button className="btn-org flex gap-2">
          <IoCartOutline className="text-[20px]" />
          Add to cart
        </Button>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
          <FaRegHeart className="text-[18px]" />
          Add to wishlist
        </span>
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
          <IoGitCompareOutline className="text-[18px]" />
          Add to compare
        </span>
      </div>
    </>
  );
}

export default ProductDetailsComponent;
