import storyImg1 from "./../../img/story/story-img-1.jpg";
import storyImg2 from "./../../img/story/story-img-2.jpg";
import storyImg3 from "./../../img/story/story-img-3.jpg";

const Story = () => {
  const stories = [
    {
      title: "Автостопом в Стамбул",
      text: "Идейные соображения высшего порядка, а также рамки и место кадров обеспечивает широкому кругу (специалистов) в формировании новых предложений:",
      item: ["вкусная еда", "дешевый транспорт", "красивый город."],
      img: storyImg1,
    },
    {
      title: "Автостопом в Стамбул",
      text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
      item: [],
      img: storyImg2,
    },
    {
      title: "Автостопом в Стамбул",
      text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
      item: [],
      img: storyImg3,
    },
  ];
  return (
    <section id="stories" className="story section">
      <div className="container story__container">
        <h2 className="section-title story__title">Истории путешествий</h2>
        <p className="story__text p-normal">
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <div className="story__block">
          {stories.map((el, i) => (
            <a key={i} href="#" className="story__card card story__card_1">
              <img className="card__img" src={el.img} alt="" />
              <div className="card__group card__group_top">
                <h3 className="section-subtitle card__title">{el.title}</h3>
                <p className="card__text p-normal">{el.text}</p>
                {el.item.length > 0 ? (
                  <ul className="card__list">
                    {el.item.map((el, i) => (
                      <li key={i} className="card__item p-normal">
                        {el}
                      </li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
