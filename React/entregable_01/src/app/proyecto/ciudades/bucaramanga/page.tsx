import PageHeader from '@/components/PageHeader';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Pereira() {
  return (
    <>
      <PageHeader />

      <div className="w-[95%] md:w-2/3 mx-auto mt-10">
        <Link href="/proyecto/ciudades" className="flex gap-2">
          <ArrowLeft className="stroke-3" /> Volver
        </Link>
        <h2 className="text-3xl font-bold mt-5 mb-3">Bucaramanga</h2>
        <p className="my-3">
          Bucaramanga es la capital del departamento de Santander en la zona
          norte de Colombia. Está rodeada por la Cordillera Oriental de los
          Andes y es conocida por sus numerosos parques, incluido el Parque del
          Agua, con cascadas y fuentes, y el Parque García Rovira bordeado de
          palmeras. En el centro de la ciudad está la altísima Catedral de la
          Sagrada Familia y la Capilla de los Dolores, una importante capilla
          encalada de siglos de antigüedad.
        </p>
        <p className="my-3">
          <span className="font-bold">Población:</span> Aproximadamente 623,881
          habitantes
        </p>
        <div className="mb-5">
          <h3 className="text-xl font-bold mt-5 mb-1">Atractivos Turísticos</h3>
          <div className="ml-5">
            <h4 className="text-lg font-bold mt-2">1. Cerro del Santísimo</h4>
            <p className="italic text-sm">
              El Cerro del Santísimo es uno de los íconos turísticos más
              importantes del área metropolitana de Bucaramanga. Está ubicado en
              Floridablanca y alberga una estatua de 37 metros de altura del
              Sagrado Corazón de Jesús, accesible por un teleférico panorámico.
              Desde su mirador se obtiene una de las mejores vistas de toda la
              ciudad.
            </p>
          </div>
          <div className="ml-5">
            <h4 className="text-lg font-bold mt-2">
              2. Parque Nacional del Chicamocha (PANACHI)
            </h4>
            <p className="italic text-sm">
              Aunque está a las afueras de la ciudad, es uno de los destinos más
              visitados por quienes se hospedan en Bucaramanga. Panachi está
              ubicado sobre el majestuoso Cañón del Chicamocha y cuenta con
              teleférico, rutas de senderismo, actividades de aventura y un
              parque temático al aire libre.
            </p>
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <img
            src="/bucaramanga.png"
            alt="Imagen Bucaramanga"
            className="w-full"
          />
          <img
            src="/bucaramanga2.png"
            alt="Imagen Bucaramanga"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}
