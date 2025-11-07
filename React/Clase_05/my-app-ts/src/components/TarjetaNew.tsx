import style from "./Tarjeta.module.css";

interface TarjetaNewProps{
  nombre: string;
  perfil: string;
  about: [];
}

export default function TarjetaNew({nombre}: TarjetaNewProps) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg bg-red-50 text-center">
        <h2 className="">{nombre}</h2>
        <p className="">¡Bienvenido a Next.js!</p>
        <button className="">Saludar</button>
    </div>
  )
}