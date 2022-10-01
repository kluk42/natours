import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import './_grid.scss';

type Props = {
  className?: string;
};

export const FloatRow = (props: PropsWithChildren<Props>) => {
  return <div className={clsx(props.className, 'row')}>{props.children}</div>;
};
