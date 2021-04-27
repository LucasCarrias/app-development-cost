import Badge from "../../ui/Badge";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h2>App Calculator</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <Badge><a href="">Contact Us</a></Badge>
          </li>
        </ul>
      </nav>
    </header>
  );
}
