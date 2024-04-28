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
        autoplay={{ delay: 1500 }}
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/dk1WThw/tractor.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/BtjVMXZ/sheep-land.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/1XNjKZp/ritchie-valens-6fxi-PO6b-Pp-M-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/zPJ3ggJ/r-architecture-MAn-Vo-Jl-QUvg-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/6XtQJ88/joshua-sukoff-Xq0-OGd-BQLmg-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="object-scale-down h-48 w-96 "
              src="https://i.ibb.co/kSfX2cw/asa-rodger-Ry-Z5-Xjv-YKyc-unsplash.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/0JWchPc/nathan-dumlao-d82-Baz-Kb-KFw-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/jMs3LHk/vainyard.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/1Tnw3vS/argricalture-land.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/Ch06NxC/nathan-anderson-rjw0-C4-Kl-NSo-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img
              src="https://i.ibb.co/s6xXjwG/leon-ephraim-Axo-Nnn-H1-Y98-unsplash.jpg
"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/hXdFmcG/brian-babb-Xbw-Hrt87m-Q0-unsplash.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="object-scale-down h-48 w-96 ">
            <img src="https://i.ibb.co/mDn55r7/olesia-bahrii-a-JJj-XCPZKSc-unsplash.jpg" />
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default SwiperImage;
