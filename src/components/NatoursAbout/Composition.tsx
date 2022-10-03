import firstImgPath from '../../assets/nat-1-large.jpg';
import secondImgPath from '../../assets/nat-2-large.jpg';
import thirdImgPath from '../../assets/nat-3-large.jpg';

import './Composition.scss';

export const Composition = () => {
  return (
    <div className="composition">
      <img src={firstImgPath} alt="Photo 1" className="composition__photo composition__photo_p1" />
      <img src={secondImgPath} alt="Photo 2" className="composition__photo composition__photo_p2" />
      <img src={thirdImgPath} alt="Photo 3" className="composition__photo composition__photo_p3" />
    </div>
  );
};
