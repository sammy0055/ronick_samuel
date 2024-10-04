import styles from "./app.module.css";
import AboutMe from "./component/aboutme";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <main className={styles["app"]}>
        <AboutMe />
        <Footer />
      </main>
    </>
  );
}

export default App;
