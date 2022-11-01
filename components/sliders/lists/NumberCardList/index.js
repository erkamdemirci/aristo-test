import { useRef, useState } from 'react';
import NumberCard from '../../cards/NumberCard';
import ArrowLeftIcon from '@/components/icons/uncolored/arrow-left-icon';
import ArrowRightIcon from '@/components/icons/uncolored/arrow-right-icon';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styles';

const items = [
  {
    title: 'How to Hold A Newborn Baby',
    image:
      'https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'Healthy Foods',
    image:
      'https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80'
  },
  {
    title: 'Five Ways to Stop Getting Diss..',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
  },
  {
    title: 'Ceyhun Yılmaz Örnek',
    image:
      'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'Knife Skills',
    image:
      'https://images.unsplash.com/photo-1611263063926-200f928092ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    title: 'Drawing 101',
    image:
      'https://images.unsplash.com/photo-1602738328654-51ab2ae6c4ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    title: 'Introduction to Investing',
    image:
      'https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
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

const NumberCardList = ({ title }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    className: 'slick-custom',
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <S.StyledContainer>
      <S.Header>
        <div className="title">{title}</div>
        <button type="button" className="show-all-button">
          Tümünü Gör
        </button>
      </S.Header>
      <Slider {...settings}>
        {items.map((el, idx) => (
          <NumberCard key={idx} index={idx} item={el} />
        ))}
      </Slider>
    </S.StyledContainer>
  );
};

export default NumberCardList;
