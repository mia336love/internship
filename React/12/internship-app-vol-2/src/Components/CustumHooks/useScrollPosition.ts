import { useState, useEffect } from 'react';

const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    setScrollPosition(window.scrollY);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("Компонент размонтирован");
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
