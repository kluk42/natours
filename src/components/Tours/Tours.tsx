import { useState } from 'react';
import { FloatColumn } from '../../layouts/FloatGrid/FloatColumn';
import { FloatRow } from '../../layouts/FloatGrid/FloatRow';
import '../../sass/base/_typography.scss';
import { Button, ButtonColorTypes } from '../Button/Button';
import { NavigationLinks } from '../Navigation/Navigation';
import { Popup } from '../Popup/Popup';
import './Tours.scss';

export const Tours = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => setIsPopupVisible(isVisible => !isVisible);

  return (
    <>
      <Popup isVisible={isPopupVisible} onClose={() => setIsPopupVisible(false)} />
      <section id={NavigationLinks.Tours} className="section-tours">
        <h2 className="heading-secondary section-tours__heading">Most popular tours</h2>
        <FloatRow>
          <FloatColumn className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side_front card__side_front-1">
                <div className="card__picture card__picture_image_1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-text-wrapper card__heading-text-wrapper_card_1">
                    The Sea explorer
                  </span>
                </h4>
                <div className="card__details">
                  <ul className="card__details-list">
                    <li className="card__details-list-item">3 day tour</li>
                    <li className="card__details-list-item">up to 30 people</li>
                    <li className="card__details-list-item">2 tour guides</li>
                    <li className="card__details-list-item">Sleep in cozy hotels</li>
                    <li className="card__details-list-item">Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side_back card__side_back-1">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">&#36;297</p>
                  <Button
                    colorType={ButtonColorTypes.White}
                    title="Book now!"
                    onClick={togglePopup}
                  />
                </div>
              </div>
            </div>
          </FloatColumn>
          <FloatColumn className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side_front card__side_front-2">
                <div className="card__picture card__picture_image_2">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-text-wrapper card__heading-text-wrapper_card_2">
                    The forest hiker
                  </span>
                </h4>
                <div className="card__details">
                  <ul className="card__details-list">
                    <li className="card__details-list-item">7 days tour</li>
                    <li className="card__details-list-item">up to 40 people</li>
                    <li className="card__details-list-item">6 tour guides</li>
                    <li className="card__details-list-item">Sleep in provided tents</li>
                    <li className="card__details-list-item">Difficulty: medium</li>
                  </ul>
                </div>
              </div>
              <div className="card__side  card__side_back card__side_back-2">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">&#36;897</p>
                  <Button
                    colorType={ButtonColorTypes.White}
                    title="Book now!"
                    onClick={togglePopup}
                  />
                </div>
              </div>
            </div>
          </FloatColumn>
          <FloatColumn className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side_front card__side_front-3">
                <div className="card__picture card__picture_image_3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-text-wrapper card__heading-text-wrapper_card_3">
                    The snow adventurer
                  </span>
                </h4>
                <div className="card__details">
                  <ul className="card__details-list">
                    <li className="card__details-list-item">5 days tour</li>
                    <li className="card__details-list-item">up to 15 people</li>
                    <li className="card__details-list-item">3 tour guides</li>
                    <li className="card__details-list-item">Sleep in provided tents</li>
                    <li className="card__details-list-item">Difficulty: hard</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side_back card__side_back-3">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">&#36;297</p>
                  <Button
                    colorType={ButtonColorTypes.White}
                    title="Book now!"
                    onClick={togglePopup}
                  />
                </div>
              </div>
            </div>
          </FloatColumn>
        </FloatRow>
        <Button
          title="Discover all tours"
          className="section-tours__see-more-btn"
          colorType={ButtonColorTypes.Green}
        />
      </section>
    </>
  );
};
