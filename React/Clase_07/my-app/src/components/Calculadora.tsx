'use client';
import { useState } from 'react';

export default function Calculadora() {
  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(1);
  const total = precio * cantidad;

  return (
    <div>
      <input
        className="border border-gray-300"
        type="number"
        value={precio}
        onChange={(e) => setPrecio(Number(e.target.value))}
        placeholder="Precio"
      />
      <input
        className="border border-gray-300"
        type="number"
        value={cantidad}
        onChange={(e) => setCantidad(Number(e.target.value))}
        placeholder="Cantidad"
      />
      <h2>Total: ${total}</h2>
    </div>
  );
}
