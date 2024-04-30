import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import AwesomeReveal from "../AwesomeReveal/AwesomeReveal";
const Header = () => {
  return (
    <>
      <Swiper
        className="w-full h-[600px]"
        // autoplay={{ delay: 4500 }}
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
        spaceBetween={50}
        Navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            src={
              "https://i.ibb.co/tqVqqJC/quino-al-v-Bxl-L1xp-Sdc-unsplash.jpg"
            }
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://i.ibb.co/YjkXmdB/kadir-celep-Fh-Yp-LBj5-NYw-unsplash.jpg"
            }
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://i.ibb.co/7rQ4bWT/dan-farrell-f-T49-Qn-Fuc-Q8-unsplash.jpg"
            }
            alt="banner"
          />
        </SwiperSlide>
      </Swiper>
      <div className="hot text-center">
        <AwesomeReveal></AwesomeReveal>
      </div>
    </>
  );
};

export default Header;
