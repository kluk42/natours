import firstImgPAth from '../../assets/nat-8.jpg';
import secondImgPAth from '../../assets/nat-9.jpg';
import { Button, ButtonColorTypes } from '../Button/Button';

import clsx from 'clsx';
import '../../sass/base/_typography.scss';
import './Popup.scss';

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

export const Popup = ({ isVisible, onClose }: Props) => {
  return (
    <div className={clsx('popup', { popup__visible: isVisible })}>
      <div className="popup__content">
        <div className="popup__left">
          <img src={firstImgPAth} alt="Popup image" className="popup__img" />
          <img src={secondImgPAth} alt="Popup image" className="popup__img" />
        </div>
        <div className="popup__right">
          <button className="popup__close" onClick={onClose}>
            &times;
          </button>
          <h2 className="heading-secondary popup__popup-heading">Start booking now</h2>
          <h3 className="heading-tertiary popup__text-heading">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi quis
            hendrerit dolor magna. Netus et malesuada fames ac turpis. Mi bibendum neque egestas
            congue quisque. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Quis varius
            quam quisque id diam vel quam. Eu consequat ac felis donec et odio pellentesque. Tellus
            mauris a diam maecenas. Euismod elementum nisi quis eleifend quam adipiscing vitae
            proin. Elit pellentesque habitant morbi tristique. Mattis molestie a iaculis at. Amet
            luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Dolor sit amet
            consectetur adipiscing elit. Lectus urna duis convallis convallis tellus id interdum
            velit. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl.
            Ullamcorper malesuada proin libero nunc consequat. Sollicitudin tempor id eu nisl nunc
            mi ipsum faucibus. Nec ultrices dui sapien eget mi proin sed libero enim. Tristique
            sollicitudin nibh sit amet commodo nulla.
          </p>
          <Button colorType={ButtonColorTypes.Green} title="Book now" />
        </div>
      </div>
    </div>
  );
};
