import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import TrailerCardList from '@/components/sliders/lists/TrailerCardList';

const ChannelBanner = () => {
  return (
    <S.StyledContainer>
      <div className="content">
        <div className="left">
          <div className="title">Keşfet</div>
          <span className="desc">
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </span>
          <div className="action">
            <button type="button">Keşfete Git</button>
          </div>
        </div>
        <div className="background">
          <div className="image">
            <Image
              fill
              alt=""
              src="https://images.unsplash.com/photo-1477468572316-36979010099d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            />
          </div>
          <div className="gradient" />
        </div>
        <div className="slider">
          <TrailerCardList maxElementCount={4} />
        </div>
      </div>
    </S.StyledContainer>
  );
};

export default ChannelBanner;
