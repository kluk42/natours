import { useState } from 'react';
import './Navigation.scss';

export enum NavigationLinks {
  About = 'about',
  Benefits = 'benefits',
  Tours = 'tours',
  Stories = 'stories',
  Booking = 'booking',
}

export const Navigation = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onAnchorClick = () => setIsChecked(false);
  return (
    <div className="navigation">
      <input
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a
              href={`#${NavigationLinks.About}`}
              className="navigation__link"
              onClick={onAnchorClick}
            >
              <span className="navigation__count">01 &nbsp;</span>About Natours
            </a>
          </li>
          <li className="navigation__item">
            <a
              href={`#${NavigationLinks.Benefits}`}
              className="navigation__link"
              onClick={onAnchorClick}
            >
              <span className="navigation__count">02 &nbsp;</span>Your benefits
            </a>
          </li>
          <li className="navigation__item">
            <a
              href={`#${NavigationLinks.Tours}`}
              className="navigation__link"
              onClick={onAnchorClick}
            >
              <span className="navigation__count">03 &nbsp;</span>Popular tours
            </a>
          </li>
          <li className="navigation__item">
            <a
              href={`#${NavigationLinks.Stories}`}
              className="navigation__link"
              onClick={onAnchorClick}
            >
              <span className="navigation__count">04 &nbsp;</span>Stories
            </a>
          </li>
          <li className="navigation__item">
            <a
              href={`#${NavigationLinks.Booking}`}
              className="navigation__link"
              onClick={onAnchorClick}
            >
              <span className="navigation__count">05 &nbsp;</span>Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
