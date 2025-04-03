import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";

function ProductZoom() {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSmall = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSmall.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%]">
          <Swiper
            ref={zoomSliderSmall}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSliderThumbs h-[500px] overflow-hidden"
          >
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? "opacity-1" : "opacity-30"}`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://www.jiomart.com/images/product/original/rvmllpijku/keitra-women-maroon-printed-viscose-rayon-kurta-pant-and-dupatta-set-kurta-set-women-product-images-rvmllpijku-0-202409271044.jpg?im=Resize=(75,94)"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 1 ? "opacity-1" : "opacity-30"}`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://www.jiomart.com/images/product/original/rvmllpijku/keitra-women-maroon-printed-viscose-rayon-kurta-pant-and-dupatta-set-kurta-set-women-product-images-rvmllpijku-1-202409271044.jpg?im=Resize=(75,94)"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? "opacity-1" : "opacity-30"}`}
                onClick={() => goto(2)}
              >
                <img
                  src="https://www.jiomart.com/images/product/original/rvmllpijku/keitra-women-maroon-printed-viscose-rayon-kurta-pant-and-dupatta-set-kurta-set-women-product-images-rvmllpijku-2-202409271044.jpg?im=Resize=(75,94)"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 3 ? "opacity-1" : "opacity-30"}`}
                onClick={() => goto(3)}
              >
                <img
                  src="https://www.jiomart.com/images/product/original/rvmllpijku/keitra-women-maroon-printed-viscose-rayon-kurta-pant-and-dupatta-set-kurta-set-women-product-images-rvmllpijku-2-202409271044.jpg?im=Resize=(75,94)"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 4 ? "opacity-1" : "opacity-30"}`}
                onClick={() => goto(4)}
              >
                <img
                  src="https://www.jiomart.com/images/product/original/rvmllpijku/keitra-women-maroon-printed-viscose-rayon-kurta-pant-and-dupatta-set-kurta-set-women-product-images-rvmllpijku-4-202409271044.jpg?im=Resize=(75,94)"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
        <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
            ref={zoomSliderBig}
          >
            <SwiperSlide>
              <InnerImageZoom
                src={
                  "https://www.jiomart.com/images/product/original/rvmllpijku/keitra-women-maroon-printed-viscose-rayon-kurta-pant-and-dupatta-set-kurta-set-women-product-images-rvmllpijku-0-202409271044.jpg?im=Resize=(600,750)"
                }
                zoomType="hover"
                zoomScale={1}
                className="w-full transition-all group-hover:scale-105"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src={
                  "https://www.jiomart.com/images/product/original/rvmllpijku/keitra-women-maroon-printed-viscose-rayon-kurta-pant-and-dupatta-set-kurta-set-women-product-images-rvmllpijku-1-202409271044.jpg?im=Resize=(600,750)"
                }
                zoomType="hover"
                zoomScale={1}
                className="w-full transition-all group-hover:scale-105"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src={
                  "https://www.jiomart.com/images/product/original/rvmllpijku/keitra-women-maroon-printed-viscose-rayon-kurta-pant-and-dupatta-set-kurta-set-women-product-images-rvmllpijku-2-202409271044.jpg?im=Resize=(600,750)"
                }
                zoomType="hover"
                zoomScale={1}
                className="w-full transition-all group-hover:scale-105"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src={
                  "https://www.jiomart.com/images/product/original/rvmllpijku/keitra-women-maroon-printed-viscose-rayon-kurta-pant-and-dupatta-set-kurta-set-women-product-images-rvmllpijku-2-202409271044.jpg?im=Resize=(600,750)"
                }
                zoomType="hover"
                zoomScale={1}
                className="w-full transition-all group-hover:scale-105"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src={
                  "https://www.jiomart.com/images/product/original/rvmllpijku/keitra-women-maroon-printed-viscose-rayon-kurta-pant-and-dupatta-set-kurta-set-women-product-images-rvmllpijku-4-202409271044.jpg?im=Resize=(600,750)"
                }
                zoomType="hover"
                zoomScale={1}
                className="w-full transition-all group-hover:scale-105"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ProductZoom;
