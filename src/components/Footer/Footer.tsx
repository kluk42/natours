import logoImgPath from '../../assets/logo-green-2x.png';
import { FloatColumn } from '../../layouts/FloatGrid/FloatColumn';
import { FloatRow } from '../../layouts/FloatGrid/FloatRow';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logoImgPath} alt="Full logo" className="footer__logo" />
      </div>
      <FloatRow>
        <FloatColumn className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </FloatColumn>
        <FloatColumn className="col-1-of-2">
          <p className="footer__copyright">
            Built by
            <a href="#" className="footer__link">
              Nikita Nemykin
            </a>
            for fun
          </p>
        </FloatColumn>
      </FloatRow>
    </footer>
  );
};
