'use client';

import { useState } from 'react';

interface DatosProps {
  nombre: string;
  email: string;
  mensaje: string;
}

export default function FormularioContacto() {
  const defaultValues: DatosProps = {
    nombre: '',
    email: '',
    mensaje: '',
  };

  const [datos, setDatos] = useState(defaultValues);
  const [enviado, setEnviado] = useState(false);
  const manejarCambios = (campo: string, valor: string) => {
    setDatos({
      ...datos,
      [campo]: valor,
    });
  };

  const enviarFormulario = () => {
    console.log('Datos enviados: ', datos);
    setEnviado(true);

    setTimeout(() => {
      setEnviado(false);
      setDatos(defaultValues);
    }, 3000);
  };
  if (enviado) {
    return (
      <h2 className="p-2 font-bold bg-green-200 text-green-800 inline-block m-5 rounded">
        ¡Mensaje enviado! Gracias {datos.nombre}
      </h2>
    );
  }
  return (
    <div className="w-2/12 space-y-1 ml-5 mt-5 bg-gray-200 p-2 rounded">
      <h2 className="text-2xl font-bold uppercase mb-2">Contactanos</h2>
      <input
        className="border border-gray-400 p-2 rounded flex-1 w-full"
        type="text"
        value={datos.nombre}
        onChange={(e) => manejarCambios('nombre', e.target.value)}
        placeholder="Tu nombre"
      />
      <input
        className="border border-gray-400 p-2 rounded flex-1 w-full"
        type="email"
        value={datos.email}
        onChange={(e) => manejarCambios('email', e.target.value)}
        placeholder="Tu Email"
      />
      <textarea
        className="border border-gray-400 p-2 rounded flex-1 w-full"
        value={datos.mensaje}
        onChange={(e) => manejarCambios('mensaje', e.target.value)}
        placeholder="Tu Mensaje"
      />
      <button
        onClick={enviarFormulario}
        className="bg-green-400 w-full p-2 rounded uppercase font-bold cursor-pointer hover:bg-green-300 transition-all duration-150"
      >
        Enviar
      </button>
    </div>
  );
}
