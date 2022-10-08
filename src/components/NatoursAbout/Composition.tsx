import firstLargeImgPath from '../../assets/nat-1-large.jpg';
import firstSmallImagePath from '../../assets/nat-1.jpg';
import secondImgLargePath from '../../assets/nat-2-large.jpg';
import secondImgSmallPath from '../../assets/nat-2.jpg';
import thirdImgLargePath from '../../assets/nat-3-large.jpg';
import thirdImgSmallPath from '../../assets/nat-3.jpg';

import './Composition.scss';

export const Composition = () => {
  return (
    <div className="composition">
      <img
        alt="Photo 1"
        src={firstLargeImgPath}
        srcSet={`${firstSmallImagePath} 300w, ${firstLargeImgPath} 1000w`}
        sizes="(max-width: 900px) 20vw, (max-widht: 600px) 30vw, 300px)"
        className="composition__photo composition__photo_p1"
      />
      <img
        alt="Photo 2"
        src={secondImgSmallPath}
        srcSet={`${secondImgSmallPath} 300w, ${secondImgLargePath} 1000w`}
        sizes="(max-width: 900px) 20vw, (max-widht: 600px) 30vw, 300px)"
        className="composition__photo composition__photo_p2"
      />
      <img
        alt="Photo 3"
        src={thirdImgSmallPath}
        srcSet={`${thirdImgSmallPath} 300w, ${thirdImgLargePath} 1000w`}
        sizes="(max-width: 900px) 20vw, (max-widht: 600px) 30vw, 300px)"
        className="composition__photo composition__photo_p3"
      />
    </div>
  );
};
