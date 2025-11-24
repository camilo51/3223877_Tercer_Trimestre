'use client'
import { useState } from "react"

interface UserInterface {
    nombre: string,
    edad: number,
    email: string,
}

export default function PerfilUsuario() {
    
    const defaultUser: UserInterface = {
        nombre: '',
        edad: 0,
        email: '',
    }
    const [usuario, setUsuario] = useState(defaultUser)
    return (
        <div className="w-2/12 ml-5">
            <div className="space-y-1 mb-5">
                <input 
                    className="border border-gray-300 p-2 rounded flex-1 w-full"
                    type="text" 
                    value={usuario.nombre}
                    onChange={(e) => setUsuario({...usuario, nombre: e.target.value})}
                    placeholder="Nombre"    
                />
                <input 
                    className="border border-gray-300 p-2 rounded flex-1 w-full"
                    type="number" 
                    value={usuario.edad}
                    onChange={(e) => setUsuario({...usuario, edad: Number(e.target.value)})}
                    placeholder="Edad"    
                />
                <input 
                    className="border border-gray-300 p-2 rounded flex-1 w-full"
                    type="email" 
                    value={usuario.email}
                    onChange={(e) => setUsuario({...usuario, email: e.target.value})}
                    placeholder="Email"    
                />
            </div>
            <div className="bg-gray-200 p-4">
                <p>Nombre: {usuario.nombre}</p>
                <p>Edad: {usuario.edad}</p>
                <p>Email: {usuario.email}</p>
            </div>
        </div>
    )
}