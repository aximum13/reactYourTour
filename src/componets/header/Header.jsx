import React, { useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { Container } from "componets/container/Container";
import smoothScroll from "utils/smoothScroll";

import logoImg from "img/icons/logo.png";

import styles from "./Header.module.scss";

const links = [
  { title: "Туры", id: "tours" },
  { title: "Создать тур", id: "request" },
  { title: "Отзывы", id: "reviews" },
  { title: "Истории", id: "stories" },
];

const Header = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  const handleScroll = useCallback(() => {
    let scrollNew = window.scrollY;
    let outerWidth = window.outerWidth;

    const scrollIsDown = () => {
      if (outerWidth > 450) {
        if (scrollNew > 450) {
          return true;
        }
      }
    };

    const scrollIsUp = () => {
      if (outerWidth > 450) {
        if (scrollNew > 200 && scrollNew < 450) {
          return true;
        }
      }
    };

    setScrollDown(scrollIsDown());
    setScrollUp(scrollIsUp());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={classNames(
        styles.header,
        { [styles.fixed]: scrollDown },
        { [styles.noFixed]: scrollUp }
      )}
    >
      <Container className={styles.container}>
        <div>
          <a href="/">
            <img src={logoImg} alt="YourTour" className={styles.logoImg} />
          </a>
        </div>
        <nav className={classNames(styles.menu, styles.tablet)}>
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
      </Container>
    </header>
  );
};

export default Header;
