'use client';

import { useState } from 'react';

export default function IniciarSesion() {
  const [auth, setAuth] = useState(false);

  return (
    <div>
      <button
        onClick={() => setAuth(!auth)}
        className={`p-2 rounded font-bold uppercase w-52 ${auth ? 'bg-red-200 text-red-600' : 'bg-green-200 text-green-600'} `}
      >
        {auth ? 'Cerrar Sesión' : 'Iniciar Sesión'}
      </button>
      <p>
        El usuario{' '}
        <span className="font-bold">
          {auth ? 'está autenticado' : 'no está autenticado'}
        </span>
      </p>
      {auth && (
        <div className="shadow p-3 inline-block rounded bg-gray-200">
          <p>Nombre de usuario: Juan</p>
          <p>Correo electrónico: juan@gmail.com</p>
          <p>Contraseña: 123456</p>
          <p>Fecha de nacimiento: 01/01/1990</p>
        </div>
      )}
    </div>
  );
}
