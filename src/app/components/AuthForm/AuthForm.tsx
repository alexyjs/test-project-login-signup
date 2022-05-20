import React from 'react';
import GoogleIcon from '../../assets/icons/google.svg';
import AppleIcon from '../../assets/icons/apple.svg';
import FacebookIcon from '../../assets/icons/fb.svg';
import { TextField } from '../TextField';

interface AuthFormProps {
  type: 'login' | 'signup';
}
export const AuthForm = (props: AuthFormProps) => {
  const { type } = props;
  return (
    <div
      className={
        'flex flex-col gap-[length:50px] relative lg:p-[length:75px] w-[length:650px] text-center justify-center font-medium text-[length:40px] text-shark lg:shadow-auth-box rounded-3xl'
      }
    >
      <div className={'flex flex-col gap-[length:7px]'}>
        <p className={'font-lora'}>Welcome back! 👋</p>
        <p className={'text-paleSky text-lg font-normal'}>
          Lets build something great
        </p>
      </div>
      <div className={'w-full h-full flex flex-col gap-[length:25px]'}>
        <div className={'flex flex-col gap-[length:21px]'}>
          <div
            className={'w-full flex flex-row gap-[length:16px] justify-center'}
          >
            <div
              className={
                'shadow-social-box h-[length:53.32px] w-[length:68px] flex justify-center rounded-lg cursor-pointer hover:opacity-50'
              }
            >
              <img
                alt={'google'}
                src={GoogleIcon}
                height={23.18}
                width={23.18}
              />
            </div>
            <div
              className={
                'shadow-social-box h-[length:53.32px] w-[length:68px] flex justify-center rounded-lg cursor-pointer hover:opacity-50'
              }
            >
              <img alt={'apple'} src={AppleIcon} width={19.52} height={23.21} />
            </div>
            <div
              className={
                'shadow-social-box h-[length:53.32px] w-[length:68px] flex justify-center rounded-lg cursor-pointer hover:opacity-50'
              }
            >
              <img
                alt={'facebook'}
                src={FacebookIcon}
                height={44.82}
                width={14.68}
              />
            </div>
          </div>
          <div
            className={
              'w-full h-[length:22px] flex flex-row gap-[length:24px] justify-center relative'
            }
          >
            <div className={'w-full h-full flex justify-center'}>
              <div
                className={'h-[length:1px] bg-catskillWhite w-full my-auto'}
              ></div>
            </div>
            <div className={'text-sm text-paleSky font-normal'}>OR</div>
            <div className={'w-full h-full flex justify-center'}>
              <div
                className={'h-[length:1px] bg-catskillWhite w-full my-auto'}
              ></div>
            </div>
          </div>
        </div>
        <div className={'flex flex-col gap-[length:30px] w-full h-full'}>
          {type === 'signup' && (
            <TextField
              type={'text'}
              label={'Full name'}
              placeholder={'Full name'}
            />
          )}
          <TextField type={'text'} label={'Email'} placeholder={'Email'} />
          <TextField
            type={'password'}
            label={'Password'}
            placeholder={'Password'}
          />
          {type === 'login' ? (
            <button
              className={
                'w-full h-[length:60px] mt-3 bg-affair text-white text-center text-xl font-normal rounded-md cursor-pointer'
              }
            >
              Login
            </button>
          ) : (
            <button
              className={
                'w-full h-[length:60px] mt-3 bg-affair text-white text-center text-xl font-normal rounded-md cursor-pointer'
              }
            >
              Start your 2-week free trial!
            </button>
          )}
          {type === 'login' && (
            <div
              className={
                'flex flex-col px-[length:46px] py-[length:14px] rounded-lg border-dashed border-[length:1px] border-easternBlue bg-easternBlue/10 text-elm'
              }
            >
              <p className={'text-lg font-lora font-normal'}>Click here</p>
              <p className={'text-sm font-lora font-normal'}>
                to sign up for the complete Examine Membership. Includes a free
                2 week trial!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
