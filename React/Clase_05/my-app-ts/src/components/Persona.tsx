interface PersonaProps{
    name: string;
    age: number;
}

export default function Persona({name, age}: PersonaProps){
    return(
        <div>
            <h2>{name}</h2>
            <p>Tu edad es : {age}</p>
        </div>
    );
}
