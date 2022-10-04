import logoPath from '../../assets/logo-white.png';
import { Button, ButtonColorTypes } from '../Button/Button';
import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logoPath} alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary_main">Outdoors</span>
          <span className="heading-primary_sub">is where life happens</span>
        </h1>
        <Button colorType={ButtonColorTypes.White} title="Discover our tours" />
      </div>
    </header>
  );
}
