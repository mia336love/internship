import React, { useState, useEffect } from "react";

function FunctionalLifecycleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect: Компонент смонтирован");

    return () => {
      console.log("useEffect cleanup: Компонент будет удален");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect: Компонент обновлен");
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}

export default FunctionalLifecycleComponent;