import { Menu, MenuItem, Rating } from "@mui/material";
import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CartItems(props) {
  const [sizeAnchorElement, setSizeAnchorElement] = useState(null);
  const [selectedSize, setSelectedSize] = useState(props.size);
  const openSize = Boolean(sizeAnchorElement);

  const handleClickSize = (event) => {
    setSizeAnchorElement(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorElement(null);
    if (value !== null) {
      setSelectedSize(value);
    }
  };

  const [quantityAnchorElement, setQuantityAnchorElement] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(props.quantity);
  const openQuantity = Boolean(quantityAnchorElement);

  const handleClickQuantity = (event) => {
    setQuantityAnchorElement(event.currentTarget);
  };
  const handleCloseQuantity = (value) => {
    setQuantityAnchorElement(null);
    if (value !== null) {
      setSelectedQuantity(value);
    }
  };

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
        <div className="flex items-center gap-4 mt-2">
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickSize}
            >
              Size: {selectedSize} <GoTriangleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={sizeAnchorElement}
              open={openSize}
              onClose={() => handleCloseSize(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
              <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
              <MenuItem onClick={() => handleCloseSize("L")}>L</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XXL")}>XXL</MenuItem>
            </Menu>
          </div>
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickQuantity}
            >
              Quantity: {selectedQuantity} <GoTriangleDown />
            </span>
            <Menu
              id="quantity-menu"
              anchorEl={quantityAnchorElement}
              open={openQuantity}
              onClose={() => handleCloseQuantity(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseQuantity("1")}>1</MenuItem>
              <MenuItem onClick={() => handleCloseQuantity("2")}>2</MenuItem>
              <MenuItem onClick={() => handleCloseQuantity("3")}>3</MenuItem>
              <MenuItem onClick={() => handleCloseQuantity("4")}>4</MenuItem>
              <MenuItem onClick={() => handleCloseQuantity("5")}>5</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <span className="price text-black font-[600]">&#8377; 180000</span>
          <span className="oldPrice line-through text-[14px] font-[500]">
            &#8377; 199900
          </span>
          <span className="price text-primary font-[600]">55% OFF</span>
        </div>
      </div>
    </div>
  );
}
CartItems.propTypes = {
  size: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItems;
