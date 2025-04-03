import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button } from "@mui/material";

function CartPanel() {
  return (
    <div className="cart-panel-container w-full h-full flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="cart-header py-3 px-5 border-b border-gray-200 bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-800">
          Your Shopping Cart
        </h3>
      </div>

      <div className="scroll w-full flex-grow overflow-y-auto overflow-x-hidden py-3 px-4 bg-white">
        <div className="cartItem w-full flex items-center gap-4 border-b border-gray-200 pb-4 mb-4 hover:bg-gray-50 transition-all duration-200 rounded-md p-2">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md border border-gray-100 shadow-sm">
            <img
              src="https://www.jiomart.com/images/product/original/443023020_white/typographic-print-slim-fit-sweatshirt-model-443023020_white-0-202308112053.jpg?im=Resize=(330,410)"
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[16px] font-medium text-gray-800 hover:text-primary transition-colors">
              <Link to={"/product/45145"}>
                Typographic Print Slim Fit Sweatshirt
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2 text-gray-600">
              <span className="flex items-center">
                Quantity: <span className="font-medium ml-1">2</span>
              </span>
              <span className="text-primary font-bold">$25.00</span>
            </p>
            <RiDeleteBinLine className="absolute link top-[0px] right-[10px] cursor-pointer text-[20px] text-gray-500 hover:text-red-500 transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-b border-gray-200 pb-4 mb-4 hover:bg-gray-50 transition-all duration-200 rounded-md p-2">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md border border-gray-100 shadow-sm">
            <img
              src="https://www.jiomart.com/images/product/original/443023020_white/typographic-print-slim-fit-sweatshirt-model-443023020_white-0-202308112053.jpg?im=Resize=(330,410)"
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[16px] font-medium text-gray-800 hover:text-primary transition-colors">
              <Link to={"/product/45145"}>
                Typographic Print Slim Fit Sweatshirt
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2 text-gray-600">
              <span className="flex items-center">
                Quantity: <span className="font-medium ml-1">2</span>
              </span>
              <span className="text-primary font-bold">$25.00</span>
            </p>
            <RiDeleteBinLine className="absolute link top-[0px] right-[10px] cursor-pointer text-[20px] text-gray-500 hover:text-red-500 transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-b border-gray-200 pb-4 mb-4 hover:bg-gray-50 transition-all duration-200 rounded-md p-2">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md border border-gray-100 shadow-sm">
            <img
              src="https://www.jiomart.com/images/product/original/443023020_white/typographic-print-slim-fit-sweatshirt-model-443023020_white-0-202308112053.jpg?im=Resize=(330,410)"
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[16px] font-medium text-gray-800 hover:text-primary transition-colors">
              <Link to={"/product/45145"}>
                Typographic Print Slim Fit Sweatshirt
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2 text-gray-600">
              <span className="flex items-center">
                Quantity: <span className="font-medium ml-1">2</span>
              </span>
              <span className="text-primary font-bold">$25.00</span>
            </p>
            <RiDeleteBinLine className="absolute link top-[0px] right-[10px] cursor-pointer text-[20px] text-gray-500 hover:text-red-500 transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-b border-gray-200 pb-4 mb-4 hover:bg-gray-50 transition-all duration-200 rounded-md p-2">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md border border-gray-100 shadow-sm">
            <img
              src="https://www.jiomart.com/images/product/original/443023020_white/typographic-print-slim-fit-sweatshirt-model-443023020_white-0-202308112053.jpg?im=Resize=(330,410)"
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[16px] font-medium text-gray-800 hover:text-primary transition-colors">
              <Link to={"/product/45145"}>
                Typographic Print Slim Fit Sweatshirt
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2 text-gray-600">
              <span className="flex items-center">
                Quantity: <span className="font-medium ml-1">2</span>
              </span>
              <span className="text-primary font-bold">$25.00</span>
            </p>
            <RiDeleteBinLine className="absolute link top-[0px] right-[10px] cursor-pointer text-[20px] text-gray-500 hover:text-red-500 transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-b border-gray-200 pb-4 mb-4 hover:bg-gray-50 transition-all duration-200 rounded-md p-2">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md border border-gray-100 shadow-sm">
            <img
              src="https://www.jiomart.com/images/product/original/443023020_white/typographic-print-slim-fit-sweatshirt-model-443023020_white-0-202308112053.jpg?im=Resize=(330,410)"
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[16px] font-medium text-gray-800 hover:text-primary transition-colors">
              <Link to={"/product/45145"}>
                Typographic Print Slim Fit Sweatshirt
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2 text-gray-600">
              <span className="flex items-center">
                Quantity: <span className="font-medium ml-1">2</span>
              </span>
              <span className="text-primary font-bold">$25.00</span>
            </p>
            <RiDeleteBinLine className="absolute link top-[0px] right-[10px] cursor-pointer text-[20px] text-gray-500 hover:text-red-500 transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-b border-gray-200 pb-4 mb-4 hover:bg-gray-50 transition-all duration-200 rounded-md p-2">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md border border-gray-100 shadow-sm">
            <img
              src="https://www.jiomart.com/images/product/original/443023020_white/typographic-print-slim-fit-sweatshirt-model-443023020_white-0-202308112053.jpg?im=Resize=(330,410)"
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[16px] font-medium text-gray-800 hover:text-primary transition-colors">
              <Link to={"/product/45145"}>
                Typographic Print Slim Fit Sweatshirt
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2 text-gray-600">
              <span className="flex items-center">
                Quantity: <span className="font-medium ml-1">2</span>
              </span>
              <span className="text-primary font-bold">$25.00</span>
            </p>
            <RiDeleteBinLine className="absolute link top-[0px] right-[10px] cursor-pointer text-[20px] text-gray-500 hover:text-red-500 transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-4 border-b border-gray-200 pb-4 mb-4 hover:bg-gray-50 transition-all duration-200 rounded-md p-2">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md border border-gray-100 shadow-sm">
            <img
              src="https://www.jiomart.com/images/product/original/443023020_white/typographic-print-slim-fit-sweatshirt-model-443023020_white-0-202308112053.jpg?im=Resize=(330,410)"
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[16px] font-medium text-gray-800 hover:text-primary transition-colors">
              <Link to={"/product/45145"}>
                Typographic Print Slim Fit Sweatshirt
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2 text-gray-600">
              <span className="flex items-center">
                Quantity: <span className="font-medium ml-1">2</span>
              </span>
              <span className="text-primary font-bold">$25.00</span>
            </p>
            <RiDeleteBinLine className="absolute link top-[0px] right-[10px] cursor-pointer text-[20px] text-gray-500 hover:text-red-500 transition-all" />
          </div>
        </div>
      </div>

      <div className="bottomSection w-full bg-white shadow-inner border-t border-gray-200 rounded-b-lg">
        <div className="bottomInfo py-3 px-4 w-full border-b border-gray-200 flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full py-1">
            <span className="text-[14px] font-medium text-gray-600">
              Items (1)
            </span>
            <span className="text-primary font-bold">$80.00</span>
          </div>
          <div className="flex items-center justify-between w-full py-1">
            <span className="text-[14px] font-medium text-gray-600">
              Shipping
            </span>
            <span className="text-primary font-bold">$80.00</span>
          </div>
        </div>

        <div className="bottomInfo py-3 px-4 w-full flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full py-1">
            <span className="text-[14px] font-medium text-gray-600">
              Total (Tax excl.)
            </span>
            <span className="text-primary font-bold">$80.00</span>
          </div>
          <div className="flex items-center justify-between w-full py-1 mb-3">
            <span className="text-[15px] font-semibold text-gray-800">
              Total (Tax incl.)
            </span>
            <span className="text-primary font-bold text-lg">$80.00</span>
          </div>

          <div className="flex items-center justify-between w-full gap-4 mt-2">
            <Link to={"/cart"} className="w-[40%]">
              <Button
                href="/cart"
                className="btn-org btn-lg py-2 rounded-md transition-all duration-200 hover:opacity-90 bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                View Cart
              </Button>
            </Link>
            <Link to={"/checkout"} className="w-[40%]">
              <Button
                href={"/checkout"}
                className="btn-org btn-border btn-lg py-2 rounded-md transition-all duration-200 hover:opacity-90 bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPanel;
