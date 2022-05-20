import React from 'react';

interface TextFieldProps {
  type: 'text' | 'password';
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
}
export const TextField = (props: TextFieldProps) => {
  const [isShow, setIsShow] = React.useState<boolean>(false);

  const togglePassword = () => setIsShow(!isShow);

  return (
    <div className={'w-full h-[length:46px] relative'}>
      <input
        aria-label={props.label}
        className={
          'h-[length:46px] px-4 py-2 text-xl w-full text-black placeholder-paleSky border-ghost border-[length:1px] border-solid rounded-md'
        }
        type={props.type === 'password' && !isShow ? 'password' : 'text'}
        placeholder={props.placeholder}
      />
      {props.type === 'password' && (
        <button
          className={`text-[length:13px] absolute right-[length:16.68px] bottom-0 font-bold ${
            isShow ? 'text-affair' : 'text-bossanova'
          }`}
          onClick={togglePassword}
        >
          SHOW
        </button>
      )}
    </div>
  );
};
