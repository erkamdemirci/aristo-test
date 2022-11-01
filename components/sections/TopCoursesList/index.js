import NumberCardList from '@/components/sliders/lists/NumberCardList';
import React from 'react';
import * as S from './styles';

const TopCoursesList = () => {
  return (
    <S.StyledContainer>
      <NumberCardList title={'Top 10 Eğitim Listesi'} />
    </S.StyledContainer>
  );
};

export default TopCoursesList;
