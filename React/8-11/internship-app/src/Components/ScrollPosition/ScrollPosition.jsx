
import styles from "./ScrollPosition.module.css";

import useScrollPosition from "../CustomHooks/useScrollPosition";

const ScrollPosition = () => {

  const scrollY = useScrollPosition()

  return (
    <div className={styles.ScrollPositionArea}>
      <h1 className={styles.scrollPositionValue}>
        Scroll Position: {scrollY}
      </h1>
    </div>
  );
};

export default ScrollPosition;
