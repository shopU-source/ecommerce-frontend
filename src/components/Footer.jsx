import { Link } from "react-router-dom";
import { GrChatOption } from "react-icons/gr";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="py-6 bg-[#e4f0d4]">
        <div>
          <div className="footer flex py-6 container pt-3">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.2)]">
              <h2 className="text-[18px] font-[600]">Contact us</h2>
              <p className="text-[13px] font-[400] pb-4 pt-4">
                ShopU Online Store is Avaliable Now <br />
                At Boring Road and Kankarbagh Patna
              </p>
              <Link
                className="link text-[13px]"
                to={"mailto:liveshopu@gmail.com"}
              >
                liveshopu@gmail.com
              </Link>
              <span className="text-[21px] font-[600] block w-full mt-3 mb-5 text-primary">
                +91 7070472634
              </span>
              <div className="flex items-center gap-2">
                <GrChatOption className="text-[40px] text-primary" />
                <span className="text-[16px] font-[600]">
                  Online Char <br />
                  Get Expert Help
                </span>
              </div>
            </div>
            <div className="part2 w-[40%] flex pl-10 border-r border-[rgba(0,0,0,0.2)]">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600]">Contact us</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mt-3">
                    <Link to={"/"} className="link">
                      Price drop
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mt-3">
                    <Link to={"/"} className="link">
                      New peoducts
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mt-3">
                    <Link to={"/"} className="link">
                      Best Sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mt-3">
                    <Link to={"/"} className="link">
                      Site Map
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mt-3">
                    <Link to={"/"} className="link">
                      Store
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600]">Our company</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mt-3">
                    <Link to={"/"} className="link">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mt-3">
                    <Link to={"/"} className="link">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mt-3">
                    <Link to={"/"} className="link">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mt-3">
                    <Link to={"/"} className="link">
                      About us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mt-3">
                    <Link to={"/"} className="link">
                      Secure Payment
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mt-3">
                    <Link to={"/"} className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part3 w-[35%] flex pl-10 flex-col pr-8">
              <h2 className="text-[18px] font-[600]">
                Subscribe to Newsletter
              </h2>
              <p className="text-[13px] mt-4">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>
              <form className="mt-5">
                <input
                  type="email"
                  className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-3 focus:border-black"
                  placeholder="Your email address"
                />
                <Button className="btn-org">Subscribe</Button>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottomStrip border-t border-[rgba(0,0,0,0.3)] bg-white mt-4 pt-2">
        <div className="container flex items-center justify-between pt-4">
          <ul className="flex items-center gap-3">
            <li className="list-none">
              <Link
                to={"/"}
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaFacebookF className="text-[15px] group-hover:bg-primary group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to={"/"}
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <AiOutlineYoutube className="text-[20px] group-hover:bg-primary group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to={"/"}
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaInstagram className="text-[15px] group-hover:bg-primary group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to={"/"}
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaPinterestP className="text-[15px] group-hover:bg-primary group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to={"/"}
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaLinkedinIn className="text-[15px] group-hover:bg-primary group-hover:text-white" />
              </Link>
            </li>
          </ul>
          <p className="text-[13px]">Copyright&#169; 2025 - ShopU Store </p>
        </div>
      </div>
      <br />
    </>
  );
}

export default Footer;
