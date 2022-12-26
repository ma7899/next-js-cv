import { HTMLProps } from 'react';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: any;
  styles?: string;
}

const HeaderButton = ({ children, styles, ...props }: ButtonProps) => {
  return (
    //@ts-ignore
    <button
      autoFocus
      // {...props}
      className={`relative border p-2 border-white rounded-lg font-semibold tracking-wider text-white w-full h-full
    hover:shadow-lg hover:shadow-gray-300 hover:scale-110
    transition-all ${styles}`}
    >
      {children}
    </button>
  );
};

export default HeaderButton;
