import { PropsWithChildren } from 'react';
import './_grid.scss';

type Props = {
  className: 'col-1-of-2' | 'col-1-of-3' | 'col-2-of-3' | 'col-1-of-4' | 'col-3-of-4';
};

export const FloatColumn = ({ className, children }: PropsWithChildren<Props>) => {
  return <div className={className}>{children}</div>;
};
