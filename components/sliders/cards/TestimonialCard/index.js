import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './styles';

const TestimonialCard = ({ item, index }) => {
  return (
    <S.StyledContainer>
      <div className="content">
        <p className="testimonial">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus nesciunt amet obcaecati nihil quia nulla porro tempora sint
          eos at recusandae quidem neque veniam voluptatum, labore perspiciatis exercitationem est
        </p>
        <div className="author">
          <span className="name">{item.author.name}</span>
          <span className="title">{item.author.title}</span>
        </div>
      </div>
      <div className="background">
        <Image src={item.image} alt="" fill />
      </div>
    </S.StyledContainer>
  );
};

export default TestimonialCard;
