import { Button } from "@mui/material";
import { RiMenu2Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoRocketOutline } from "react-icons/io5";
import CategoryPanel from "./CategoryPanel";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
import "./navBar.css";

function Navigation() {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const openCategoryPanel = () => {
    setIsOpenCategoryPanel(true);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchDataFromApi("/api/category").then((res) => {
        if (res?.error === false) {
          setCategoryData(res?.data);
        }
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

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
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#287c2c]">
                    Home
                  </Button>
                </Link>
              </li>
              {categoryData?.length !== 0 &&
                categoryData?.map((category, index) => {
                  return (
                    <li className="list-none relative" key={index}>
                      <Link
                        to={`/${category.name}`}
                        className="link transition text-[14px] font-[500]"
                      >
                        <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#287c2c]">
                          {category?.name}
                        </Button>
                      </Link>
                      {category?.children?.length !== 0 && (
                        <div className="submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            {category?.children?.map((subCategory, index_) => {
                              return (
                                <div className="submenu-item" key={index_}>
                                  <Link to={"/"} className="w-full">
                                    <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start">
                                      {subCategory?.name}
                                    </Button>
                                    {subCategory?.children?.length !== 0 && (
                                      <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                        <ul>
                                          {subCategory?.children?.map(
                                            (thirdLevelCategory, index__) => {
                                              return (
                                                <li
                                                  className="list-none w-full"
                                                  key={index__}
                                                >
                                                  <Link
                                                    to={"/product"}
                                                    className="w-full"
                                                  >
                                                    <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                      {thirdLevelCategory?.name}
                                                    </Button>
                                                  </Link>
                                                </li>
                                              );
                                            }
                                          )}
                                        </ul>
                                      </div>
                                    )}
                                  </Link>
                                </div>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
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
      {categoryData?.length !== 0 && (
        <CategoryPanel
          isOpenCategoryPanel={isOpenCategoryPanel}
          setIsOpenCategoryPanel={setIsOpenCategoryPanel}
          data={categoryData}
        />
      )}
    </div>
  );
}

export default Navigation;
