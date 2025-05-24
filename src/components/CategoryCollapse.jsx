import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegMinusSquare } from "react-icons/fa";
import { Button } from "@mui/material";
import { FaRegPlusSquare } from "react-icons/fa";

function CategoryCollapse(props) {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

  const openSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };

  const openInnerSubMenu = (index) => {
    if (innerSubMenuIndex === index) {
      setInnerSubMenuIndex(null);
    } else {
      setInnerSubMenuIndex(index);
    }
  };

  return (
    <>
      <div className="scroll">
        <ul className="w-full">
          {props?.data?.length !== 0 &&
            props?.data?.map((category, index) => {
              return (
                <li className="list-none" key={index}>
                  <Link>
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] hover:!text-[#287c2c] transition !font-semibold">
                      {category?.name}
                      {subMenuIndex === index ? (
                        <FaRegMinusSquare
                          className="ml-auto cursor-pointer"
                          onClick={() => openSubMenu(index)}
                        />
                      ) : (
                        <FaRegPlusSquare
                          className="ml-auto cursor-pointer"
                          onClick={() => openSubMenu(index)}
                        />
                      )}
                    </Button>
                  </Link>
                  {subMenuIndex === index && (
                    <ul className="subMenu w-full pl-4">
                      {category?.children?.length !== 0 &&
                        category?.children?.map((subCategory, index_) => {
                          return (
                            <li className="list-none relative" key={index_}>
                              <Link>
                                <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]  hover:!text-[#287c2c] transition !font-semibold">
                                  {subCategory?.name}
                                  {innerSubMenuIndex === index_ ? (
                                    <FaRegMinusSquare
                                      className="ml-auto cursor-pointer"
                                      onClick={() => openInnerSubMenu(index_)}
                                    />
                                  ) : (
                                    <FaRegPlusSquare
                                      className="ml-auto cursor-pointer"
                                      onClick={() => openInnerSubMenu(index_)}
                                    />
                                  )}
                                </Button>
                              </Link>
                              {innerSubMenuIndex === index_ && (
                                <ul className="innerSubMenu w-full pl-4">
                                  {subCategory?.children?.length !== 0 &&
                                    subCategory?.children?.map(
                                      (thirdLevelCategory, index__) => {
                                        return (
                                          <li
                                            className="list-none relative"
                                            key={index__}
                                          >
                                            <Link
                                              to={"/medicine/health/drinks"}
                                            >
                                              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]  hover:!text-[#287c2c] transition">
                                                {thirdLevelCategory?.name}
                                              </Button>
                                            </Link>
                                          </li>
                                        );
                                      }
                                    )}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default CategoryCollapse;
