"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Catagory = () => {
  return (
    <>
      <div className="my-24">
        <h1 className="lg:text-3xl text-2xl  italic  text-[#D99904]">
          ---From 11:00am to 10:00pm---
        </h1>
        <hr className="mx-auto" />
        <h1 className="lg:text-5xl text-3xl uppercase ">ORDER ONLINE</h1>
        <hr className="mx-auto" />
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-2/3 mb-10 "
      >
        <SwiperSlide>
          <img className="w-full" src="/home/slide1.jpg" />

          <h1 className="-mt-24 text-white font-light text-2xl ">SALAD</h1>
          <br />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="/home/slide2.jpg" />
          <h1 className="-mt-24 text-white font-light text-2xl ">PIZZAS</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="/home/slide3.jpg" />
          <h1 className="-mt-24 text-white font-light text-2xl ">SOUPS</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="/home/slide4.jpg" />
          <h1 className="-mt-24 text-white font-light text-2xl ">DESSERTS</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src="/home/slide5.jpg" />
          <h1 className="-mt-24 text-white font-light text-2xl ">SALAD</h1>
          <br />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Catagory;
