import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function Blogitem() {
  return (
    <div className="blogItem group">
      <div className="imageWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="https://img.freepik.com/free-vector/illustration-web-design_53876-37576.jpg?ga=GA1.1.1716538387.1741836126&semt=ais_hybrid"
          alt="blog image"
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
        />
        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-2 text-[11px] font-[500] gap-2">
          <IoMdTime className="text-[16px]" /> 5 Feb 2025
        </span>
      </div>
      <div className="info py-4">
        <h2 className="text-[16px] font-[600] text-black">
          <Link to={"/"} className="link">
            The Serious Business of Heaven
          </Link>
        </h2>
        <p className="font-[400] text-[12px] text-[rgba(0,0,0,0.8)] mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          esse?....
        </p>
        <Link className="link text-primary font-[600] text-[14px] flex items-center gap-1">
          Read More <FaChevronRight />
        </Link>
      </div>
    </div>
  );
}

export default Blogitem;
