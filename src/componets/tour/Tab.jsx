import React from "react";
import styles from "./Tab.module.scss";

const Tab = () => {
  const items = [
    { title: "Популярные" },
    { title: "Авторские" },
    { title: "Походы" },
    { title: "Сплавы" },
    { title: "Велопрогулки" },
  ];

  const [active, setActive] = React.useState(0);

  const activeTab = (e) => setActive(+e.target.dataset.index);

  return (
    <div className={styles.list}>
      {items.map((n, i) => (
        <button
          className={
            i === active
              ? "p-big " + styles.itemActive + " " + styles.item
              : "p-big " + styles.item
          }
          onClick={activeTab}
          data-index={i}
          key={i}
        >
          {n.title}
        </button>
      ))}
    </div>
  );
};

export default Tab;
