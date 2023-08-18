import logoImg from './../../img/icons/logo.png'
// import './header.css'


function Header () {
    return (
		<header className="header">
  <div className="container header__container">
    <div className="header__logo logo">
      <a href="/" className="logo__link">
        <img src={logoImg} alt="YourTour" className="logo__img" />
      </a>
    </div>
    <nav className="header__menu menu tablet">
      <ul className="menu__list">
        <li className="menu__item">
          {" "}
          <a href="#tours" className="menu__link">
            {" "}
            Туры
          </a>
        </li>
        <li className="menu__item">
          {" "}
          <a href="#request" className="menu__link">
            {" "}
            Создать тур
          </a>
        </li>
        <li className="menu__item">
          {" "}
          <a href="#reviews" className="menu__link">
            {" "}
            Отзывы
          </a>
        </li>
        <li className="menu__item">
          {" "}
          <a href="#stories" className="menu__link">
            {" "}
            Истории
          </a>
        </li>
      </ul>
    </nav>
    <div className="header__tel tel">
      <a href="tel:79999999999" className="tel__link">
        +7 999 999 99 99
      </a>
    </div>
  </div>
</header>

	);
}

export default Header;