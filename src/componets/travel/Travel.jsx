import travelImg1 from "./../../img/travel/travel-img-1.jpg";
import travelImg2 from "./../../img/travel/travel-img-2.jpg";
import travelImg3 from "./../../img/travel/travel-img-3.jpg";
import travelImg4 from "./../../img/travel/travel-img-4.jpg";
import travelImg5 from "./../../img/travel/travel-img-5.jpg";
import travelImg6 from "./../../img/travel/travel-img-6.jpg";
import travelImg7 from "./../../img/travel/travel-img-7.jpg";
import travelImg8 from "./../../img/travel/travel-img-8.jpg";
import travelImg9 from "./../../img/travel/travel-img-9.jpg";
import travelImg10 from "./../../img/travel/travel-img-10.jpg";
import travelImg11 from "./../../img/travel/travel-img-11.jpg";
import travelImg12 from "./../../img/travel/travel-img-12.jpg";
import travelImg13 from "./../../img/travel/travel-img-13.jpg";

function Travel() {
  return (
    <section className="photo section">
      <div className="container photo__container">
        <h2 className="section-title photo__title">Фотографии путешествий</h2>
        <p className="photo__text p-normal">
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <div className="photo__content">
          <div className="photo__block">
            <img
              className="photo__img"
              src={travelImg1}
              alt=""
            />
            <img
              className="photo__img  photo__img_desktop"
              src={travelImg2}
              alt=""
            />
            <img
              className="photo__img  photo__img_tablet"
              src={travelImg3}
              alt=""
            />
            <img
              className="photo__img"
              src={travelImg4}
              alt=""
            />
          </div>
          <div className="photo__block photo__block_big">
            <img
              className="photo__img"
              src={travelImg5}
              alt=""
            />
            <img
              className="photo__img  photo__img_tablet"
              src={travelImg6}
              alt=""
            />
            <img
              className="photo__img photo__img_desktop"
              src={travelImg7}
              alt=""
            />
            <img
              className="photo__img"
              src={travelImg8}
              alt=""
            />
            <img
              className="photo__img"
              src={travelImg9}
              alt=""
            />
          </div>
          <div className="photo__block photo__block_bottom">
            <img
              className="photo__img"
              src={travelImg10}
              alt=""
            />
            <img
              className="photo__img"
              src={travelImg11}
              alt=""
            />
            <img
              className="photo__img photo__img_tablet"
              src={travelImg12}
              alt=""
            />
            <img
              className="photo__img photo__img_desktop"
              src={travelImg13}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Travel;
