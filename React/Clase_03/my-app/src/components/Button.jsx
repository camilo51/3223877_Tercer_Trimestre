'use client'
import { useState } from "react"

export default function Button({ texto, operacion, count, setCount }) {


    const counter = () => {
        switch (operacion) {
            case "aumentar":
                setCount(count + 1)
                break;
            case "disminuir":
                setCount(count - 1)
                break;
            case "resetear":
                setCount(0)
                break;
            default:
                break;
        }
    }
    return (
        <>
            <button onClick={() => counter()} className="p-2 bg-indigo-600 rounded uppercase font-bold">{texto}</button>
        </>
    )
}