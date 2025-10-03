import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  const triggerJump = () => {
    setIsJumping(true);
  };

  const incrementCount = () => {
    setCount((previous) => previous + 1);
    triggerJump();
  };

  const decrementCount = () => {
    setCount((previous) => previous - 1);
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    if (!isJumping) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsJumping(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, [isJumping]);

  return (
    <div className="contador-container">
      <h1>Contador de cliques</h1>
      <p>Cliques: {count}</p>
      <div className="chick-wrapper">
        <div className={`chick ${isJumping ? "chick--jump" : ""}`} aria-hidden="true">
          <div className="chick__body">
            <div className="chick__eye chick__eye--left" />
            <div className="chick__eye chick__eye--right" />
            <div className="chick__beak" />
            <div className="chick__wing chick__wing--left" />
            <div className="chick__wing chick__wing--right" />
            <div className="chick__feet">
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <button onClick={incrementCount}>Adicionar 1</button>
      <button className="button-menos" onClick={decrementCount}>Diminuir 1</button>
      <button className="button-reset" onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
