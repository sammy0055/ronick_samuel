import styles from "./heading.module.css";

interface HeaddingProps {
  children: any;
}
const Heading: React.FC<HeaddingProps> = ({ children }) => {
  return <h1 className={styles["heading"]}>{children}</h1>;
};

export default Heading;
