import { useRef, useState } from 'react';
import TestimonialCard from '../../cards/TestimonialCard';
import ArrowLeftIcon from '@/components/icons/uncolored/arrow-left-icon';
import ArrowRightIcon from '@/components/icons/uncolored/arrow-right-icon';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styles';

const items = [
  {
    author: {
      name: 'Ali Morshediou',
      title: 'CEO'
    },
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    author: {
      name: 'Adetola Afolabi',
      title: 'CEO'
    },
    image:
      'https://images.unsplash.com/photo-1637684666616-4b15492fd430?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80'
  },
  {
    author: {
      name: 'Christina',
      title: 'CEO'
    },
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
  },
  {
    author: {
      name: 'Ali Morshediou',
      title: 'CEO'
    },
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <S.StyledNextButton onClick={onClick}>
      <ArrowRightIcon classes="next-icon" />
    </S.StyledNextButton>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <S.StyledBackButton onClick={onClick}>
      <ArrowLeftIcon classes="back-icon" />
    </S.StyledBackButton>
  );
}

const TestimonialsList = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    className: 'slick-custom',
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <S.StyledContainer>
      <S.Header>
        <div className="title">
          Hakkımızda <br />
          Ne Söylediler?
        </div>
      </S.Header>
      <Slider {...settings}>
        {items.map((el, idx) => (
          <TestimonialCard key={idx} index={idx} item={el} />
        ))}
      </Slider>
    </S.StyledContainer>
  );
};

export default TestimonialsList;
