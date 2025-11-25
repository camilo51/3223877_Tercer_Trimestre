import PageHeader from '@/components/PageHeader';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Cali() {
  return (
    <>
      <PageHeader />

      <div className="w-[95%] md:w-2/3 mx-auto mt-10">
        <Link href="/proyecto/ciudades" className="flex gap-2">
          <ArrowLeft className="stroke-3" /> Volver
        </Link>
        <h2 className="text-3xl font-bold mt-5 mb-3">Cali</h2>
        <p className="my-3">
          Cali es una ciudad colombiana ubicada en el departamento del Valle del
          Cauca, al suroeste de Bogotá. Es conocida por el baile de la salsa,
          del que hay muchos clubes en el suburbio de Juanchito. En el barrio
          más antiguo de Cali, la catedral neoclásica de San Pedro alberga
          pinturas de la Escuela de Quito.{' '}
        </p>
        <p className="my-3">
          <span className="font-bold">Población:</span> 2.4 a 2.5 millones de
          habitantes
        </p>
        <img
          src="/cali.png"
          alt="Imagen Cali"
          className="rounded-md w-full h-96 object-cover mt-5"
        />
        <div className="mb-5">
          <h3 className="text-xl font-bold mt-5 mb-1">Atractivos Turísticos</h3>
          <div className="ml-5">
            <h4 className="text-lg font-bold mt-2">1. Cristo Rey</h4>
            <p className="italic text-sm">
              El Cristo Rey es un monumento de 26 metros de altura ubicado en el
              Cerro de los Cristales, desde donde se obtiene una vista
              panorámica de toda la ciudad. Es uno de los puntos turísticos más
              representativos de Cali y también cuenta con senderos para
              caminatas, miradores y zonas naturales. De noche se ilumina,
              convirtiéndose en un ícono visible desde muchos sectores de la
              ciudad.
            </p>
          </div>
          <div className="ml-5">
            <h4 className="text-lg font-bold mt-2">2. Zoológico de Cali</h4>
            <p className="italic text-sm">
              Considerado uno de los mejores zoológicos de Latinoamérica, el
              Zoológico de Cali alberga más de 2.500 animales de 300 especies
              diferentes. Destaca por su enfoque en conservación, educación
              ambiental y hábitats bien diseñados para reptiles, aves, mamíferos
              y peces. Es uno de los destinos más visitados por turistas y
              familias en la ciudad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
