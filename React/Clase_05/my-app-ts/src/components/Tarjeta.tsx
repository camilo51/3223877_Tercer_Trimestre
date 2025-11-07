import style from "./Tarjeta.module.css";


export default function Tarjeta({nombre}: {nombre: string}) {
  return (
    <div className={style.tarjeta}>
        <h2 className={style.titulo}>{nombre}</h2>
        <p>¡Bienvenido a Next.js!</p>
        <button className={style.boton}>Saludar</button>
    </div>
  )
}