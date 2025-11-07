import Tarjeta from "@/components/Tarjeta";

export default function Home() {

  const info = {
    name: "Cristian",
    lastName: "Pereira",
    profile: "Hola soy un desarrollador web, me gusta programar y aprender cosas nuevas.",
    about: {
      contact:{
        location: "Colombia, Medellin",
        email: "correo@gmail.com",
        phone: "3187327025",
      },
      hobbies: ["Jugar videojuegos", "Programar", "Ganar Dinero"],
    }
  }

  return (
    <>
      <Tarjeta info={info} />
    </>
  );
}
