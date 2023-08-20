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

const Travel = () => {
  const photos = [
    { type: "mobile", img: travelImg1 },
    { type: "desktop", img: travelImg2 },
    { type: "tablet", img: travelImg3 },
    { type: "mobile", img: travelImg4 },
    { type: "mobile", img: travelImg5 },
    { type: "tablet", img: travelImg6 },
    { type: "desktop", img: travelImg7 },
    { type: "mobile", img: travelImg8 },
    { type: "mobile", img: travelImg9 },
    { type: "mobile", img: travelImg10 },
    { type: "mobile", img: travelImg11 },
    { type: "tablet", img: travelImg12 },
    { type: "desktop", img: travelImg13 },
  ];

  const topPhotos = photos.filter((img, index) => index < 4);
  const middlePhotos = photos.filter((img, index) => index >= 4 && index < 9);
  const bottomPhotos = photos.filter((img, index) => index >= 9 && index < 13);

  function photoAdaptive(type) {
    if (type === "desktop") return "photo__img photo__img_desktop";
    else if (type === "tablet") return "photo__img photo__img_tablet";
    else return "photo__img";
  }

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
            {topPhotos.map((el, i) => (
              <img
                key={i}
                className={photoAdaptive(el.type)}
                src={el.img}
                alt=""
              />
            ))}
          </div>
          <div className="photo__block photo__block_big">
            {middlePhotos.map((el, i) => (
              <img
                key={i}
                className={photoAdaptive(el.type)}
                src={el.img}
                alt=""
              />
            ))}
          </div>
          <div className="photo__block photo__block_bottom">
            {bottomPhotos.map((el, i) => (
              <img
                key={i}
                className={photoAdaptive(el.type)}
                src={el.img}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
