import clsx from 'clsx';
import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import './Button.scss';

type Props = {
  title: string;
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const Button: FC<Props> = ({ title, className, ...props }) => {
  return (
    <a href="#" className={clsx('btn btn_white btn_animated', className)} {...props}>
      {title}
    </a>
  );
};
