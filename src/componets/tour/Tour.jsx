import { Container } from "componets/container/Container";
import { Section } from "componets/section/Section";
import { SectionTitle } from "componets/section/sectionTitle/sectionTitle";
import Tab from "./tab/Tab";
import TourCard from "./tourCard/TourCard";

import styles from "./Tour.module.scss";

const Tour = () => {
  return (
    <Section id="tours" className={styles.tour}>
      <Container>
        <SectionTitle>Выбери свой тур</SectionTitle>
        <div className={styles.tabs}>
          <Tab />
          <TourCard />
        </div>
      </Container>
    </Section>
  );
};

export default Tour;
