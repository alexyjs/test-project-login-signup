import React from 'react';
import Logo from '../../assets/images/logo.svg';
import LogoMobile from '../../assets/images/logo-mobile.svg';
import Search from '../../assets/icons/search.svg';
import SearchMobile from '../../assets/icons/search-mobile.svg';
import Hamburger from '../../assets/icons/hamburger.svg';
import HamburgerMobile from '../../assets/icons/hamburger-mobile.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
};

const DesktopHeader = () => (
  <div className={'lg:block hidden'}>
    <div className="shadow-md flex flex-row justify-between relative h-[length:90px]">
      <div className={'h-full w-fit px-[length:25px] py-[length:29px]'}>
        <Link to={'/'}>
          <img alt={'logo'} src={Logo} height={31.22} width={140} />
        </Link>
      </div>
      <div
        className={
          'h-full w-6/12 bg-alabaster px-10 relative flex justify-center  shadow-inner-box'
        }
      >
        <img alt={'search icon'} src={Search} height={20} width={20} />
        <input
          className={
            'ml-4 my-auto h-[length:30px] w-full text-lg text-affair placeholder-affair outline-0  bg-alabaster'
          }
          placeholder={'What do you want to learn about?'}
        />
      </div>
      <div
        className={
          'w-fit h-fit my-auto mr-[length:38px] flex justify-between gap-[length:23px] text-[length:15px] '
        }
      >
        <Link to={'/login'} className={'hover:opacity-80'}>
          <button className={'py-[length:10px] text-black font-normal my-auto'}>
            Login
          </button>
        </Link>
        <Link to={'/signup'} className={'hover:opacity-80'}>
          <button
            className={
              'bg-premium px-[length:20px] py-[length:10px] text-affair rounded-3xl font-bold  my-auto'
            }
          >
            Sign up
          </button>
        </Link>
        <Link to={'/#'} className={'hover:opacity-80 my-auto'}>
          <button
            className={'py-[length:10px] w-[length:18px] h-[length:12px]'}
          >
            <img alt={'menu'} src={Hamburger} />
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const MobileHeader = () => (
  <div className={'lg:hidden block'}>
    <div className="shadow-md flex flex-row justify-between relative h-[length:58px] bg-bossanova px-[length:12px] py-[length:14px]">
      <div className={'flex flex-row justify-center'}>
        <Link to={'/#'} className={'hover:opacity-80 my-auto'}>
          <button>
            <img alt={'menu'} src={HamburgerMobile} width={33} height={30} />
          </button>
        </Link>
        <div className={'ml-[length:8.75px] my-auto'}>
          <img alt={'logo'} src={LogoMobile} height={16} width={72} />
        </div>
      </div>
      <button>
        <img alt={'menu'} src={SearchMobile} width={30} height={30} />
      </button>
    </div>
  </div>
);
