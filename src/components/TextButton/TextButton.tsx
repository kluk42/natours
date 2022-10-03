import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import './TextButton.scss';

type Props = {
  title: string;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const TextButton: FC<Props> = ({ title, className, ...props }) => {
  return (
    <button className={clsx('btn-text', className)} {...props}>
      {title}
    </button>
  );
};
