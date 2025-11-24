'use client'

import { useState } from "react";

export default function SaludoPersonalizado() {

    const [nombre, setNombre] = useState('');

    return (
        <div>
            <input 
                className="border border-gray-300"
                type="text" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Escriba su nombre"
            />
            <h2>¡Hola {nombre}!</h2>
        </div>
    )
}