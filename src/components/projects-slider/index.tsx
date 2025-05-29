import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import type { NavigationOptions } from 'swiper/types';
import { useAppSelector } from '../../hoocks/useAppSelector';
import languageData from '../../interface-language-data/data';
import slides from './slides-data';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.scss';

export default function ProjectSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const currentLanguage = useAppSelector((state) => state.language);
  const lang = languageData[currentLanguage];

  return (
    <div className="slider__projects-body">
      <h2 className="slider__projects-title">{lang.projects.myProjects}</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;
          navigation.prevEl = prevRef.current;
          navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="project-swiper"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide-content">
              <div className="slide-content__image">
                <img src={item.imagePath} alt={item.projectName} />
                <div className="slide-content__info">
                  <a href={item.gitHubUrl} target="_blank" rel="noopener noreferrer">GitHub: {item.projectName}</a>
                  <a href={item.urlWebSite} target="_blank" rel="noopener noreferrer">Site: {item.projectName}</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="custom-swiper-button-prev" ref={prevRef}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>

        <div className="custom-swiper-button-next" ref={nextRef}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </Swiper>
    </div>
  );
}
