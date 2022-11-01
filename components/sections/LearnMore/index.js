import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import GooglePlayIcon from '@/components/icons/colored/google-play-icon';
import AppleLogoIcon from '@/components/icons/colored/apple-logo-icon';
import HuaweiLogoIcon from '@/components/icons/colored/huawei-logo-icon';
import ArrowRightIcon from '@/components/icons/uncolored/arrow-right-icon';

const LearnMore = () => {
  return (
    <S.StyledContainer>
      <div className="left">
        <div className="title">Eğlen & Öğren</div>
        <div className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Iabore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation uilamco.
        </div>
        <div className="actions">
          <button type="button" className="with-bg">
            Keşfet
          </button>
          <button type="button">Tüm Kategoriler</button>
        </div>
      </div>
      <div className="right">
        <div className="image">
          <Image
            alt=""
            fill
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </div>
      </div>
    </S.StyledContainer>
  );
};

export default LearnMore;
