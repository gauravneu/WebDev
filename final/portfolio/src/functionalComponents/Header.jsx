import '../static/css/Header.css'
import Navigation from './Navigation';
import Logo from '../static/images/logo.jpg'

function Header({ navClick }) {
  return (
    <header className="header">
      <img
        src={Logo}
        className="header__logo"
        alt="Portfolio Logo"
      />
      <h1 className="header__title">
        Gaurav Srivastava
      </h1>
      <Navigation navClick={navClick} className="header__nav" />
     </header>
  );
}

export default Header;