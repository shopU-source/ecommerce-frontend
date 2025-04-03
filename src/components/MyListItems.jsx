import { Button, Rating } from "@mui/material";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

function MyListItems() {
  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-black">
      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link to={"/product/5747"} className="group">
          <img
            src="https://www.jiomart.com/images/product/original/443023020_white/typographic-print-slim-fit-sweatshirt-model-443023020_white-0-202308112053.jpg?im=Resize=(600,750)"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>

      <div className="info w-[85%] relative">
        <IoIosClose className="cursor-pointer absolute top-[0px] right-[0px] text-[22px]" />
        <span className="text-[13px]">DNMX</span>
        <h3 className="text-[16px]">
          <Link className="link">Typographic Print Slim Fit Sweatshirt</Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <div className="flex items-center gap-4 mt-2 mb-2">
          <span className="price text-black font-[600]">&#8377; 180000</span>
          <span className="oldPrice line-through text-[14px] font-[500]">
            &#8377; 199900
          </span>
          <span className="price text-primary font-[600]">55% OFF</span>
        </div>
        <Button className="btn-org btn-sm">Add to cart</Button>
      </div>
    </div>
  );
}

export default MyListItems;
