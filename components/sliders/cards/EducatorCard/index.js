import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './styles';

const EducatorCard = ({ item, index }) => {
  return (
    <S.StyledContainer>
      <div className="background">
        <Image src={item.image} alt="" fill />
      </div>
      <div className="title">{item.author}</div>
    </S.StyledContainer>
  );
};

export default EducatorCard;
