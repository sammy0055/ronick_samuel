import styles from "./newsbar.module.css";
export default function NewsBar() {
  return (
    <div className={styles["newsbar"]}>
      <span className={styles["mb-span"]}>welcome to my portfolio 📞 </span>
      <span className={styles["newsbarLinks"]}>
        <a href="https://wa.link/wlimfr"> WhatSapp</a>{" "}
        <a href="mailto:ronicksamuel@gmail.com">Email</a>{" "}
        <a href="https://www.linkedin.com/in/samuel-ronick-a4666a173/">
          LinkedIn
        </a>{" "}
        <a href="https://github.com/sammy0055">Github</a>
      </span>
    </div>
  );
}
