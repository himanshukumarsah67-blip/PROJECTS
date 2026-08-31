import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import './Slider.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'


import { Navigation, Pagination, Autoplay } from "swiper/modules";

const images = [img1,img2
];

const HeroSlider = () => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
             className="w-full h-150 object-cover object-top"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;