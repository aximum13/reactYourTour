import Tab from "./Tab";
import TourCard from "./TourCard";
import styles from "./Tour.module.scss"

const Tour = () => {
  return (
    <section id="tours" className={styles.tour + " section"}>
      <div className={styles.container + " container"}>
        <h2 className="section-title">Выбери свой тур</h2>
        <div className={styles.tabs}>
          <Tab />
          <TourCard />
        </div>
      </div>
    </section>
  );
};

export default Tour;
