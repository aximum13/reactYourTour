import storyImg1 from "./../../img/story/story-img-1.jpg";
import storyImg2 from "./../../img/story/story-img-2.jpg";
import storyImg3 from "./../../img/story/story-img-3.jpg";

function Story() {
  return (
    <section id="stories" className="story section">
      <div className="container story__container">
        <h2 className="section-title story__title">Истории путешествий</h2>
        <p className="story__text p-normal">
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <div className="story__block">
          <a href="#" className="story__card card story__card_1">
            <img
              className="card__img"
              src={storyImg1}
              alt=""
            />
            <div className="card__group card__group_top">
              <h3 className="section-subtitle card__title">
                Автостопом в Стамбул
              </h3>
              <p className="card__text p-normal">
                Идейные соображения высшего порядка, а также рамки и место
                обучения кадров обеспечивает широкому кругу (специалистов)
                участие в формировании новых предложений:
              </p>
              <ul className="card__list">
                <li className="card__item p-normal">вкусная еда</li>
                <li className="card__item p-normal">дешевый транспорт</li>
                <li className="card__item p-normal">красивый город.</li>
              </ul>
            </div>
            <div className="card__group card__group_bottom">
              <p className="card__link p-big">Подробнее</p>
              <object>
                <div className="card__social social">
                  <a href="#" className="social__link p-normal">
                    instagram
                  </a>
                  <a href="#" className="social__link p-normal">
                    facebook
                  </a>
                  <a href="#" className="social__link p-normal">
                    YouTube
                  </a>
                </div>
              </object>
            </div>
          </a>
          <a href="#" className="story__card card story__card_2">
            <img
              className="card__img"
              src={storyImg2}
              alt=""
            />
            <div className="card__group card__group_top">
              <h3 className="section-subtitle card__title">
                Автостопом в Стамбул
              </h3>
              <p className="card__text p-normal">
                Идейные соображения высшего порядка, а также рамки и место
                обучения кадров обеспечивает широкому кругу (специалистов)
                участие в формировании новых предложений.
              </p>
            </div>
            <div className="card__group card__group_bottom">
              <p className="card__link p-big">Подробнее</p>
              <object>
                <div className="card__social social">
                  <a href="#" className="social__link p-normal">
                    instagram
                  </a>
                  <a href="#" className="social__link p-normal">
                    ВКонтакте
                  </a>
                </div>
              </object>
            </div>
          </a>
          <a href="#" className="story__card card story__card_3">
            <img
              className="card__img"
              src={storyImg3}
              alt=""
            />
            <div className="card__group card__group_top">
              <h3 className="section-subtitle card__title">
                Автостопом в Стамбул
              </h3>
              <p className="card__text p-normal">
                Идейные соображения высшего порядка, а также рамки и место
                обучения кадров обеспечивает широкому кругу (специалистов)
                участие в формировании новых предложений.
              </p>
            </div>
            <div className="card__group card__group_bottom">
              <p className="card__link p-big">Подробнее</p>
              <object>
                <div className="card__social social">
                  <a href="#" className="social__link p-normal">
                    instagram
                  </a>
                  <a href="#" className="social__link p-normal">
                    facebook
                  </a>
                  <a href="#" className="social__link p-normal">
                    ВКонтакте
                  </a>
                </div>
              </object>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Story;
