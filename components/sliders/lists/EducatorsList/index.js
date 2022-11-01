import React, { useEffect, useRef, useState } from 'react';
import EducatorCard from '../../cards/EducatorCard';
import ArrowLeftIcon from '@/components/icons/uncolored/arrow-left-icon';
import ArrowRightIcon from '@/components/icons/uncolored/arrow-right-icon';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import * as S from './styles';

// import required modules
import { EffectCards } from 'swiper';
import TrailerCardSlider from '@/components/sections/TrailerCardSlider';
import TrailerCardList from '../TrailerCardList';
import TrailerCard from '../../cards/TrailerCard';

const junkData = [
  {
    author: 'Monica Stewart',
    image:
      'https://images.unsplash.com/photo-1584361853901-dd1904bb7987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    author: 'James Woodard',
    image:
      'https://images.unsplash.com/photo-1629708494720-91f2c75f7604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  },
  {
    author: 'Mr. Randall Alvarez',
    image:
      'https://images.unsplash.com/photo-1520078452277-0832598937e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  },
  {
    author: 'James Reed',
    image:
      'https://images.unsplash.com/photo-1627729205753-52d2ddeefce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    author: 'Aaron Calhoun',
    image:
      'https://images.unsplash.com/photo-1570825423916-690c2a5e98e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    author: 'James Lyons',
    image:
      'https://images.unsplash.com/photo-1584418879404-85eb6c39c30c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  },
  {
    author: 'Juan Foster',
    image:
      'https://images.unsplash.com/photo-1647748530961-4f3a5d47160b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
  }
];

const EducatorsList = ({ items = junkData }) => {
  const activeIndex = 3;
  const [selectedAuthor, setSelectedAuthor] = useState(items[activeIndex].author);

  const sliderChanged = (swiper) => {
    const index = swiper.activeIndex;
    console.log(index);
    setSelectedAuthor(items[index].author);
  };

  return (
    <S.StyledContainer>
      <S.Header>
        <div className="subtitle">Beğeneceğini Düşündüğümüz</div>
        <div className="title">Eğitmen Önerileri</div>
      </S.Header>
      <div className="content">
        <Swiper
          onSlideChange={sliderChanged}
          effect={'cards'}
          initialSlide={3}
          navigation
          modules={[EffectCards, Navigation]}
          className="educatorsSwiper"
        >
          {items &&
            items.map((item, idx) => (
              <SwiperSlide key={idx}>
                <EducatorCard item={item} index={idx} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="lessonsSwiper">
          <TrailerCardList maxElementCount={3} title={'Çocuk Gelişiminde Önemli Faktörler'} subtitle={selectedAuthor} />
        </div>
      </div>
    </S.StyledContainer>
  );
};

export default EducatorsList;
