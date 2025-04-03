import { Button } from "@mui/material";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineCloudUpload } from "react-icons/md";
import { NavLink } from "react-router-dom";

function AccountSideBar() {
  return (
    <>
      <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
        <div className="w-full p-5 flex items-center justify-center flex-col">
          <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
            <img
              src="/Ayush Photo 2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
              <input
                type="file"
                className="absolute top-0 left-0 w-full h-full opacity-0"
              />
              <MdOutlineCloudUpload className="text-[#fff] text-[25px]" />
            </div>
          </div>
          <h3>Ayush Kumar</h3>
          <h6 className="text-[13px] font-[500]">
            ayushkumar9315983@gmail.com
          </h6>
        </div>
        <ul className="list-none pb-5 myAccountTabs">
          <li className="w-full">
            <NavLink to={"/myAccount"} exact={true} activeClassName="isActive">
              <Button className="flex items-center !py-2 !px-5 !text-left !gap-4 w-full !justify-start !text-black !rounded-none !capitalize">
                <FaRegUserCircle className="text-[18px]" />
                My Profile
              </Button>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to={"/myList"} exact={true} activeClassName="isActive">
              <Button className="flex items-center !py-2 !px-5 !text-left !gap-4 w-full !justify-start !text-black !rounded-none !capitalize">
                <FaRegHeart className="text-[18px]" />
                My List
              </Button>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to={"/myOrders"} exact={true} activeClassName="isActive">
              <Button className="flex items-center !py-2 !px-5 !text-left !gap-4 w-full !justify-start !text-black !rounded-none !capitalize">
                <IoBagCheckOutline className="text-[18px]" />
                My orders
              </Button>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to={"/logout"} exact={true} activeClassName="isActive">
              <Button className="flex items-center !py-2 !px-5 !text-left !gap-4 w-full !justify-start !text-black !rounded-none !capitalize">
                <LuLogOut className="text-[18px]" />
                Logout
              </Button>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AccountSideBar;
