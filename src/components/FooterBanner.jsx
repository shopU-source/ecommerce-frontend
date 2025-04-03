import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";

function FooterBanner() {
  return (
    <div className="py-8 bg-white border-t-2">
      <div className="container py-3">
        <div className="flex items-center justify-center gap-2 pb-8">
          <div className="col1 flex items-center justify-center flex-col group w-[15%]">
            <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-4">Free Shipping</h3>
            <p className="text-[12px] font-[500]">
              For all order above &#8377; 200
            </p>
          </div>
          <div className="col1 flex items-center justify-center flex-col group w-[15%]">
            <PiKeyReturn className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-4">30 Days Return</h3>
            <p className="text-[12px] font-[500]">For an Exchange Product</p>
          </div>
          <div className="col1 flex items-center justify-center flex-col group w-[15%]">
            <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-4">Secured Payment</h3>
            <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
          </div>
          <div className="col1 flex items-center justify-center flex-col group w-[15%]">
            <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-4">Special Gifts</h3>
            <p className="text-[12px] font-[500]">Our First Product Order</p>
          </div>
          <div className="col1 flex items-center justify-center flex-col group w-[15%]">
            <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-4">Support 24/7</h3>
            <p className="text-[12px] font-[500]">Contact us Anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
