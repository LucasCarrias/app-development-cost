import { ReactNode } from "react";
import styles from "./styles.module.scss";

type BadgeComponentProps = {
  children: ReactNode;
};

export default function Badge({ children }) {
  return <span className={styles.badge}>{children}</span>;
}
