import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './styles';

const TrailerCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

  return (
    <S.StyledContainer index={index}>
      <div className="listItem" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="image">
          <div className="title">
            <span>{item.title}</span>
          </div>
          <img src={item.image} alt="" />
        </div>

        {isHovered && (
          <>
            <video type="video/mp4" src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium hic rem eveniet error possimus, neque ex doloribus.
              </div>
            </div>
          </>
        )}
      </div>
      <div className="item-margin" />
    </S.StyledContainer>
  );
};

export default TrailerCard;
