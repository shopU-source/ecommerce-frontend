import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../App";

function Login() {
  const context = useContext(MyContext);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  function onChangeInput(e) {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  }

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-12">
          <h3 className="text-center text-[18px] text-black">
            Login to your account
          </h3>
          <form className="w-full mt-5 mb-3">
            <div className="form-group w-full mb-5">
              <TextField
                id="outlined-basic"
                label="Email id"
                variant="outlined"
                required
                type="email"
                className="w-full"
                name="name"
                onChange={onChangeInput}
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                required
                type={isShowPassword ? "text" : "password"}
                className="w-full"
                name="password"
                onChange={onChangeInput}
              />
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
            </div>
            <Link
              to={"/verify"}
              className="link cursor-pointer text-[14px] font-[600]"
            >
              Forgot Password?
            </Link>
            <div className="flex items-center w-full mt-3 mb-3">
              <Button className="btn-org w-full btn-lg">Login</Button>
            </div>
            <p className="text-center mt-4">
              Not Registered?{" "}
              <Link
                className="link text-[14px] font-[600] text-primary"
                to={"/register"}
              >
                Register
              </Link>
            </p>
            <p className="text-center font-[500] mb-4 mt-3">
              Continue with social account
            </p>
            <Button className="flex gap-3 !capitalize w-full !bg-[#f1f1f1] btn-lg !text-black">
              <FcGoogle className="text-[20px]" />
              Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
