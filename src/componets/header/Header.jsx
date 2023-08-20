import React, { useState } from "react";
import logoImg from "./../../img/icons/logo.png";

const Header = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  const handleScroll = () => {
    let scrollNew = window.scrollY;
    let outerWidth = window.outerWidth;

    const scrollIsDown = function () {
      if (outerWidth > 450) {
        if (scrollNew > 450) {
          return true;
        }
      } else return false;
    };

    const scrollIsUp = function () {
      if (outerWidth > 450) {
        if (scrollNew > 200 && scrollNew < 450) {
          return true;
        }
      } else return false;
    };

    setScrollDown(scrollIsDown);
    setScrollUp(scrollIsUp);
  };

  window.addEventListener("scroll", handleScroll);

  const links = [
    { title: "Туры", id: "tours" },
    { title: "Создать тур", id: "request" },
    { title: "Отзывы", id: "reviews" },
    { title: "Истории", id: "stories" },
  ];

  function smoothScroll(id) {
    const element = document.getElementById(id);
    const yOffset = -100;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <header
      className={
        scrollDown ? "header fixed" : scrollUp ? "header no-fixed" : "header"
      }
    >
      <div className="container header__container">
        <div className="header__logo logo">
          <a href="/" className="logo__link">
            <img src={logoImg} alt="YourTour" className="logo__img" />
          </a>
        </div>
        <nav className="header__menu menu tablet">
          <ul className="menu__list">
            {links.map((item, i) => (
              <li key={i} className="menu__item">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll(item.id);
                  }}
                  href={"#" + item.id}
                  className="menu__link"
                >
                  {item.title}
                </a>
              </li>
            ))}
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
};

export default Header;
