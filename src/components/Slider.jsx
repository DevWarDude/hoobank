import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
    >
      <SwiperSlide>
        <img src="https://via.placeholder.com/300" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/300" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/300" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
