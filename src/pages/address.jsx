import { Button, MenuItem, Radio, Select, TextField } from "@mui/material";
import AccountSideBar from "../components/AccountSideBar";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import LoadingCircle from "../components/LoadingCircle";
import { deleteData, fetchDataFromApi, postData } from "../utils/api";
import { FaRegTrashAlt } from "react-icons/fa";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Address() {
  const context = useContext(MyContext);
  const [address, setAddress] = useState([]);
  const [status, setStatus] = useState("");
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [formFields, setFormFields] = useState({
    addressLine: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
    status: "",
  });

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      fetchDataFromApi(
        `/api/address/get?userId=${context?.userData?._id}`
      ).then((res) => {
        console.log(res);
        setAddress(res.address);
      });
    }
  }, [context?.userData]);

  function handleChangeStatus(event) {
    setStatus(event.target.value);
    setFormFields((prevState) => ({
      ...prevState,
      status: event.target.value,
    }));
  }

  const handleClose = () => {
    setIsOpenModel(false);
  };

  function removeAddress(_id) {
    deleteData(`/api/address/delete/${_id}`).then((res) => {
      console.log(res)
      fetchDataFromApi(
        `/api/address/get?userId=${context?.userData?._id}`
      ).then((res) => {
        console.log(res);
        setAddress(res.address);
      });
    });
  }

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

  const handleAddressChange = (addressId) => {
    setSelectedAddressId(addressId);
  };

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true);

    if (formFields.addressLine === "") {
      context.openAlertBox("error", "Please provide address line");
    }
    if (formFields.city === "") {
      context.openAlertBox("error", "Please provide city");
    }
    if (formFields.state === "") {
      context.openAlertBox("error", "Please provide state");
    }
    if (formFields.pincode === "") {
      context.openAlertBox("error", "Please provide pincode");
    }
    if (formFields.country === "") {
      context.openAlertBox("error", "Please provide country");
    }
    if (formFields.phone === "") {
      context.openAlertBox("error", "Please provide phone");
    }

    postData(`/api/address/add`, formFields, { withCredentials: true }).then(
      (res) => {
        console.log(res);
        context.setLoading(false);
        if (res?.error === false) {
          context.openAlertBox("success", "Address added successfully");
          context.setLoading(false);
          fetchDataFromApi(
            `/api/address/get?userId=${context?.userData?._id}`
          ).then((res) => {
            console.log(res);
            setAddress(res.address);
          });
          setIsOpenModel(false);
        } else {
          context.openAlertBox("error", res.message);
          context.setLoading(false);
        }
      }
    );
  }

  return (
    <>
      <section className="py-10 w-full">
        <div className="container flex gap-5">
          <div className="col1 w-[20%]">
            <AccountSideBar />
          </div>
          <div className="col2 w-[50%]">
            <div className="card bg-white p-5 shadow-md rounded-md mb-5">
              <div className="flex items-center pb-3">
                <h2 className="pb-0">My Profile</h2>
              </div>
              <hr />
              <div
                className="flex items-center justify-center p-5 border border-dashed border-[rgba(0,0,0,0.2)] bg-[#f1faff] hover:bg-[#e7f3f9] cursor-pointer"
                onClick={() => setIsOpenModel(true)}
              >
                <span className="text-[14px] font-[500]">Add address</span>
              </div>
              <div className="flex gap-2 flex-col mt-4">
                {address?.length > 0 &&
                  address?.map((address, index) => {
                    return (
                      <label
                        key={index}
                        className="addressBox w-full flex items-center justify-center bg-[#f1f1f1] p-3 rounded-md cursor-pointer"
                      >
                        <Radio
                          {...label}
                          name="address"
                          value={address?._id}
                          checked={selectedAddressId === address?._id}
                          onChange={() => handleAddressChange(address?._id)}
                        />
                        <span>{address?.addressLine}</span>
                        <span onClick={() => removeAddress(address?._id)} className="ml-auto"><FaRegTrashAlt /></span>
                      </label>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Dialog onClose={handleClose} open={isOpenModel}>
        <DialogTitle>Add Address</DialogTitle>
        <form className="p-5" onSubmit={handleSubmit}>
          <div className="flex items-center gap-5 pb-5">
            <div className="col w-[100%]">
              <TextField
                className="w-full"
                label="Address Line"
                variant="outlined"
                size="medium"
                required
                type="text"
                name="addressLine"
                value={formFields.addressLine}
                disabled={context.loading === true ? true : false}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="flex items-center gap-5 pb-5">
            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="City"
                variant="outlined"
                size="medium"
                required
                type="text"
                name="city"
                value={formFields.city}
                disabled={context.loading === true ? true : false}
                onChange={onChangeInput}
              />
            </div>
            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="State"
                variant="outlined"
                size="medium"
                required
                type="text"
                name="state"
                value={formFields.state}
                disabled={context.loading === true ? true : false}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="flex items-center gap-5 pb-5">
            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="Pincode"
                variant="outlined"
                size="medium"
                required
                type="number"
                name="pincode"
                value={formFields.pincode}
                disabled={context.loading === true ? true : false}
                onChange={onChangeInput}
              />
            </div>
            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="Country"
                variant="outlined"
                size="medium"
                required
                type="text"
                name="country"
                value={formFields.country}
                disabled={context.loading === true ? true : false}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="flex items-center gap-5 pb-5">
            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="Phone"
                variant="outlined"
                size="medium"
                required
                type="number"
                name="phone"
                value={formFields.phone}
                disabled={context.loading === true ? true : false}
                onChange={onChangeInput}
              />
            </div>
            <div className="col w-[50%]">
              <Select
                value={status}
                onChange={handleChangeStatus}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                size="medium"
                className="w-full"
              >
                <MenuItem value={true}>true</MenuItem>
                <MenuItem value={false}>false</MenuItem>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              disabled={!validateValue}
              type="submit"
              className="btn-org btn-lg w-full"
            >
              {context.loading === true ? <LoadingCircle /> : "Add Address"}
            </Button>
            <Button
              onClick={() => setIsOpenModel(false)}
              className="btn-org btn-border btn-lg"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}

export default Address;
