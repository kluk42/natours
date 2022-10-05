import clsx from 'clsx';
import { DetailedHTMLProps } from 'react';

import './Input.scss';

type Props = DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label: string;
};

export const Input = ({ className, type, ...props }: Props) => {
  return (
    <div className="input">
      <input type={type ?? 'text'} className={clsx('input__field', className)} {...props} />
      <label htmlFor={props.id} className="input__label">
        {props.label}
      </label>
    </div>
  );
};
