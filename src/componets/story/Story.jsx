import storyImg1 from "img/story/story-img-1.jpg";
import storyImg2 from "img/story/story-img-2.jpg";
import storyImg3 from "img/story/story-img-3.jpg";

import styles from "./Story.module.scss";

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

const Story = () => {
  return (
    <section id="stories" className={styles.story + " section"}>
      <div className="container">
        <h2 className="section-title">Истории путешествий</h2>
        <p className={styles.subtitle + "  p-normal"}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <div className={styles.block}>
          {stories.map((el, i) => (
            <a key={i} href="/#" className={styles.card}> 
              <img className={styles.img} src={el.img} alt="" />
              <div className={styles.group + " " + styles.groupTop}>
                <h3 className={styles.title + " section-subtitle"}>
                  {el.title}
                </h3>
                <p className={styles.text + " p-normal"}>{el.text}</p>
                {el.item.length > 0 ? (
                  <ul className={styles.list}>
                    {el.item.map((el, i) => (
                      <li key={i} className={styles.item + " p-normal"}>
                        {el}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className={styles.group + " " + styles.groupBottom}>
                <p className={styles.link + " p-big"}>Подробнее</p>
                <object>
                  <div className={styles.social}>
                    <a href="/#" className={styles.linkSocial + " p-normal"}>
                      Instagram
                    </a>
                    <a href="/#" className={styles.linkSocial + " p-normal"}>
                      Facebook
                    </a>
                    <a href="/#" className={styles.linkSocial + " p-normal"}>
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
