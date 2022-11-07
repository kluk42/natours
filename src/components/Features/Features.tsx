import '../../assets/fonts/icon-font/styles.css';

import '../../sass/base/_typography.scss';
import { NavigationLinks } from '../Navigation/Navigation';
import './Features.scss';

export const Features = () => {
  return (
    <section id={NavigationLinks.Benefits} className="section-features">
      <div className="section-features__content">
        <div className="feature-box">
          <i className="feature-box__icon icon-basic-world" />
          <h3 className="heading-tertiary feature-box__heading">Explore the world</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus et non mollitia.
          </p>
        </div>
        <div className="feature-box">
          <i className="feature-box__icon icon-basic-compass" />
          <h3 className="heading-tertiary">Meet nature</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus et non mollitia.
          </p>
        </div>
        <div className="feature-box">
          <i className="feature-box__icon icon-basic-map" />
          <h3 className="heading-tertiary">Find your way</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus et non mollitia.
          </p>
        </div>
        <div className="feature-box">
          <i className="feature-box__icon icon-basic-heart" />
          <h3 className="heading-tertiary">Live a healthier life</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus et non mollitia.
          </p>
        </div>
      </div>
    </section>
  );
};
