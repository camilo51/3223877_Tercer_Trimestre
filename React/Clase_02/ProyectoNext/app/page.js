'use client'

import { useState } from "react";

import styles from "./page.module.css"

const App = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1)
  }

  return (
    <div className={styles.main}>
      <h1>Contador con Next.js
      </h1>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount( count + 1 )}>Incrementar</button>
      <button onClick={() => decrement()}>Decrementar</button>
    </div>
  )
}

export default App;