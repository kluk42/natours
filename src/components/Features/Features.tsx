import '../../assets/fonts/icon-font/styles.css';
import { FloatColumn } from '../../layouts/FloatGrid/FloatColumn';
import { FloatRow } from '../../layouts/FloatGrid/FloatRow';

import '../../sass/base/_typography.scss';
import './Features.scss';

export const Features = () => {
  return (
    <section className="section-features">
      <FloatRow>
        <FloatColumn className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world" />
            <h3 className="heading-tertiary feature-box__heading">Explore the world</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus et non
              mollitia.
            </p>
          </div>
        </FloatColumn>
        <FloatColumn className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass" />
            <h3 className="heading-tertiary">Meet nature</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus et non
              mollitia.
            </p>
          </div>
        </FloatColumn>
        <FloatColumn className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map" />
            <h3 className="heading-tertiary">Find your way</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus et non
              mollitia.
            </p>
          </div>
        </FloatColumn>
        <FloatColumn className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-heart" />
            <h3 className="heading-tertiary">Live a healthier life</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus et non
              mollitia.
            </p>
          </div>
        </FloatColumn>
      </FloatRow>
    </section>
  );
};
