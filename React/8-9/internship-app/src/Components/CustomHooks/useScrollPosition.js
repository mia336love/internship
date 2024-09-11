import { useEffect, useState } from "react";

const useScrollPosition = () => {
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

  return scrollPosition;
};

export default useScrollPosition;
