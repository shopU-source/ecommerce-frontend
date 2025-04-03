import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { BsBagCheckFill } from "react-icons/bs";

function Checkout() {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h1>Billing Details</h1>
            <form className="w-full mt-5">
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    required
                    type="text"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Email"
                    variant="outlined"
                    size="small"
                    type="email"
                    required
                  />
                </div>
              </div>
              <h6 className="text-[14px] font-[500] mb-3">Phone Number</h6>
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    type="number"
                    required
                  />
                </div>
              </div>
              <h6 className="text-[14px] font-[500] mb-3">Street Address</h6>
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="House Number and Street Name"
                    variant="outlined"
                    size="small"
                    required
                    type="text"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Apartment, Suite, Unit, etc (optional)"
                    variant="outlined"
                    size="small"
                    type="text"
                  />
                </div>
              </div>
              <h6 className="text-[14px] font-[500] mb-3">Town / City</h6>
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Town / City"
                    variant="outlined"
                    size="small"
                    type="text"
                    required
                  />
                </div>
              </div>
              <h6 className="text-[14px] font-[500] mb-3">State</h6>
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="State"
                    variant="outlined"
                    size="small"
                    type="text"
                    required
                  />
                </div>
              </div>
              <h6 className="text-[14px] font-[500] mb-3">Pincode / ZIP</h6>
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Pincode / ZIP"
                    variant="outlined"
                    size="small"
                    type="number"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="rightcol w-[30%]">
          <div className="card shadow-md bg-white p-5 rounded-md">
            <h2 className="mb-4">Your Order</h2>
            <div className="flex items-center justify-between py-3 border-t border-b border-black">
              <span className="text-[14px] font-[600]">Product</span>
              <span className="text-[14px] font-[600]">Subtotal</span>
            </div>
            <div className="scroll mb-5 max-h-[250px] overflow-y-scroll overflow-x-hidden">
              <div className="flex items-center justify-between pr-4 py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[80px] h-[80px] object-cover rounded-md group cursor-pointer my-3">
                    <img
                      src="https://www.jiomart.com/images/product/original/rvkac6kwsu/buynewtrend-light-blue-solid-women-denim-jacket-product-images-rvkac6kwsu-3-202311190356.jpg?im=Resize=(600,750)"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <Link className="link text-[14px] font-[600]">
                      Open-Front Shrug...
                    </Link>
                    <p className="text-[14px]">Quantity: 1</p>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$ 1,300</span>
              </div>
              <div className="flex items-center justify-between pr-4 py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[80px] h-[80px] object-cover rounded-md group cursor-pointer my-3">
                    <img
                      src="https://www.jiomart.com/images/product/original/rvkac6kwsu/buynewtrend-light-blue-solid-women-denim-jacket-product-images-rvkac6kwsu-3-202311190356.jpg?im=Resize=(600,750)"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <Link className="link text-[14px] font-[600]">
                      Open-Front Shrug...
                    </Link>
                    <p className="text-[14px]">Quantity: 1</p>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$ 1,300</span>
              </div>
              <div className="flex items-center justify-between pr-4 py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[80px] h-[80px] object-cover rounded-md group cursor-pointer my-3">
                    <img
                      src="https://www.jiomart.com/images/product/original/rvkac6kwsu/buynewtrend-light-blue-solid-women-denim-jacket-product-images-rvkac6kwsu-3-202311190356.jpg?im=Resize=(600,750)"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <Link className="link text-[14px] font-[600]">
                      Open-Front Shrug...
                    </Link>
                    <p className="text-[14px]">Quantity: 1</p>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$ 1,300</span>
              </div>
              <div className="flex items-center justify-between pr-4 py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[80px] h-[80px] object-cover rounded-md group cursor-pointer my-3">
                    <img
                      src="https://www.jiomart.com/images/product/original/rvkac6kwsu/buynewtrend-light-blue-solid-women-denim-jacket-product-images-rvkac6kwsu-3-202311190356.jpg?im=Resize=(600,750)"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <Link className="link text-[14px] font-[600]">
                      Open-Front Shrug...
                    </Link>
                    <p className="text-[14px]">Quantity: 1</p>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$ 1,300</span>
              </div>
              <div className="flex items-center justify-between pr-4 py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[80px] h-[80px] object-cover rounded-md group cursor-pointer my-3">
                    <img
                      src="https://www.jiomart.com/images/product/original/rvkac6kwsu/buynewtrend-light-blue-solid-women-denim-jacket-product-images-rvkac6kwsu-3-202311190356.jpg?im=Resize=(600,750)"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <Link className="link text-[14px] font-[600]">
                      Open-Front Shrug...
                    </Link>
                    <p className="text-[14px]">Quantity: 1</p>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$ 1,300</span>
              </div>
              <div className="flex items-center justify-between pr-4 py-2">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-[80px] h-[80px] object-cover rounded-md group cursor-pointer my-3">
                    <img
                      src="https://www.jiomart.com/images/product/original/rvkac6kwsu/buynewtrend-light-blue-solid-women-denim-jacket-product-images-rvkac6kwsu-3-202311190356.jpg?im=Resize=(600,750)"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <Link className="link text-[14px] font-[600]">
                      Open-Front Shrug...
                    </Link>
                    <p className="text-[14px]">Quantity: 1</p>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">$ 1,300</span>
              </div>
            </div>
            <Link
              to={"/buy"}
              className="mui-button-link btn-org btn-lg gap-2 btn-org btn-lg w-full flex items-center justify-center"
            >
              <BsBagCheckFill className="text-[20px] mb-1" />
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
