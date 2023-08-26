import classNames from "classnames";
import styles from "./Section.module.scss";

export const Section = ({ children, className, id }) => (
  <section id={id} className={classNames(styles.root, className)}>
    {children}
  </section>
);
