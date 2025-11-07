interface BotonProps {
    texto: string;
    color?: string;
}

export default function Boton({texto, color="blue"}: BotonProps) {
  return (
    <>
        <button style={{backgroundColor: color}}>{texto}</button>
    </>
  )
}