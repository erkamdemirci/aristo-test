import React from 'react';
import * as S from './styles';
import Link from 'next/link';
import Image from 'next/image';
import FacebookUncoloredIcon from '@/components/icons/uncolored/facebook-icon';
import InstagramUncoloredIcon from '@/components/icons/uncolored/instagram-icon';
import LinkedUncoloredIcon from '@/components/icons/uncolored/linkedin-icon';

const Footer = () => {
  return (
    <S.StyledContainer>
      <div className="content">
        <div className="column">
          <div className="yasam-logo">
            <Image fill src="/images/yasam-logo-transparent.png" alt="" />
          </div>
          <div className="nav-items">
            <div className="item">+1 800 854-36-80</div>
            <div className="social-icons">
              <div className="icon">
                <FacebookUncoloredIcon />
              </div>
              <div className="icon">
                <InstagramUncoloredIcon />
              </div>
              <div className="icon">
                <LinkedUncoloredIcon />
              </div>
            </div>
            <button type="button" className="reach-us">
              Bize Ulaş
            </button>
          </div>
        </div>
        <div className="column">
          <div className="title">KEŞFET</div>
          <div className="nav-items">
            <div className="item">
              <Link href="#">Eğitimler</Link>
            </div>
            <div className="item">
              <Link href="#">Eğitmenlerimiz</Link>
            </div>
            <div className="item">
              <Link href="#">Planlar</Link>
            </div>
            <div className="item logo">
              <Link href="#">Atölye+</Link>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="title">HAKKIMIZDA</div>
          <div className="nav-items">
            <div className="item">
              <Link href="#">Yaşam Atölyesi Nedir?</Link>
            </div>
            <div className="item">
              <Link href="#">Kullanıcı Sözleşmesi</Link>
            </div>
            <div className="item">
              <Link href="#">Gizlilik Politikası</Link>
            </div>
            <div className="item">
              <Link href="#">Mesafeli Satış Sözleşmesi</Link>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="title">DESTEK</div>
          <div className="nav-items">
            <div className="item">
              <Link href="#">Sıkça Sorulan Sorular</Link>
            </div>
            <div className="item">
              <Link href="#">Bize Ulaş</Link>
            </div>
          </div>
        </div>
        <div className="column info">
          <div className="title">İLETİŞİM</div>
          <span>8819 Ohio St.Southgate, CA9028080</span>
          <span>ourstudio@hello.com</span>
          <span>+1386-688-3295</span>
        </div>
      </div>
      <div className="copyright">© 2021 All Rights Reserved</div>
    </S.StyledContainer>
  );
};

export default Footer;
