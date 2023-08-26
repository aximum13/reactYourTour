import classNames from "classnames";
import styles from "./sectionTitle.module.scss";

export const SectionTitle = ({ children, className }) => (
  <h2 className={classNames(styles.root, className)}>{children}</h2>
);
