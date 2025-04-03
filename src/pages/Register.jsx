import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { postData } from "../utils/api.js";
import { MyContext } from "../App.jsx";
import { useNavigate } from "react-router-dom";
import LoadingCircle from "../components/LoadingCircle.jsx";

function Register() {
  const context = useContext(MyContext);
  const navigate = useNavigate();

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

  const validateValue = Object.values(formFields).every((element) => element);

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true);
    if (formFields.name === "") {
      context.openAlertBox("error", "Please add Full Name");
    }
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter email");
    }
    if (formFields.password === "") {
      context.openAlertBox("error", "Please enter password");
    }
    postData("/api/user/register", formFields).then((res) => {
      context.setLoading(false);
      setFormFields({
        name: "",
        email: "",
        password: "",
      });
      if (res.error === true) {
        context.openAlertBox("error", res.message);
      } else {
        localStorage.setItem("userEmail", formFields.email);
        context.openAlertBox("success", res.message);
        navigate("/verify");
      }
    });
  }

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-12">
          <h3 className="text-center text-[18px] text-black">
            Register with a new account
          </h3>
          <form className="w-full mt-5 mb-3" onSubmit={handleSubmit}>
            <div className="form-group w-full mb-5">
              <TextField
                id="name"
                name="name"
                label="Full Name"
                value={formFields.name}
                disabled={context.loading === true ? true : false}
                variant="outlined"
                type="text"
                className="w-full"
                onChange={onChangeInput}
              />
            </div>
            <div className="form-group w-full mb-5">
              <TextField
                id="email"
                name="email"
                label="Email id"
                value={formFields.email}
                disabled={context.loading === true ? true : false}
                variant="outlined"
                required
                type="email"
                className="w-full"
                onChange={onChangeInput}
              />
            </div>
            {/* <div className="form-group w-full mb-5">
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                required
                type="number"
                className="w-full"
              />
            </div> */}
            <div className="form-group w-full mb-5 relative">
              <TextField
                id="password"
                label="Password"
                name="password"
                value={formFields.password}
                disabled={context.loading === true ? true : false}
                variant="outlined"
                required
                type={isShowPassword ? "text" : "password"}
                className="w-full"
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
            <div className="flex items-center w-full mt-3 mb-3">
              <Button
                type="submit"
                disabled={!validateValue}
                className={`btn-org w-full btn-lg flex gap-5`}
              >
                {context.loading === true ? <LoadingCircle /> : "Register"}
              </Button>
            </div>
            {/*   */}
            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link
                className="link text-[14px] font-[600] text-primary"
                to={"/login"}
              >
                Login
              </Link>
            </p>
            <p className="text-center font-[500] mb-4 mt-3">
              Continue with social account
            </p>
            <Button className="flex gap-3 !capitalize w-full !bg-[#f1f1f1] btn-lg !text-black">
              <FcGoogle className="text-[20px]" />
              Register with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
