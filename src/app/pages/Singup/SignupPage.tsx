import React from 'react';
import { AuthForm } from '../../components/AuthForm';

export const SignupPage = () => {
  return (
    <div
      className={
        'pt-[length:30px] px-[length:24px] mb-[length:240px] lg:px-0  lg:pt-[length:108px] flex justify-center'
      }
    >
      <AuthForm type={'signup'} />
    </div>
  );
};
