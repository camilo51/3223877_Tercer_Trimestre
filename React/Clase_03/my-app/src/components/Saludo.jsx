export default function Saludo({ name, lastName, edad, message }) {

    return (
        <div className="mt-5 mx-auto p-4 border w-fit rounded-lg">
            <h2 className="text-center text-xl font-bold mb-4">{message}</h2>
            <p>Nombre: {name} {lastName}</p>
            <p>Edad: {edad}</p>
        </div>
    )
}