
export interface Producto{
    id: number;
    nombre: string;
    precio: number;
}

interface CarritoProps {
    productos: Producto[];
    onEliminar: (id: number) => void;
}

export default function Carrito({productos, onEliminar}: CarritoProps) {
  return (
    <div>
        <h2>Carrito de Compras</h2>
        <ul>
            {productos.map(producto => (
                <li key={producto.id}>
                    {producto.nombre} - {producto.precio}
                    <button onClick={() => onEliminar(producto.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    </div>
  )
}