import { useState } from "react";

function app() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1);
  }
  const dencrementCount = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }
  return (
    <div className="contador-container">
    <h1>Contador de cliques</h1>
    <p>Cliques: {count}</p>
    <button onClick={incrementCount}>Adicionar 1</button>
    <button className="button-menos" onClick={dencrementCount}>Diminuir 1</button>
    <button className="button-reset" onClick={reset}>Reset</button>
    </div>
  );
}

export default app;