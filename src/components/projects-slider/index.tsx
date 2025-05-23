import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const slides = [1, 2, 3, 4, 5];

export default function ProjectSlider() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="project-swiper"
    >
      {slides.map((num) => (
        <SwiperSlide key={num}>
          <div className="slide-content">{num}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
