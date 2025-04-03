import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import { MyContext } from "../App";

function ForgotPassword() {
  const context = useContext(MyContext);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-12">
          <div className="text-center flex items-center justify-center mb-5">
            <img
              src="/forgot.png"
              alt=""
              className="h-[100px] w-[100px]"
              width={80}
            />
          </div>
          <h3 className="text-center text-[18px] text-black">
            Forgot Password
          </h3>
          <form className="w-full mt-5 mb-3">
            <div className="form-group w-full mb-5 relative">
              <TextField
                id="outlined-basic"
                label="New Password"
                variant="outlined"
                required
                type={isShowPassword ? "text" : "password"}
                className="w-full"
                name="name"
              />
            </div>
            <Button
              className="!absolute top-[10px] right-[10px] z-50 !h-[35px] !w-[35px] !min-w-[35px] !rounded-full mt-4"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword === true ? (
                <IoMdEye className="!text-black text-[20px] !opacity-75" />
              ) : (
                <IoMdEyeOff className="!text-black text-[20px] !opacity-75" />
              )}
            </Button>
            <div className="form-group w-full mb-5 relative">
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                required
                type={isShowPassword2 ? "text" : "password"}
                className="w-full"
                name="password"
              />
              <Button
                className="!absolute top-[10px] right-[10px] z-50 !h-[35px] !w-[35px] !min-w-[35px] !rounded-full mt-4"
                onClick={() => setIsShowPassword2(!isShowPassword2)}
              >
                {isShowPassword2 === true ? (
                  <IoMdEye className="!text-black text-[20px] !opacity-75" />
                ) : (
                  <IoMdEyeOff className="!text-black text-[20px] !opacity-75" />
                )}
              </Button>
            </div>
            <div className="flex items-center w-full mt-3 mb-3">
              <Button
                className="btn-org w-full btn-lg"
                onClick={() =>
                  context.openAlertBox("success", "Password Changed")
                }
              >
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
