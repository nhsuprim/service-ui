"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TopBanner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mx-auto px-24"
    >
      <SwiperSlide>
        <img className="w-full" src="/home/01.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/home/02.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/home/03.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/home/04.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/home/05.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/home/06.png" />
      </SwiperSlide>
    </Swiper>
  );
};

export default TopBanner;
