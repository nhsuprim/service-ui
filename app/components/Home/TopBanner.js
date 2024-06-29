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
            className="mySwiper mx-auto px-24 container-fluid h-fit"
        >
            <SwiperSlide>
                <img
                    className="w-full"
                    // width={600}

                    src="https://png.pngtree.com/png-vector/20220608/ourlarge/pngtree-plumbing-service-with-plumber-workers-repair-png-image_4902037.png"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="w-full"
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electrical-service-video-poster-temp-design-template-e7c42f455da029a15c0c1a7c27238c60_screen.jpg?ts=1601680135"
                />
            </SwiperSlide>
            {/* <SwiperSlide>
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
            </SwiperSlide> */}
        </Swiper>
    );
};

export default TopBanner;
