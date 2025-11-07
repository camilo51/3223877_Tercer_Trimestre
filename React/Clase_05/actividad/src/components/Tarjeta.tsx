interface InformacionProps {
    name: string;
    lastName: string;
    profile: string;
    about: {
        info: {
            age: number;
            country: string;
            city: string;
            email: string;
            phone: string;
        },
        hobbies: string[]
    }
}

interface TarjetaProps {
    info: InformacionProps;
}

export default function Tarjeta({info}: TarjetaProps) {
  return (
    <div className="bg-gray-200 w-6/12 shadow-lg rounded p-5 mx-auto mt-5 text-center flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl uppercase font-bold mb-4">{info.name} {info.lastName}</h1>
        <img className="w-36 rounded-full mb-2 text-center" src="./user.png" alt={info.name} />
        <p className="text-center italic text-sm w-2/3">{info.profile}</p>
        <div className="grid grid-cols-2 gap-1 justify-items-start w-full mt-5">
            <div className="text-start">
                <h2 className="font-bold text-xl uppercase">Sobre mi</h2>
                <p className="text-sm">Edad: {info.about.info.age}</p>
                <p className="text-sm">País: {info.about.info.country}</p>
                <p className="text-sm">Ciudad: {info.about.info.city}</p>
                <p className="text-sm">Email: {info.about.info.email}</p>
                <p className="text-sm">Teléfono: {info.about.info.phone}</p>
            </div>
            <div className="text-start">
                <h2 className="font-bold text-xl uppercase">Hobbies</h2>
                <ul>
                    {info.about.hobbies.map(((hobby, i) => (
                        <li className="list-decimal" key={i}>
                            <p className="text-sm">{hobby}</p>
                        </li>
                    )))}
                </ul>
            </div>
        </div>
    </div>
  )
}