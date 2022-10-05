import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import './Button.scss';

export enum ButtonColorTypes {
  White = 'white',
  Green = 'green',
}

type Props = {
  title: string;
  colorType: ButtonColorTypes;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: FC<Props> = ({ title, className, colorType, ...props }) => {
  return (
    <button
      className={clsx(`btn btn_colorType_${colorType}`, 'btn_animated', className)}
      {...props}
    >
      {title}
    </button>
  );
};
