import Tarjeta from "@/components/Tarjeta";

export default function Home() {

  const info = {
    name: "Cristian",
    lastName: "Pereira",
    profile: "Hola soy un desarrollador web, me gusta programar y aprender cosas nuevas.",
    about: {
      info: {
        age: 22,
        country: "Colombia",
        city: "Medellin",
        email: "correo@gmail.com",
        phone: "3187327025",
      },
      hobbies: ["Jugar videojuegos", "Ver series", "Jugar Bassketball", "Programar", "Ganar Dinero"],
    }
  }

  return (
    <>
      <Tarjeta info={info} />
    </>
  );
}
