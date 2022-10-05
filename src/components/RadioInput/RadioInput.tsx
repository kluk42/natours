import clsx from 'clsx';
import { DetailedHTMLProps } from 'react';

import './RadioInput.scss';

type Props = Omit<
  DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'type'
> & {
  label: string;
};

export const RadioInput = ({ label, className, ...props }: Props) => {
  return (
    <div className="radio-input">
      <input type="radio" className={clsx('radio-input__input', className)} {...props} />
      <label htmlFor={props.id} className="radio-input__label">
        <span className="radio-input__radio-button" />
        {label}
      </label>
    </div>
  );
};
