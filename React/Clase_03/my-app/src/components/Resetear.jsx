import Button from "./Button"


export default function Resetear({count, setCount}) {
    return (
        <Button texto={"Resetear"} operacion={"resetear"} count={count} setCount={setCount} />    
    )
}