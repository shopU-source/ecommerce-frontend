import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";

function CartPage() {
  return (
    <section className="section py-10 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%]">
          <div className="scroll max-h-[500px] overflow-y-scroll overflow-x-hidden">
            <div className="shadow-md rounded-md bg-white">
              <div className="py-2 px-3 border-b border-black">
                <h2>Your cart</h2>
                <p className="mt-0">
                  There are <span className="font-bold text-primary">2</span>{" "}
                  products in your cart
                </p>
                <CartItems size="S" quantity={1} />
                <CartItems size="S" quantity={1} />
                <CartItems size="S" quantity={1} />
                <CartItems size="S" quantity={1} />
                <CartItems size="S" quantity={1} />
                <CartItems size="S" quantity={1} />
                <CartItems size="S" quantity={1} />
                <CartItems size="S" quantity={1} />
                <CartItems size="S" quantity={1} />
                <CartItems size="S" quantity={1} />
                <CartItems size="S" quantity={1} />
              </div>
            </div>
          </div>
        </div>
        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5">
            <h3 className="pb-3">Cart Totals</h3>
            <hr />
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="text-primary font-bold">$ 1,300</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="font-bold">Free</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Estimate for</span>
              <span className="text-primary font-bold">India</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Total</span>
              <span className="text-primary font-bold">$ 1,600</span>
            </p>
            <br />
            <Link
              to={"/checkout"}
              className="btn-org btn-lg w-full flex gap-2 items-center justify-center"
            >
              <IoBagCheckOutline className="text-[20px]" />
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
