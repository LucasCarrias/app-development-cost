import styles from "./styles.module.scss";

type Theme = "dark" | "blue";

type CategoryTypeComponentProps = {
  title: string,
  description: string,
  imageSrc: string,
  themeClass?: Theme;
};

export default function CategoryType({
  title,
  description,
  imageSrc,
  themeClass,
}: CategoryTypeComponentProps) {
  return (
    <button className={`${styles.button} ${styles[themeClass]}`}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.image}>
        <img src={imageSrc} alt={title} />
      </div>
    </button>
  );
}
