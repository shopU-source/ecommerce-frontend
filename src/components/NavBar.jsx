import { Button } from "@mui/material";
import { RiMenu2Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoRocketOutline } from "react-icons/io5";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";
import "./navBar.css";

function Navigation() {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCategoryPanel(true);
  };

  return (
    <div className="border-b-[2px]">
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-10">
          <div className="col1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop by categories
              <FaChevronDown className="ml-auto font-thin" />
            </Button>
          </div>
          <div className="col2 w-[65%]">
            <ul className="flex items-center gap-8 nav">
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#287c2c]">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to={"/medicine"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#287c2c]">
                    Medicine
                  </Button>
                </Link>
                <div className="submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-none relative">
                <Link
                  to={"/grocery"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#287c2c]">
                    Grocery
                  </Button>
                </Link>

                <div className="submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-none relative">
                <Link
                  to={"/electronics"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#287c2c]">
                    Electronics
                  </Button>
                </Link>
                <div className="submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-none relative">
                <Link
                  to={"/fashion"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#287c2c]">
                    Fashion
                  </Button>
                </Link>
                <div className="submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-none relative">
                <Link
                  to={"/beauty"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#287c2c]">
                    Beauty
                  </Button>
                </Link>
                <div className="submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-none relative">
                <Link
                  to={"/wellness"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#287c2c]">
                    Wellness
                  </Button>
                </Link>
                <div className="submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-none relative">
                <Link
                  to={"/jewellery"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0, 0, 0, 0.8)] hover:!text-[#287c2c]">
                    Jewellery
                  </Button>
                </Link>
                <div className="submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/"} className="w-full">
                      <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                        Dairy
                      </Button>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col3 w-[15%]">
            <p className="font-[500] text-[18px] flex items-center gap-3 mb-0 mt-0">
              <IoRocketOutline />
              Free Delivery
            </p>
          </div>
        </div>
      </nav>
      <CategoryPanel
        isOpenCategoryPanel={isOpenCategoryPanel}
        setIsOpenCategoryPanel={setIsOpenCategoryPanel}
      />
    </div>
  );
}

export default Navigation;
