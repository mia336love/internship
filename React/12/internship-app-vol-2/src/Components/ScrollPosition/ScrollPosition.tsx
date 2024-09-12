import useScrollPosition from '../CustumHooks/useScrollPosition';

import './Styles.css'
const ScrollPosition = () => {
  const scrollY: number = useScrollPosition();

  return (
    <div className="ScrollPositionArea">
      <h1 className="scrollPositionValue">
        Scroll Position: {scrollY}
      </h1>
    </div>
  );
}

export default ScrollPosition;
