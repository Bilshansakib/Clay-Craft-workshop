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
const SwiperImage = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/0FT4R6c/toa-heftiba-y-N33y-Gmul-WE-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/qjnZhxv/fernando-lavin-qx-AAvq-ECvew-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/vjhN6mw/khloe-arledge-Gjy-Ay-PSMQg-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/T8hMWgC/europeana-5-TK1-F5-Vfd-Ik-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/NY077Zj/oshin-khandelwal-EQp-Xnij-Yej-Q-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="object-scale-down h-48 w-96 "
              src="
              https://i.ibb.co/Yc58132/ryan-riggins-9v7-UJS92-HYc-unsplash.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/HzS0k0m/darren-richardson-ag64djbxm-Ls-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/t2zWyB3/chloe-bolton-R0qth-Xq3jec-unsplash-1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/XW1m0hf/loes-klinker-68g-J0ob1q-Q4-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/vjhN6mw/khloe-arledge-Gjy-Ay-PSMQg-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/s6xXjwG/leon-ephraim-Axo-Nnn-H1-Y98-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/XW1m0hf/loes-klinker-68g-J0ob1q-Q4-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/0FT4R6c/toa-heftiba-y-N33y-Gmul-WE-unsplash.jpg" />
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default SwiperImage;
