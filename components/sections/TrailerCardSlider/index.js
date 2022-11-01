import TrailerCardList from '@/components/sliders/lists/TrailerCardList';
import React from 'react';
import * as S from './styles';

const TrailerCardSlider = () => {
  return (
    <S.StyledContainer>
      <TrailerCardList title={'Popüler Eğitimler'} />
    </S.StyledContainer>
  );
};

export default TrailerCardSlider;
