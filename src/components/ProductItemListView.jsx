import { Link } from "react-router-dom";
import "./productItem.css";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MyContext } from "../App";
import { useContext } from "react";

function ProductItemListView() {
  const context = useContext(MyContext);

  return (
    <div className="group">
      <div className="productItem rounded-md overflow-hidden border-2 border-[#e4f0d4] shadow-lg group-hover:scale-105 transition-all duration-500 flex items-center">
        <div className="imageWrapper w-[25%] rounded-md relative group">
          <Link to={"/"}>
            <div className="img h-[225px] relative overflow-hidden ml-2">
              <img
                src="https://www.jiomart.com/images/product/original/rvkac6kwsu/buynewtrend-light-blue-solid-women-denim-jacket-product-images-rvkac6kwsu-0-202311190356.jpg?im=Resize=(600,750)"
                alt=""
              />
              <img
                src="https://www.jiomart.com/images/product/original/rvkac6kwsu/buynewtrend-light-blue-solid-women-denim-jacket-product-images-rvkac6kwsu-3-202311190356.jpg?im=Resize=(600,750)"
                alt=""
                className="w-full h-auto object-cover absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </Link>
          <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-md p-2 text-[12px] font-[500]">
            15% off
          </span>
          <div className="actions absolute right-[-200px] top-[2px] z-50 flex items-center gap-2 flex-col w-[80px] transition-all duration-300 group-hover:right-[0px] group-hover:top-[15px] opacity-0 group-hover:opacity-100">
            <Button
              className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group"
              onClick={() => context.setOpenProductDetailsModal(true)}
            >
              <MdOutlineZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
              <IoGitCompareOutline className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
              <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
            </Button>
          </div>
        </div>
        <div className="info p-3 py-5 px-8 w-[75%]">
          <h5 className="text-[15px] !font-[400]">
            <Link to={"/"} className="link transition-all">
              Iphone
            </Link>
          </h5>
          <h3 className="text-[18px] title mt-3 font-[500] mb-3 text-black">
            <Link to={"/"} className="link transition-all">
              Apple iPhone 15 (128 GB) - Black
            </Link>
          </h3>
          <p className="text-[14px] mb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nulla
            adipisci doloribus minus? Tempore modi eos pariatur sint impedit
            porro eum nam et quo optio!
          </p>
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
          <div className="flex items-center gap-4">
            <span className="oldPrice line-through text-[15px] font-[500]">
              &#8377; 199900
            </span>
            <span className="price text-primary font-[600]">
              &#8377; 180000
            </span>
          </div>
          <div className="mt-3">
            <Button className="btn-org flex gap-2">
              <IoCartOutline className="text-[20px]" />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItemListView;
