import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
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
            <img
              className="img-styles"
              src="https://images.wallpaperscraft.com/image/single/book_text_motivation_coffee_hand_119514_1920x1080.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-sm  max-h-[50vh] w-full flex items-center justify-center overflow-hidden brightness-75">
            <img
              className="img-styles"
              src="https://images.wallpaperscraft.com/image/single/pillar_plate_inscription_119232_1920x1080.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-sm  max-h-[50vh] w-full flex items-center justify-center overflow-hidden brightness-75">
            <img
              className="img-styles"
              src="https://images.wallpaperscraft.com/image/single/wood_words_minimalism_style_74273_1920x1080.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-sm  max-h-[50vh] w-full flex items-center justify-center overflow-hidden brightness-75">
            <img
              className="img-styles"
              src="https://images.wallpaperscraft.com/image/single/motivation_phrase_notebook_178598_1920x1080.jpg"
              alt=""
            />
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
