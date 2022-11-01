import React from 'react';
import { useState, useEffect } from 'react';
// import { useSession, signOut, getSession } from 'next-auth/react';
// import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

import { useUserContext } from '../../../../context/User';
import { LoginIcon, PlusIcon, LogoutIcon, SettingsIcon, SpinnerIcon } from '../../../icons';

const SessionComponent = ({ closeMobileNavHandler }) => {
  const { loading, user, logoutUser } = useUserContext();
  const [imageLink, setImageLink] = useState('/images/unknown.jpeg');

  if (loading)
    return (
      <div className="self-center">
        <SpinnerIcon classes={'inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-red-600'} />
      </div>
    );
  return (
    <>
      {!user && (
        <div className="nav__perfil flex flex-row">
          <Link href="/login">
            <button
              onClick={closeMobileNavHandler}
              type="button"
              className="justify-center items-center flex mb-1 md:mb-0 flex-row text-red-500 hover:text-white border-2 border-red-500 hover:bg-red-500 focus:ring-0 focus:outline-none  rounded-full text-md text-center mr-2 "
            >
              <LoginIcon classes={'w-5 h-5 mr-1'} />
              <span className="mt-0.5">Giriş Yap</span>
            </button>
          </Link>
          <Link href="/signup">
            <button
              onClick={closeMobileNavHandler}
              type="button"
              className="flex-1 font-['SanomatSansMedium'] justify-center items-center flex flex-row text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none dark:focus:ring-teal-700 text-md text-center rounded-xl self-center"
            >
              <PlusIcon classes={'w-4 h-4 mr-2 text-gray-900'} />
              <span className="mt-0.5">Üye Ol</span>
            </button>
          </Link>
        </div>
      )}

      {user && (
        <div className="nav__perfil flex flex-row gap-2 md:gap-0 font-['SanomatSansMedium']">
          <Link href={`/profil/${user.profileId}`}>
            <a className="nav__img">
              <div className="relative inline-block drop-shadow-lg">
                <Image
                  src={user.image}
                  onError={() => setImageLink('/images/unknown.jpeg')}
                  className="rounded-full bg-white object-cover p-[6px] "
                  width={100}
                  height={100}
                  alt=""
                />
                <span className="absolute bottom-1 -right-1 inline-block w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
              </div>
            </a>
          </Link>

          <div className="flex flex-col flex-grow self-center">
            {user && (
              <Link href={`/profil/${user.profileId}`}>
                <a onClick={closeMobileNavHandler} className="nav__name text-lg md:text-sm flex flex-row gap-1">
                  {user.name}
                  {user.accountType === 'admin' ? (
                    <Image src={'/images/verified-icon-nefis.svg'} objectFit="contain" width={16} height={16} alt="" />
                  ) : (
                    user.accountType === 'verified' && <Image src={'/images/verified-icon.svg'} objectFit="contain" width={16} height={16} alt="" />
                  )}
                </a>
              </Link>
            )}
            <div className="nav__profession -mt-0.5 flex flex-row align-center ">
              <Link href="/profil">
                <a onClick={closeMobileNavHandler} className="flex flex-row gap-0.5 text-base md:text-sm score-text text-gray-400 cursor-pointer">
                  <SettingsIcon classes={'w-5 h-5 md:w-4 md:h-4'} />
                  Ayarlar
                </a>
              </Link>
            </div>
          </div>

          <button
            onClick={(e) => {
              closeMobileNavHandler();
              logoutUser();
            }}
            className="group md:border-l-2 justify-center items-center border-gray-200 md:ml-4 md:pl-2 flex flex-col md:flex-row gap-1"
          >
            <LogoutIcon classes={'w-6 h-6 text-red-400 group-hover:text-red-800'} />
            <span className="text-base self-center text-red-400 group-hover:text-red-800 font-['SanomatSansMedium']">Çıkış Yap</span>
          </button>
        </div>
      )}
    </>
  );
};

export default SessionComponent;
