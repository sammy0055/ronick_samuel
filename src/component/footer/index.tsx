import styles from "./footer.module.css";
import Heading from "../atoms/heading";
import portfolioData from "../../data/portfolio.json";

export default function Footer() {
  return (
    <section className={styles["footer"]}>
      <Heading>@ 2024 | {portfolioData.name}</Heading>
    </section>
  );
}
