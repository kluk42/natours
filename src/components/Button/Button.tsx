import clsx from 'clsx';
import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import './Button.scss';

export enum ButtonColorTypes {
  White = 'white',
  Green = 'green',
}

type Props = {
  title: string;
  colorType: ButtonColorTypes;
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const Button: FC<Props> = ({ title, className, colorType, ...props }) => {
  return (
    <a
      href="#"
      className={clsx(`btn btn_colorType_${colorType}`, 'btn_animated', className)}
      {...props}
    >
      {title}
    </a>
  );
};
