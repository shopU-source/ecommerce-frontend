import "./bannerBoxv2.css";
import PropTypes from "prop-types";

function BannerBoxv2(props) {
  return (
    <div className="bannerboxv2 w-full overflow-hidden rounded-md group relative">
      <img
        src={props.image}
        alt=""
        className="w-full h-full transition-all duration-150 group-hover:scale-105"
      />
      {/* <div className={`info absolute top-0 p-5 ${props.info === "left" ? "left-0" : "right-0"} w-[70%] h-[100%] z-50 flex items-center justify-center flex-col gap-2 ${props.info === "left" ? "" : "pl-14"}`}>
        <h2 className="text-[18px] font-[600]">Samsung Wear Gear</h2>
        <span className="text-[20px] text-primary font-[600] w-full">&#8377; 129.00</span>
        <div className="w-full">
          <Button className="btn-org text-[16px] font-[600]">Shop Now</Button>
        </div>
      </div> */}
    </div>
  );
}
BannerBoxv2.propTypes = {
  image: PropTypes.string.isRequired,
};

export default BannerBoxv2;
