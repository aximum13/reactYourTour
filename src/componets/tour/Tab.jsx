import React from "react";

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
    <div className="tabs__list">
      <div className="tabs__list">
        {items.map((n, i) => (
          <button
            className={`tabs__item p-big ${
              i === active ? "tabs__item_active" : ""
            }`}
            onClick={activeTab}
            data-index={i}
            key={i}
          >
            {n.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tab;
