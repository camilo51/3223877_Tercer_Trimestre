'use client'
import { useParams } from "next/navigation"

export default function Product() {

    const {id} = useParams();

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Producto #{id}</h1>
            <p className="text-gray-700">ID recibido: {id}</p>
        </div>
      )
}
