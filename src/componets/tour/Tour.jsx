import Tab from "./Tab";
import TourCard from "./TourCard";

const Tour = () => {
  return (
    <section id="tours" className="tour section">
      <div className="container tour__container">
        <h2 className="section-title tour__title">Выбери свой тур</h2>
        <div className="tour__tabs">
          <Tab />
          <TourCard />
        </div>
      </div>
    </section>
  );
};

export default Tour;
