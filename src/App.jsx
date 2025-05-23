import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";
import ProductDetails from "./pages/ProductDetails";
import { createContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import ProductZoom from "./components/ProductZoom";
import { IoClose } from "react-icons/io5";
import ProductDetailsComponent from "./components/ProductDetailsComponent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Drawer from "@mui/material/Drawer";
import CartPanel from "./components/CartPanel";
import CartPage from "./pages/CartPage";
import toast, { Toaster } from "react-hot-toast";
import Verify from "./pages/Verify";
import ForgotPassword from "./pages/ForgotPassword";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";
import MyList from "./pages/MyList";
import MyOrders from "./pages/MyOrders";
import { fetchDataFromApi } from "./utils/api";
import Address from "./pages/address";

const MyContext = createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth] = useState("xl");
  const [fullWidth] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null)

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  function openAlertBox(status, message) {
    console.log(status);
    if (status === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token !== undefined && token !== null && token !== "") {
      fetchDataFromApi(`/api/user/userDetails`).then((res) => {
        console.log(res)
        if (res?.message === "You have not login") {
          localStorage.removeItem("accessToken")
          localStorage.removeItem("refreshToken")
          openAlertBox("error", "Your session is closed, please login")
          window.location.href = "/login"
          setIsLogin(false)
        }
        setIsLogin(true)
        setUserData(res.user)
      })
    }
    else {
      setIsLogin(false)
    }
  }, [isLogin])

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
    loading,
    setLoading,
    setUserData,
    userData
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route
              path={"/productListing"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/productDetails/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
            <Route path={"/verify"} exact={true} element={<Verify />} />
            <Route
              path={"/forgotPassword"}
              exact={true}
              element={<ForgotPassword />}
            />
            <Route path={"/checkout"} exact={true} element={<Checkout />} />
            <Route path={"/myAccount"} exact={true} element={<MyAccount />} />
            <Route path={"/myList"} exact={true} element={<MyList />} />
            <Route path={"/myOrders"} exact={true} element={<MyOrders />} />
            <Route path={"/myAddress"} exact={true} element={<Address />} />
          </Routes>
          <FooterBanner />
          <Footer />
        </MyContext.Provider>
        <Dialog
          open={openProductDetailsModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseProductDetailsModal}
          aria-describedby="alert-dialog-slide-description"
          className="productDetailsModal relative"
          fullWidth={fullWidth}
          maxWidth={maxWidth}
        >
          <DialogContent>
            <div className="flex items-center w-full productDetailsModalContainer">
              <div className="col1 w-[40%] px-3">
                <ProductZoom />
              </div>
              <div className="col2 w-[60%] ml-5 p-5 productContent">
                <ProductDetailsComponent />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button className="link !bg-[#e4f0d4] !absolute top-[15px] right-[15px] cursor-pointer !rounded-full !w-[40px] !h-[40px]">
              <IoClose
                onClick={handleCloseProductDetailsModal}
                className="!text-black !w-[40px] text-[20px]"
              />
            </Button>
          </DialogActions>
        </Dialog>
        <Drawer
          open={openCartPanel}
          onClose={toggleCartPanel(false)}
          anchor="right"
          className="cartPanel"
        >
          <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-black">
            <h4>Shopping Cart (1)</h4>
            <IoClose
              className="text-[20px] cursor-pointer"
              onClick={toggleCartPanel(false)}
            />
          </div>
          <CartPanel />
        </Drawer>
        <Toaster
          position="top-right"
          gutter={8}
          toastOptions={{
            success: {
              style: {
                background: "#2c8790", // Green background for success
                color: "#ffffff", // White text
                padding: "16px",
                borderRadius: "8px",
                width: "1000px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              },
              iconTheme: {
                primary: "#ffffff", // White icon
                secondary: "#2c8790", // Green background for icon
              },
            },
            error: {
              style: {
                background: "#e84344", // Red background for error
                color: "#ffffff", // White text
                padding: "16px",
                borderRadius: "8px",
                width: "1000px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              },
              iconTheme: {
                primary: "#ffffff", // White icon
                secondary: "#e84344", // Red background for icon
              },
            },
          }}
        />
      </BrowserRouter>
    </>
  );
}

export { MyContext };
export default App;
