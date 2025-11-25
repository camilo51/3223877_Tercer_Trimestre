'use client';

import { useState } from 'react';

export default function Interruptor() {
  const [encendido, setEncendido] = useState(false);

  return (
    <div>
      <img
        src={encendido ? '/encendido.png' : '/apagado.png'}
        className="w-40 mb-2"
      />

      <div
        className="w-15 h-6 bg-gray-200 m-4 flex items-center rounded-full relative"
        onClick={() => setEncendido(!encendido)}
      >
        <span
          className={`w-5 aspect-square bg-yellow-500 inline-block rounded-full absolute transition-all duration-300 ${encendido ? 'right-0' : 'left-0'}`}
        ></span>
      </div>

      <button
        onClick={() => setEncendido(!encendido)}
        className={`p-2 rounded font-bold uppercase w-52 ${encendido ? 'bg-yellow-200 text-yellow-600' : 'bg-red-200 text-red-600'} `}
      >
        {encendido ? 'Apagar' : 'Encender'}
      </button>

      <p>La luz está {encendido ? 'encendida' : 'apagada'}</p>
    </div>
  );
}
