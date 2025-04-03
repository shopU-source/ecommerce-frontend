import { Link } from "react-router-dom";
import Search from "./SearchBar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./NavBar";
import { useContext, useState } from "react";
import { MyContext } from "../App";
import { Button } from "@mui/material";
import { FaRegCircleUser } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaRegUserCircle } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const context = useContext(MyContext);

  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-gray-300 border-b-[1px] border-t-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[40%]">
              <p className="text-[12px] font-[500]">
                Get up to 30% off every category order, limited time only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to={" /help-center"}
                    className="text-[13px] link font-[500] transition"
                  >
                    Help center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to={"/order-tracking"}
                    className="text-[13px] link font-[500] transition"
                  >
                    Order tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-b-[1px] border-gray-300">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img
                className="h-[80px] w-[170px]"
                src={"/logoHeader.png"}
                alt="Image"
              />
            </Link>
          </div>
          <div className="col2 w-[40%]">
            <Search />
          </div>
          <div className="col3 w-[35%] flex items-center pl-7">
            <ul className="flex items-center gap-3 justify-end w-full">
              {context.isLogin === false ? (
                <li className="list-none mr-6">
                  <Link
                    to={"/login"}
                    className="link transition text-[15px] font-[500]"
                  >
                    Login
                  </Link>{" "}
                  &nbsp; | &nbsp;{" "}
                  <Link
                    className="link transition text-[15px] font-[500]"
                    to={"/register"}
                  >
                    Register
                  </Link>
                </li>
              ) : (
                <>
                  <Button
                    className="text-black link myAccountWrap flex items-center gap-3 cursor-pointer"
                    onClick={handleClick}
                  >
                    <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full">
                      <FaRegCircleUser className="text-[30px] text-[#000]" />
                    </Button>
                    <div className="info flex flex-col">
                      <h4 className="text-[14px] font-[500] mb-0 capitalize text-left justify-start text-black leading-3">
                        Ayush Kumar
                      </h4>
                      <span className="text-[13px] lowercase text-left justify-start font-[400] text-black">
                        ayushkumar9315983@gmail.com
                      </span>
                    </div>
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "left", vertical: "top" }}
                    anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                  >
                    <Link to={"/myAccount"} className="link">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-4 !py-2"
                      >
                        <FaRegUserCircle className="text-[18px]" />{" "}
                        <span className="text-[15px]">My Account</span>
                      </MenuItem>
                    </Link>
                    <Link to={"/myOrders"} className="link">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-4 !py-2"
                      >
                        <IoBagCheckOutline className="text-[18px]" />{" "}
                        <span className="text-[15px]">Orders</span>
                      </MenuItem>
                    </Link>
                    <Link to={"/myList"} className="link">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-4 !py-2"
                      >
                        <FaRegHeart className="text-[18px]" />{" "}
                        <span className="text-[15px]">My List</span>
                      </MenuItem>
                    </Link>
                    <Link to={"/logout"} className="link">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-4 !py-2"
                      >
                        <LuLogOut className="text-[18px]" />{" "}
                        <span className="text-[15px]">Logout</span>
                      </MenuItem>
                    </Link>
                  </Menu>
                </>
              )}

              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="compare">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoGitCompareOutline />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="whislist">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton
                    aria-label="cart"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
