import React from 'react';
import Image from 'next/image';
import * as S from './styles';

const HomeHeaderSection = () => {
  return (
    <S.StyledContainer>
      <div className="content">
        <div className="title">
          <span>Business</span>
          <span>Coaching</span>
        </div>
        <span className="desc">
          Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.{' '}
        </span>
        <div className="action">
          <button type="button">Abone Ol</button>
        </div>
      </div>
      <div className="image">
        <Image
          fill
          alt=""
          src="https://images.unsplash.com/photo-1556911220-dabc1f02913a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
      <div className="gradient" />
    </S.StyledContainer>
  );
};

export default HomeHeaderSection;
