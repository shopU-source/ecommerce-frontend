import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../App";
import { postData } from "../utils/api";
import { LoaderIcon } from "react-hot-toast";

function Login() {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
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

  const validateValue = Object.values(formFields).every((element) => element);

  function forgotPassword() {
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter email");
    }
    else {
      localStorage.setItem("userEmail", formFields.email)
      context.openAlertBox("success", `OTP send to ${localStorage.getItem("userEmail")}`);
      localStorage.setItem("actionType", "forgot-password")
      postData("/api/user/forgotPassword", {
        email: formFields.email
      }).then((res) => {
        if (res?.error === false) {
          navigate("/verify");
          context.openAlertBox("success", res?.message);
        }
        else {
          context.openAlertBox("error", res?.message)
        }
      })
    }

  }

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true);
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter email");
    }
    if (formFields.password === "") {
      context.openAlertBox("error", "Please enter password");
    }
    postData("/api/user/login", formFields, { withCredentials: true }).then(
      (res) => {
        context.setLoading(false);
        setFormFields({
          email: "",
          password: "",
        });
        if (res.error === true) {
          context.openAlertBox("error", res.message);
        } else {
          console.log(res);
          localStorage.setItem("userEmail", formFields.email);
          localStorage.setItem("accessToken", res?.data?.accessToken);
          localStorage.setItem("refreshToken", res?.data?.refreshToken);
          context.openAlertBox("success", res.message);
          navigate("/");
          context.setIsLogin(true);
        }
      }
    );
  }

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-12">
          <h3 className="text-center text-[18px] text-black">
            Login to your account
          </h3>
          <form className="w-full mt-5 mb-3" onSubmit={handleSubmit}>
            <div className="form-group w-full mb-5">
              <TextField
                id="email"
                label="Email id"
                variant="outlined"
                required
                value={formFields.email}
                disabled={context.loading === true ? true : false}
                type="email"
                className="w-full"
                name="email"
                onChange={onChangeInput}
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                value={formFields.password}
                disabled={context.loading === true ? true : false}
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
            <a
              className="link cursor-pointer text-[14px] font-[600]"
              onClick={forgotPassword}
              type="submit"
            >
              Forgot Password?
            </a>
            <div className="flex items-center w-full mt-3 mb-3">
              <Button
                className="btn-org w-full btn-lg"
                type="submit"
                disabled={!validateValue}
              >
                {context.loading === true ? <LoaderIcon /> : "Login"}
              </Button>
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
