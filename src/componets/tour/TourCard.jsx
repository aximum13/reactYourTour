import tourImg1 from "./../../img/tour/tour-img-1.jpg";
import tourImg2 from "./../../img/tour/tour-img-2.jpg";
import tourImg3 from "./../../img/tour/tour-img-3.jpg";
import tourImg4 from "./../../img/tour/tour-img-4.jpg";
import tourImg5 from "./../../img/tour/tour-img-5.jpg";
import tourImg6 from "./../../img/tour/tour-img-6.jpg";

const TourCard = () => {
  const tours = [
    { title: "Путешествие в горы", price: "от 80 000 руб", img: tourImg1 },
    { title: "Путешествие в горы", price: "от 80 000 руб", img: tourImg2 },
    { title: "Путешествие в горы", price: "от 80 000 руб", img: tourImg3 },
    { title: "Путешествие в горы", price: "от 80 000 руб", img: tourImg4 },
    { title: "Путешествие в горы", price: "от 80 000 руб", img: tourImg5 },
    { title: "Путешествие в горы", price: "от 80 000 руб", img: tourImg6 },
  ];
  return (
    <div className="tabs__content">
      <div className="tabs__block">
        {tours.map((el, i) => (
          <a key={i} href="#" className="tabs__card card">
            <img className="card__img" src={el.img} alt="" />
            <div className="card__group">
              <h3 className="card__title section-subtitle">{el.title}</h3>
              <p className="card__text p-small">{el.price}</p>
            </div>
            <p className="card__link p-big">Подробнее</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TourCard;
