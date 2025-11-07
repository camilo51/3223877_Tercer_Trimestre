interface SaludoProps {
    msg: string;
    name?: string;
}

export default function Saludo({msg, name="Cualquiera"}: SaludoProps) {
  return (
    <>
        <h1>{msg}</h1>
        {name && <p>Dirigido a: {name}</p>}
    </>
  )
}