import { useState } from "react";
import "./App.css"
const App = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h1>Contador con React y Vite</h1>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount( count + 1 )}>Incrementar</button>
      <button onClick={() => decrement()}>Decrementar</button>
    </div>
  )
}

export default App;