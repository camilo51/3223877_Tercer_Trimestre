'use client'

import { useState } from "react"

export default function ListaTareas() {
    
    const [tareas, setTareas] = useState<string[]>([]);
    const [nuevaTarea, setNuevaTarea] = useState('')

    const agregarTarea = () => {
        if (nuevaTarea.trim()) {
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea('');
        }
    }

    return (
        <div className="p-4 w-2/12">
            <div className="flex mb-1">
                <input 
                    className="border border-gray-300 p-2 rounded flex-1"
                    type="text" 
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Nueva Tarea"    
                />
                <button onClick={agregarTarea} className="p-2 bg-green-500 text-white rounded ml-1 cursor-pointer hover:bg-green-400">Agregar</button>
            </div>
            {tareas.length > 0 &&
                <ul className="p-2 bg-gray-200 inline-block w-full rounded">
                    {tareas.map((tarea, index) => (
                        <li key={index} className="list-disc ml-4">{tarea}</li>
                    ))}
                </ul>
            }
        </div>
    )
}