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
    { img: travelImg1 },
    { img: travelImg2 },
    { img: travelImg3 },
    { img: travelImg4 },
    { img: travelImg5 },
    { img: travelImg6 },
    { img: travelImg7 },
    { img: travelImg8 },
    { img: travelImg9 },
    { img: travelImg10 },
    { img: travelImg11 },
    { img: travelImg12 },
    { img: travelImg13 },
  ];

  const topPhotos = photos.filter((img, index) => index < 4)
  const middlePhotos = photos.filter((img, index) => index >= 4 && index < 9)
  const bottomPhotos = photos.filter((img, index) => index >= 9 && index < 13)

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
              <img key={i} className="photo__img" src={el.img} alt="" />
            ))}
          </div>
          <div className="photo__block photo__block_big">
            {middlePhotos.map((el, i) => (
              <img key={i} className="photo__img" src={el.img} alt="" />
            ))}
          </div>
          <div className="photo__block photo__block_bottom">
            {bottomPhotos.map((el, i) => (
              <img key={i} className="photo__img" src={el.img} alt="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
