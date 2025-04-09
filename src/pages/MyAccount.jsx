import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import AccountSideBar from "../components/AccountSideBar";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";
import { editData, postData } from "../utils/api";
import LoadingCircle from "../components/LoadingCircle";
import { Collapse } from "react-collapse";

function MyAccount() {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [loading2, setLoading2] = useState(false);
  const [isChangePasswordFormShow, setIsChangePasswordFormShow] =
    useState(false);

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token === null) {
      navigate("/");
    }
  }, [context.isLogin]);

  function onChangeInput(e) {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
    setChangePassword(() => {
      return {
        ...changePassword,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      setUserId(context?.userData?._id);
      setFormFields({
        name: context?.userData?.name,
        email: context?.userData?.email,
        phone: context?.userData?.phone,
      });

      setChangePassword({
        email: context?.userData?.email
      });
    }
  }, [context?.userData]);

  console.log(context?.userData?.name);
  console.log(context?.userData?.email);

  const validateValue = Object.values(formFields).every((element) => element);
  const validateValue2 = Object.values(formFields).every((element) => element);

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true);

    if (formFields.name === "") {
      context.openAlertBox("error", "Please enter the Full name");
      context.setLoading(false);
    }
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter email address");
      context.setLoading(false);
    }
    if (formFields.phone === "") {
      context.openAlertBox("error", "Please enter the phone number");
      context.setLoading(false);
    }
    editData(`/api/user/update/${userId}`, formFields, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);

      if (res?.error !== true) {
        context.setLoading(false);
        context.openAlertBox("success", res?.data?.message);
      } else {
        context.openAlertBox("error", res?.data?.message);
      }
    });
  }

  function handleSubmitChangePassword(e) {
    e.preventDefault();
    setLoading2(true);

    if (changePassword.oldPassword === "") {
      context.openAlertBox("error", "Please enter the old password");
    }
    if (changePassword.newPassword === "") {
      context.openAlertBox("error", "Please enter new password");
    }
    if (changePassword.confirmPassword === "") {
      context.openAlertBox("error", "Please enter the confirm password");
    }

    if (changePassword.confirmPassword !== changePassword.newPassword) {
      context.openAlertBox(
        "error",
        "New password and Confirm password is not same"
      );
    }
    postData(`/api/user/resetPassword`, changePassword, {
      withCredentials: true,
    }).then((res) => {
      console.log(res)
      if (res?.error !== true) {
        setLoading2(false);
        context.openAlertBox("success", res?.message);
      } else {
        setLoading2(false)
        context.openAlertBox("error", res?.message);
      }
    });
  }

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>
        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md mb-5">
            <div className="flex items-center pb-3">
              <h2 className="pb-0">My Profile</h2>
              <Button className="!ml-auto !text-primary" onClick={() => setIsChangePasswordFormShow(!isChangePasswordFormShow)}>Change Password</Button>
            </div>
            <hr />
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    type="text"
                    name="name"
                    value={formFields.name}
                    disabled={context.loading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    type="email"
                    name="email"
                    value={formFields.email}
                    disabled={true}
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 mt-4">
                <div className="w-[50%]">
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    type="number"
                    name="phone"
                    value={formFields.phone}
                    disabled={context.loading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <br />
              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  className="btn-org btn-lg w-full"
                  disabled={!validateValue}
                >
                  {context.loading === true ? (
                    <LoadingCircle />
                  ) : (
                    "Update profile"
                  )}
                </Button>
              </div>
            </form>
          </div>
          <Collapse isOpened={isChangePasswordFormShow}>
            <div className="card bg-white p-5 shadow-md rounded-md">
              <div className="flex items-center pb-3">
                <h2 className="pb-0">Change Password</h2>
              </div>
              <hr />
              <form className="mt-8" onSubmit={handleSubmitChangePassword}>
                <div className="flex items-center gap-5">
                  <div className="w-[50%]">
                    <TextField
                      label="Old Password"
                      variant="outlined"
                      size="small"
                      className="w-full"
                      type="text"
                      name="oldPassword"
                      value={changePassword.oldPassword}
                      onChange={onChangeInput}
                    />
                  </div>
                  <div className="w-[50%]">
                    <TextField
                      label="New Password"
                      variant="outlined"
                      size="small"
                      className="w-full"
                      type="text"
                      name="newPassword"
                      value={changePassword.newPassword}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-5 mt-4">
                  <div className="w-[50%]">
                    <TextField
                      label="Confirm Password"
                      variant="outlined"
                      size="small"
                      className="w-full"
                      type="text"
                      name="confirmPassword"
                      value={changePassword.confirmPassword}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <br />
                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    className="btn-org btn-lg w-full"
                    disabled={!validateValue2}
                  >
                    {loading2 === true ? <LoadingCircle /> : "Change Password"}
                  </Button>
                </div>
              </form>
            </div>
          </Collapse>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
