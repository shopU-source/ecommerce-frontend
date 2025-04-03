// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "@mui/material";

export default function HomeSliderv2() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeSliderv2"
      >
        <SwiperSlide>
          <div className="item w-[100%] rounded-md overflow-hidden relative">
            <img
              src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737037698/1737037696161_New_Project_45.jpg"
              alt=""
            />

            <div className="info absolute top-0 right-[-100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-1000">
              <h4 className="text-[20px] font-[500] w-full text-left mb-3 relative right-[-100px] opacity-0">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative right-[-100px] opacity-0">
                Women Solid Round Green T-Shirt
              </h2>
              <h3 className="text-[20px] font-[500] w-full text-left mt-3 mb-3 flex items-center gap-3 relative right-[-100px] opacity-0">
                Starting at only{" "}
                <span className="text-primary text-[30px] font-[700]">
                  &#8377;500
                </span>{" "}
              </h3>
              <div className="v2btn w-full relative right-[-100px] opacity-0">
                <Button className="btn-org">Shop Now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-[100%] rounded-md overflow-hidden relative">
            <img
              src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737085794/1737085794016_New_Project_49.jpg"
              alt=""
            />

            <div className="info absolute top-0 right-[-100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-1000">
              <h4 className="text-[20px] font-[500] w-full text-left mb-3 relative right-[-100px] opacity-0">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[35px] font-[700] w-full relative right-[-100px] opacity-0">
                Women Solid Round Green T-Shirt
              </h2>
              <h3 className="text-[20px] font-[500] w-full text-left mt-3 mb-3 flex items-center gap-3 relative right-[-100px] opacity-0">
                Starting at only{" "}
                <span className="text-primary text-[30px] font-[700]">
                  &#8377;500
                </span>{" "}
              </h3>
              <div className="v2btn w-full relative right-[-100px] opacity-0">
                <Button className="btn-org">Shop Now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
