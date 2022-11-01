import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './styles';

const NumberCard = ({ item, index }) => {
  return (
    <S.StyledContainer>
      <div className="background">
        <Image src={item.image} alt="" fill />
      </div>
      <div className="number">{index + 1}</div>
      <div className="title">{item.title}</div>
    </S.StyledContainer>
  );
};

export default NumberCard;
