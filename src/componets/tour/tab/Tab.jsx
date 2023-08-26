import React, { useCallback } from "react";
import classNames from "classnames";

import stylesText from "styles/text.module.scss";
import styles from "./Tab.module.scss";

const items = [
  { title: "Популярные" },
  { title: "Авторские" },
  { title: "Походы" },
  { title: "Сплавы" },
  { title: "Велопрогулки" },
];

const Tab = () => {
  const [active, setActive] = React.useState(0);

  const activeTab = useCallback((i) => {
    setActive(i);
  }, []);

  return (
    <div className={styles.list}>
      {items.map((n, i) => (
        <button
          className={classNames(stylesText.big, styles.item, {
            [styles.itemActive]: active === i,
          })}
          onClick={() => activeTab(i)}
          key={i}
        >
          {n.title}
        </button>
      ))}
    </div>
  );
};

export default Tab;
