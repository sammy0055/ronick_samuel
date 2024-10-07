import styles from "./button.module.css";

interface ButtonProps {
  link: string;
  children: string;
}
export const Button: React.FC<ButtonProps> = ({ link, children }) => {
  return (
    <a href={link} className={styles["button"]}>
      {children}
    </a>
  );
};
