import { useContext, useState } from "react";
import OtpBox from "../components/OtpBox";
import { Button } from "@mui/material";
import { MyContext } from "../App";
import { postData } from "../utils/api";
import { useNavigate } from "react-router-dom";
import LoadingCircle from "../components/LoadingCircle";

function Verify() {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  function handleOtpChange(value) {
    setOtp(value);
  }

  const userEmail = localStorage.getItem("userEmail");

  function verifyOtp(e) {
    e.preventDefault();
    context.setLoading(true);
    postData("/api/user/verifyEmail", {
      email: userEmail,
      otp: otp,
    }).then((res) => {
      if (res?.error === false) {
        context.openAlertBox("success", res?.message);
        localStorage.removeItem("userEmail");
        navigate("/login");
      } else {
        context.openAlertBox("error", res?.message);
      }
    });
    context.setLoading(false);
  }
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-12">
          <div className="text-center flex items-center justify-center">
            <img
              src="/shield.png"
              alt=""
              className="h-[100px] w-[100px]"
              width={80}
            />
          </div>
          <h3 className="text-center text-[18px] text-black mt-5 px-4">
            Verify OTP
          </h3>
          <p className="text-center my-2">
            OTP send to{" "}
            <span className="text-primary font-bold">{userEmail}</span>
          </p>
          <form onSubmit={verifyOtp}>
            <OtpBox length={6} onChange={handleOtpChange} />
            <div className="flex items-center justify-center mt-5">
              <Button type="submit" className="btn-org btn-lg w-full">
                {context.loading === true ? <LoadingCircle /> : "Verify OTP"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Verify;
