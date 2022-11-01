import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import GooglePlayIcon from '@/components/icons/colored/google-play-icon';
import AppleLogoIcon from '@/components/icons/colored/apple-logo-icon';
import HuaweiLogoIcon from '@/components/icons/colored/huawei-logo-icon';
import ArrowRightIcon from '@/components/icons/uncolored/arrow-right-icon';

const DownloadApps = () => {
  return (
    <S.StyledContainer>
      <div className="left">
        <div className="title">Nasıl Çalışır?</div>
        <div className="subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</div>
        <div className="seperator" />
        <div className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Iabore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation uilamco.
        </div>
      </div>
      <div className="right">
        <div className="image">
          <Image
            alt=""
            fill
            src="https://images.unsplash.com/photo-1625490939776-17cef70ec079?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
        </div>
        <a href="#" className="app-links">
          <div className="app-link">
            <GooglePlayIcon classes={'app-icon'} />
            <div className="info">
              <span className="app-name">Google Play</span>
              <span className="app-text">&apos;den indir</span>
              <ArrowRightIcon classes={'arrow-right-icon'} />
            </div>
          </div>
          <div className="app-link">
            <AppleLogoIcon classes={'app-icon'} />
            <div className="info">
              <span className="app-name">App Store</span>
              <span className="app-text">&apos;dan indir</span>
              <ArrowRightIcon classes={'arrow-right-icon'} />
            </div>
          </div>
          <div className="app-link">
            <HuaweiLogoIcon classes={'app-icon'} />
            <div className="info">
              <span className="app-name">AppGallery</span>
              <span className="app-text">ile keşfet</span>
            </div>
            <ArrowRightIcon classes={'arrow-right-icon'} />
          </div>
        </a>
      </div>
    </S.StyledContainer>
  );
};

export default DownloadApps;
