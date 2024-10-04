import styles from "./footer.module.css";
import Heading from "../atoms/heading";

export default function Footer() {
  return (
    <section className={styles["footer"]}>
      <Heading>@ 2024 | Ronick Samuel</Heading>
    </section>
  );
}
