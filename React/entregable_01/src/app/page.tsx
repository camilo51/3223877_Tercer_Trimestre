import StudentCard from "@/components/StudentCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {

  const studentInfo = {
    name: "Cristian Camilo Pereira Florez",
    curriculum: {
      rol: "Análisis y Desarrollo de Software",
      email: "pereiracamilo51@gmail.com",
      location: "Medellín, Colombia"
    },
    image: "https://img.freepik.com/foto-gratis/concepto-libertad-excursionista-montana_23-2148107064.jpg?t=st=1763380445~exp=1763384045~hmac=3364f27556ec94b8b75724a60066d0c11e04cef1381819b6b447b104aafb4d97&w=740",
    description: "Desarrollador Full Stack con experiencia en tecnologías como JavaScript, React, Node.js y MongoDB. Apasionado por la innovación y la resolución de problemas complejos. Estudiante de ADSO en el SENA."
  } 

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 h-screen">
        <StudentCard studentInfo={studentInfo} />
        <Link href={'/proyecto'}>
          <Button>Proyecto <ArrowRight className="stroke-3" /></Button>
        </Link>
      </div>
    </>
  );
}
