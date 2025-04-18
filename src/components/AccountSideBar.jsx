import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineCloudUpload } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import LoadingCircle from "./LoadingCircle";
import { fetchDataFromApi, uploadImage } from "../utils/api";
import { LuMapPinHouse } from "react-icons/lu";


function AccountSideBar() {
  const context = useContext(MyContext);
  const navigate = useNavigate()
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const userAvatar = [];
    if (
      context?.userData?.avatar !== 0 &&
      context?.userData?.avatar !== undefined
    ) {
      userAvatar.push(context?.userData?.avatar);
      setPreviews(userAvatar);
    }
  }, [context?.userData]);

  let selectedImage = [];

  const formdata = new FormData();

  function logout() {
      setAnchorEl(null);
      fetchDataFromApi(
        `/api/user/logout?accessToken=${localStorage.getItem("accessToken")}`,
        { withCredentials: true }
      ).then((res) => {
        console.log(res);
        if (res?.error === false) {
          context.setIsLogin(false);
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("userEmail");
          navigate("/");
        }
      });
    }

  async function onChangeFile(e, apiEndPoint) {
    try {
      setPreviews([]);
      const files = e.target.files;
      setUploading(true);
      console.log(files);
      for (let i = 0; i < files.length; i++) {
        if (
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/jpg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/webp")
        ) {
          const file = files[i];
          selectedImage.push(file);
          formdata.append(`avatar`, file);
          uploadImage("/api/user/userAvatar", formdata).then((res) => {
            setUploading(false);
            let avatar = [];
            avatar.push(res?.data?.avatar);
            setPreviews(avatar);
            console.log(res);
          });
        } else {
          context.openAlertBox("error", "Upload correct format file");
          setUploading(false);
          return false;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
        <div className="w-full p-5 flex items-center justify-center flex-col">
          <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200">
            {uploading === true ? (
              <LoadingCircle />
            ) : previews?.length !== 0 ? (
              previews?.map((img, index) => {
                return (
                  <img
                    src={img}
                    key={index}
                    className="w-full h-full object-cover"
                  />
                );
              })
            ) : (
              <img src={"/user.png"} alt="" />
            )}

            <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
              <input
                type="file"
                className="absolute top-0 left-0 w-full h-full opacity-0"
                onChange={(e) => {
                  onChangeFile(e, "/api/user/userAvatar");
                }}
                name="avatar"
              />
              <MdOutlineCloudUpload className="text-[#fff] text-[25px]" />
            </div>
          </div>
          <h3>{context?.userData?.name}</h3>
          <h6 className="text-[13px] font-[500]">{context?.userData?.email}</h6>
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
            <NavLink to={"/myAddress"} exact={true} activeClassName="isActive">
              <Button className="flex items-center !py-2 !px-5 !text-left !gap-4 w-full !justify-start !text-black !rounded-none !capitalize">
                <LuMapPinHouse className="text-[18px]" />
                Address
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
              <Button className="flex items-center !py-2 !px-5 !text-left !gap-4 w-full !justify-start !text-black !rounded-none !capitalize" onClick={logout}>
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
