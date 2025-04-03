import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import SideBar from "../components/SideBar";
import ProductItem from "../components/ProductItem";
import { Button } from "@mui/material";
import { IoGrid } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import ProductItemListView from "../components/ProductItemListView";

function ProductListing() {
  const [itemView, setItemView] = useState("grid");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="py-5 bg-[#e4f0d4] pb-0">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Medicine
          </Link>
        </Breadcrumbs>
      </div>
      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full">
            <SideBar />
          </div>
          <div className="rightContent w-[80%] py-3">
            <div className="bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center itemViewActions">
                <Button
                  onClick={() => setItemView("list")}
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${
                    itemView === "list" && "active"
                  }`}
                >
                  <RiMenuFill className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <Button
                  onClick={() => setItemView("grid")}
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${
                    itemView === "grid" && "active"
                  }`}
                >
                  <IoGrid className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  There are 27 products
                </span>
              </div>
              <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  Sort By
                </span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-white text-[12px] font-[500] !text-black pl-3 !capitalize !border-3 !border-black"
                >
                  Sales high to low
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    className="!text-[13px] !text-black !capitalize"
                    onClick={handleClose}
                  >
                    Sales high to low
                  </MenuItem>
                  <MenuItem
                    className="!text-[13px] !text-black !capitalize"
                    onClick={handleClose}
                  >
                    Relevance
                  </MenuItem>
                  <MenuItem
                    className="!text-[13px] !text-black !capitalize"
                    onClick={handleClose}
                  >
                    Name A to Z
                  </MenuItem>
                  <MenuItem
                    className="!text-[13px] !text-black !capitalize"
                    onClick={handleClose}
                  >
                    Name Z to A
                  </MenuItem>
                  <MenuItem
                    className="!text-[13px] !text-black !capitalize"
                    onClick={handleClose}
                  >
                    Price High to Low
                  </MenuItem>
                  <MenuItem
                    className="!text-[13px] !text-black !capitalize"
                    onClick={handleClose}
                  >
                    Price Low to High
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <div
              className={`grid ${
                itemView === "grid"
                  ? "grid grid-cols-4 md:grid-cols-4 gap-4"
                  : "grid-cols-1 md:grid-cols-1"
              } gap-4`}
            >
              {itemView === "grid" ? (
                <>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </>
              ) : (
                <>
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                </>
              )}
            </div>
            <div className="flex items-center justify-center mt-10">
              <Pagination count={10} showFirstButton showLastButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductListing;
