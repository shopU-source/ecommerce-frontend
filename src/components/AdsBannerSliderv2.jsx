import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import BannerBoxv2 from "./BannerBoxv2";
import PropTypes from "prop-types";

function AdsBannerSliderv2(props) {
  return (
    <div className="py-5 w-full">
      <Swiper
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="smallButton"
      >
        <SwiperSlide>
          <Link to="/">
            <BannerBoxv2
              info="left"
              image={
                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBoxv2
              info="left"
              image={
                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBoxv2
              info="left"
              image={
                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBoxv2
              info="left"
              image={
                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBoxv2
              info="left"
              image={
                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBoxv2
              info="left"
              image={
                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBoxv2
              info="left"
              image={
                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBoxv2
              info="left"
              image={
                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBoxv2
              info="left"
              image={
                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
              }
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <BannerBoxv2
              info="left"
              image={
                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
              }
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

AdsBannerSliderv2.propTypes = {
  items: PropTypes.number.isRequired,
};

export default AdsBannerSliderv2;
