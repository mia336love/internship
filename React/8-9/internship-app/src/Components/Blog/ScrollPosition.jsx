import { useEffect, useState } from "react";
import styles from "./ScrollPosition.module.css";

const ScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    // подписка
    window.addEventListener("scroll", handleScroll);

    setScrollPosition(window.scrollY);

    // отписка
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("Компонент размонтирован");
    };
  }, []);

  return (
    <div className={styles.ScrollPositionArea}>
      <h1 className={styles.scrollPositionValue}>Scroll Position: {scrollPosition}</h1>
    </div>
  );
};

export default ScrollPosition;
