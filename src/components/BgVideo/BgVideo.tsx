import { SourceHTMLAttributes } from 'react';

import './BgVideo.scss';

export type Video = {
  src: string;
  type: SourceHTMLAttributes<HTMLSourceElement>['type'];
};

type Props = { videos: Video[] };

export const BgVideo = (props: Props) => {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        {props.videos.map((v, i) => (
          <source key={String(v.src)} src={v.src} type={v.type} />
        ))}
        Your browser is not supported
      </video>
    </div>
  );
};
