import Button from "./Button";


export default function Disminuir({count, setCount}) {
    return (
        <Button texto={"Disminuir"} operacion={"disminuir"} count={count} setCount={setCount} />
    )
}