import Button from "./Button";


export default function Aumentar({count, setCount}) {

    return (
        <Button texto={"Aumentar"} operacion={"aumentar"} count={count} setCount={setCount} />
    )
}