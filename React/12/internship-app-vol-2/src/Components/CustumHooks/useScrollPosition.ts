import { useState, useEffect } from 'react';

const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Подписка на событие скролла
    window.addEventListener("scroll", handleScroll);

    // Установка начального значения
    setScrollPosition(window.scrollY);

    // Очистка подписки при размонтировании
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("Компонент размонтирован");
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
