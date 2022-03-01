import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Hero = () => {
  return (
    <Swiper
      // install Swiper modules
      className="h-[80vh]"
      modules={[Navigation, Pagination, A11y, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img
          className="relative object-cover h-full w-full"
          src={img1}
          alt=""
        />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img className=" object-cover h-full w-full" src={img2} alt="" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img className=" object-cover h-full w-full" src={img3} alt="" />{" "}
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
