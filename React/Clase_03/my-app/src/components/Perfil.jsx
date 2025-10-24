export default function Perfil({usuario}) {
  return (
    <>
        <h2>{usuario.name} {usuario.lastname}</h2>
        <p>Hobbies: {usuario.hobbies.join(", ")}</p>
    </>
  )
}