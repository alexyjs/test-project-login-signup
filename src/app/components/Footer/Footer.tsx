import React from 'react';
import Logo from '../../assets/images/logo-footer.svg';
import SendIcon from '../../assets/icons/send.svg';

export const Footer = () => {
  return (
    <div
      className={
        'px-6 lg:px-0 lg:pl-[length:319px]  lg:pr-[length:187px] pt-[length:86px] pb-[length:51px] bg-affair flex flex-col gap-[length:76px] w-screen text-white'
      }
    >
      <div
        className={'w-full h-full flex flex-row flex-wrap gap-[length:143px]'}
      >
        <div className={'flex flex-col gap-[length:39px]'}>
          <div>
            <img alt={'logo'} src={Logo} height={33} width={148} />
          </div>
          <div className={'flex flex-col gap-[length:13px]'}>
            <div className={'font-medium text-3xl font-lora'}>
              Never miss an update!
            </div>
            <div
              className={
                'text-frenchLilac text-lg font-normal lg:w-[length:383px] leading-[length:30px]'
              }
            >
              We are always updating our research and adding new stuff. Sign-up
              and always stay on top of our updates!
            </div>
            <div className={'bg-none relative w-full'}>
              <input
                className={
                  'h-[length:69px] w-full bg-affair border-white border-[length:1px] border-solid px-[length:24px] py-[length:28px] rounded-full text-white placeholder-white text-sm'
                }
                placeholder={'Your Email Address'}
              />
              <button
                className={
                  'absolute right-[length:17.64px] top-[length:10.46px]'
                }
              >
                <img alt={'send'} src={SendIcon} height={46.13} width={46.13} />
              </button>
            </div>
          </div>
        </div>
        <div className={'flex flex-row gap-[length:75px] flex-wrap'}>
          <div className={'flex flex-col gap-[length:27px]'}>
            <div
              className={'font-lora font-medium text-[length:25px] text-white'}
            >
              About Us
            </div>
            <div className={'flex flex-col gap-[length:35px]'}>
              <div className={'text-frenchLilac text-lg font-normal'}>
                Our story
              </div>
              <div className={'text-frenchLilac text-lg font-normal'}>
                Our Team
              </div>
              <div className={'text-frenchLilac text-lg font-normal'}>
                Our Editorial Policy
              </div>
              <div className={'text-frenchLilac text-lg font-normal'}>
                Our Mistakes
              </div>
            </div>
          </div>
          <div className={'flex flex-col gap-[length:27px]'}>
            <div
              className={'font-lora font-medium text-[length:25px] text-white'}
            >
              Resources
            </div>
            <div className={'flex flex-col gap-[length:35px]'}>
              <div className={'text-frenchLilac text-lg font-normal'}>
                Continuing
                <br />
                Education
              </div>
              <div className={'text-frenchLilac text-lg font-normal'}>
                For Journalists
              </div>
              <div className={'text-frenchLilac text-lg font-normal'}>
                Student Discount
              </div>
              <div className={'text-frenchLilac text-lg font-normal'}>
                Senior Discount
              </div>
            </div>
          </div>
          <div className={'flex flex-col gap-[length:27px]'}>
            <div
              className={'font-lora font-medium text-[length:25px] text-white'}
            >
              Social
            </div>
            <div className={'flex flex-col gap-[length:35px]'}>
              <div className={'text-frenchLilac text-lg font-normal'}>
                Facebook
              </div>
              <div className={'text-frenchLilac text-lg font-normal'}>
                Twitter
              </div>
              <div className={'text-frenchLilac text-lg font-normal'}>
                Linkedin
              </div>
              <div className={'text-frenchLilac text-lg font-normal'}>
                Email Us
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={'flex flex-col lg:flex-row justify-between gap-4 lg:gap-0'}
      >
        <div>Copyright 2010 - 2021 Examine Inc.</div>
        <div>Privacy Policy I Website Terms</div>
      </div>
    </div>
  );
};
