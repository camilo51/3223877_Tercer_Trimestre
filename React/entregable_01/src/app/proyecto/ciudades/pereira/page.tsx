import PageHeader from "@/components/PageHeader";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Bogota() {
  return (
    <>
      <PageHeader />

      <div className="w-[95%] md:w-2/3 mx-auto mt-10">
        <Link href="/proyecto/ciudades" className="flex gap-2"><ArrowLeft className="stroke-3" /> Volver</Link>
        <h2 className="text-3xl font-bold mt-5 mb-3">Pereira</h2>
        <p className="my-3">Pereira es una ciudad de una región montañosa cafetera en el oeste de Colombia, conocida por el café arábica suave. La plaza principal, Plaza de Bolívar, tiene una estatua del héroe de la independencia Simón Bolívar desnudo a caballo. La Catedral de Nuestra Señora de la Pobreza del siglo XIX tiene un complejo techo de celosías. El Viaducto César Gaviria Trujillo es un puente colgante sobre el río Otún.</p>
        <p className="my-3"><span className="font-bold">Población:</span> 482,824 habitantes</p>
        <div className="mb-5">
          <h3 className="text-xl font-bold mt-5 mb-1">Atractivos Turísticos</h3>
          <div className="ml-5">
            <h4 className="text-lg font-bold mt-2">1. Bioparque Ukumarí</h4>
            <p className="italic text-sm">El Bioparque Ukumarí es uno de los parques temáticos y de conservación más importantes del Eje Cafetero. Su enfoque es la educación ambiental y la preservación de especies. Cuenta con ecosistemas recreados, grandes recintos y animales de todas partes del mundo.</p>
          </div>
          <div className="ml-5">
            <h4 className="text-lg font-bold mt-2">2. Mirador de Altagracia</h4>
            <p className="italic text-sm">El Mirador de Altagracia es un punto panorámico muy visitado donde se puede observar Pereira desde lo alto, rodeado de naturaleza. Es un espacio tranquilo para disfrutar de vistas al atardecer y tomar fotografías.</p>
          </div>
        </div>
        <img src="/pereira.png" alt="Imagen Pereira" className="rounded-md w-full h-96 object-cover mt-5" />
      </div>
    </>
  )
}