interface InformacionProps {
    name: string;
    lastName: string;
    profile: string;
    about: {
        contact: {
            location: string;
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
    <div className="bg-white w-5/12 shadow-lg rounded p-5 mx-auto mt-5 text-center flex flex-col items-center justify-center relative overflow-hidden  transition-all duration-300
    ">
        <div className="absolute w-43 aspect-square bg-indigo-200 rounded-full -right-28 top-5"></div>
        <div className="absolute w-43 aspect-square bg-indigo-300 rounded-full -right-10 -top-14"></div>
        <div className="absolute w-43 aspect-square bg-indigo-200 rounded-full -left-28 top-5"></div>
        <div className="absolute w-43 aspect-square bg-indigo-300 rounded-full -left-10 -top-14"></div>
        <img className="w-36 aspect-square object-cover rounded-full mb-2 overflow-hidden p-2 border-2 border-indigo-600 text-center" src="./user.avif" alt={info.name} />
        <h1 className="text-center text-2xl uppercase font-bold mb-4 underline italic">{info.name} {info.lastName}</h1>
        <p className="text-center italic text-sm w-2/3">{info.profile}</p>
        <div className="flex gap-8 justify-center w-full mt-5 bg-indigo-50 p-2 rounded ">
            <div>
                <h2 className="font-bold text-xl uppercase">Sobre mi</h2>
                <div>
                    <p className="text-sm">{info.about.contact.location}</p>
                    <p className="text-sm">{info.about.contact.email}</p>
                    <p className="text-sm">{info.about.contact.phone}</p>
                </div>
            </div>
            <div>
                <h2 className="font-bold text-xl uppercase">Hobbies</h2>
                <ul>
                    {info.about.hobbies.map(((hobby, i) => (
                        <li key={i}>
                            <p className="text-sm">{hobby}</p>
                        </li>
                    )))}
                </ul>
            </div>
        </div>
    </div>
  )
}