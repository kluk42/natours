import { PropsWithChildren } from 'react';
import './_grid.scss';

export const FloatRow = (props: PropsWithChildren) => {
  return <div className="row">{props.children}</div>;
};
