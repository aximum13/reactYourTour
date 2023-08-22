import React, { useState } from "react";
import logoImg from "img/icons/logo.png";
import styles from './Header.module.scss'

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

  console.log(styles)

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
        scrollDown
          ? styles.header + " " + styles.fixed
          : scrollUp
          ? styles.header + " " + styles.noFixed
          : styles.header
      }
    >
      <div className={styles.container + " container"}>
        <div>
          <a href="/">
            <img src={logoImg} alt="YourTour" className={styles.logoImg} />
          </a>
        </div>
        <nav className={styles.menu + " " + styles.tablet}>
          <ul className={styles.menuList}>
            {links.map((item, i) => (
              <li key={i}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll(item.id);
                  }}
                  href={"#" + item.id}
                  className={styles.menuLink}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <a href="tel:79999999999" className={styles.telLink}>
            +7 999 999 99 99
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
