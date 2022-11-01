import * as S from './styles';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

function NavigationBar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.pathname);

  return (
    <S.NavigationBar>
      <div className="content">
        <Link href="/" legacyBehavior>
          <div className="logo">
            <Image src="/images/yasam-logo-transparent.png" fill alt="" />
          </div>
        </Link>
        <nav className="nav">
          <ul>
            <li className="nav-item active">
              <Link href="/">Anasayfa</Link>
            </li>
            <li className="nav-item">
              <Link href="/">Kategoriler</Link>
            </li>
            <li className="nav-item atolye">
              <Link href="/">Atölye+</Link>
            </li>
            <li className="nav-item">
              <Link href="/">Eğitmenlerimiz</Link>
            </li>
            <li className="nav-item">
              <Link href="/">Planlar</Link>
            </li>
            <li className="nav-item">
              <Link href="/">Keşfet</Link>
            </li>
          </ul>
        </nav>
      </div>
    </S.NavigationBar>
  );
}

export default NavigationBar;
