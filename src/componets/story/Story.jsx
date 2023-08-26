import classNames from "classnames";
import { Container } from "componets/container/Container";
import { Section } from "componets/section/Section";
import { SectionTitle } from "componets/section/sectionTitle/sectionTitle";
import { SectionSubtitle } from "componets/section/sectionSubtitle/sectionSubtitle";

import storyImg1 from "img/story/story-img-1.jpg";
import storyImg2 from "img/story/story-img-2.jpg";
import storyImg3 from "img/story/story-img-3.jpg";

import stylesText from "styles/text.module.scss";
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
    <Section id="stories" className={styles.story}>
      <Container>
        <SectionTitle>Истории путешествий</SectionTitle>
        <p className={classNames(styles.subtitle, stylesText.normal)}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <div className={styles.block}>
          {stories.map((el, i) => (
            <a key={i} href="/#" className={styles.card}>
              <img className={styles.img} src={el.img} alt="" />
              <div className={classNames(styles.group, styles.groupTop)}>
                <SectionSubtitle className={classNames(styles.title)}>
                  {el.title}
                </SectionSubtitle>
                <p className={classNames(styles.text, stylesText.normal)}>
                  {el.text}
                </p>
                {el.item.length > 0 ? (
                  <ul className={styles.list}>
                    {el.item.map((el, i) => (
                      <li
                        key={i}
                        className={classNames(styles.item, stylesText.normal)}
                      >
                        {el}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className={classNames(styles.group, styles.groupBottom)}>
                <p className={classNames(styles.link, stylesText.big)}>
                  Подробнее
                </p>
                <div className={styles.social}>
                  <a
                    href="/#"
                    className={classNames(styles.linkSocial, stylesText.normal)}
                  >
                    Instagram
                  </a>
                  <a
                    href="/#"
                    className={classNames(styles.linkSocial, stylesText.normal)}
                  >
                    Facebook
                  </a>
                  <a
                    href="/#"
                    className={(styles.linkSocial, stylesText.normal)}
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Story;
