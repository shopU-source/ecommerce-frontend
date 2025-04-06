import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import AccountSideBar from "../components/AccountSideBar";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";
import { editData } from "../utils/api";
import LoadingCircle from "../components/LoadingCircle";

function MyAccount() {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: "",
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
  }

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      setUserId(context?.userData?._id);
      setFormFields({


        name: context?.userData?.name,
        email: context?.userData?.email,
        phone: context?.userData?.phone
      })
    }
  }, [context?.userData])

  console.log(context?.userData?.name);

  const validateValue = Object.values(formFields).every((element) => element);

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true);

    if (formFields.name === "") {
      context.openAlertBox("error", "Please enter the Full name");
    }
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter email address");
    }
    if (formFields.phone === "") {
      context.openAlertBox("error", "Please enter the phone number");
    }
    editData(`/api/user/update/${userId}`, formFields, { withCredentials: true }).then((res) => {
      console.log(res);

      if (res?.error !== true) {
        context.setLoading(false);
        context.openAlertBox("success", res?.data?.message);
      }
      else {
        context.openAlertBox("error", res?.data?.message)
      }
    })

  }

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSideBar />
        </div>
        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="pb-3">My Profile</h2>
            <hr />
            <form className="mt-5" onSubmit={handleSubmit}>
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
                <Button type="submit" className="btn-org btn-lg w-full" disabled={!validateValue}>
                  {
                    context.loading === true ? <LoadingCircle /> : "Update profile"
                  }
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
