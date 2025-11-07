interface ContenedorProps {
    children: React.ReactNode;
    title: string;
}

export default function Contenedor({children, title}: ContenedorProps) {
  return (
    <div className="contenedor">
        <h2>{title}</h2>
        {children}
    </div>
  )
}