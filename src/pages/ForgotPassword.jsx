import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";
import LoadingCircle from "../components/LoadingCircle";
import { postData } from "../utils/api";

function ForgotPassword() {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  const [formFields, setFormFields] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: "",
  });

  const validateValue = Object.values(formFields).every((element) => element);

  function onChangeInput(e) {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true);
    if (formFields.newPassword === "") {
      context.openAlertBox("error", "Please enter new password");
      context.setLoading(false);
      return false;
    }
    if (formFields.confirmPassword === "") {
      context.openAlertBox("error", "Please enter confirm password");
      context.setLoading(false);
      return false;
    }
    if (formFields.newPassword !== formFields.confirmPassword) {
      context.openAlertBox(
        "error",
        "Password and Confirm Password should be same"
      );
      context.setLoading(false);
      return false;
    }

    postData(`/api/user/resetPassword`, formFields).then((res) => {
      console.log(res);
      if (res?.error === false) {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("actionType");
        navigate("/login");
        context.setLoading(false);
        context.openAlertBox("success", res?.message)
      }
      else {
        context.openAlertBox("error", res?.message)
      }
    });
  }

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
          <form className="w-full mt-5 mb-3" onSubmit={handleSubmit}>
            <div className="form-group w-full mb-5 relative">
              <TextField
                id="newPassword"
                label="New Password"
                variant="outlined"
                required
                value={formFields.newPassword}
                disabled={context.loading === true ? true : false}
                type={isShowPassword ? "text" : "password"}
                className="w-full"
                name="newPassword"
                onChange={onChangeInput}
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
                value={formFields.confirmPassword}
                variant="outlined"
                required
                type={isShowPassword2 ? "text" : "password"}
                className="w-full"
                name="confirmPassword"
                disabled={context.loading === true ? true : false}
                onChange={onChangeInput}
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
                type="submit"
                disabled={!validateValue}
                className={`btn-org w-full btn-lg flex gap-5`}
              >
                {context.loading === true ? (
                  <LoadingCircle />
                ) : (
                  "Change Password"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
