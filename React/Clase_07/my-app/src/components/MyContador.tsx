'use client'

import { useState } from "react"

export default function MyContador() {

    const [numero, setNumero] = useState(0)

    return (
        <div>
            <h2>El número es: {numero}</h2>
            <button onClick={() => setNumero(numero + 1)}>Sumar 1</button>
        </div>
    )
}