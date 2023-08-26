import classNames from "classnames";
import styles from "./sectionSubtitle.module.scss";

export const SectionSubtitle = ({ children, className }) => (
  <h3 className={classNames(styles.root, className)}>{children}</h3>
);
