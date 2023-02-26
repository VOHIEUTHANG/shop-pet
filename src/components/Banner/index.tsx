import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import banner1 from "../../assets/images/banners/panner_cat_1.jpg";
import banner2 from "../../assets/images/banners/panner_cat_2.jpg";
import banner3 from "../../assets/images/banners/panner_cat_3.jpg";
import banner4 from "../../assets/images/banners/panner_dog_1.jpg";
import banner5 from "../../assets/images/banners/panner_dog_2.jpg";

// STYLES
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type PropsType = {
  children: React.ReactNode;
};

const Banner = ({ children }: PropsType) => {
  return (
    <section className="sec-banner relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className="border-sm max-h-[50vh] w-full flex items-center justify-center overflow-hidden brightness-75">
            <img className="img-styles" src={banner3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-sm max-h-[50vh] w-full flex items-center justify-center overflow-hidden brightness-75">
            <img className="img-styles" src={banner2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-sm max-h-[50vh] w-full flex items-center justify-center overflow-hidden brightness-75">
            <img className="img-styles" src={banner1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-sm max-h-[50vh] w-full flex items-center justify-center overflow-hidden brightness-75">
            <img className="img-styles" src={banner4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-sm max-h-[50vh] w-full flex items-center justify-center overflow-hidden brightness-75">
            <img className="img-styles" src={banner5} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full z-10 pointer-events-none select-none">
        {children}
      </div>
    </section>
  );
};

export default Banner;
