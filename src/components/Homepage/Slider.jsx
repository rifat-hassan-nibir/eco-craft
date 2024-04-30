import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import slide4 from "../../assets/slide-4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full h-[400px]" src={slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[400px]" src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[400px]" src={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[400px]" src={slide4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
