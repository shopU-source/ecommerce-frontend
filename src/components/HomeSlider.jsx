// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function HomeSlider() {
  return (
    <div className="homeslider py-3">
      <div className="container mx-auto overflow-hidden">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper transition"
        >
          <SwiperSlide>
            <Link to={"/adver"}>
              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8921fc73c192a29f.jpg?q=20"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/advert"}>
              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8921fc73c192a29f.jpg?q=20"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/advert"}>
              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8921fc73c192a29f.jpg?q=20"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/advert"}>
              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8921fc73c192a29f.jpg?q=20"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/advert"}>
              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8921fc73c192a29f.jpg?q=20"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/advert"}>
              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8921fc73c192a29f.jpg?q=20"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/advert"}>
              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8921fc73c192a29f.jpg?q=20"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/advert"}>
              <img
                src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8921fc73c192a29f.jpg?q=20"
                alt="image"
                className="w-full h-auto object-cover"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
