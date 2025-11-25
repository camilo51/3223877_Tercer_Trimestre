import PageHeader from '@/components/PageHeader';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Cartagena() {
  return (
    <>
      <PageHeader />

      <div className="w-[95%] md:w-2/3 mx-auto mt-10 text-center">
        <Link href="/proyecto/ciudades" className="flex gap-2">
          <ArrowLeft className="stroke-3" /> Volver
        </Link>
        <h2 className="text-3xl font-bold mt-5 mb-3">Cartagena</h2>
        <p className="my-3">
          Cartagena es una ciudad portuaria en la costa caribeña de Colombia.
          Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en
          el siglo XVI, con plazas, calles de adoquines y edificios coloniales
          coloridos. Con un clima tropical, la ciudad también es un destino
          popular por sus playas. Se puede llegar en bote a la Isla de Barú, con
          playas de arena blanca y palmeras, y a las Islas del Rosario, famosas
          por sus arrecifes de coral.
        </p>
        <p className="my-3">
          <span className="font-bold">Población:</span> 1.07 millones de
          habitantes
        </p>
        <img
          src="/cartagena.png"
          alt="Imagen Cartagena"
          className="rounded-md w-full md:w-1/2 object-cover mt-5 mx-auto"
        />
        <div className="mb-5">
          <h3 className="text-xl font-bold mt-5 mb-1">Atractivos Turísticos</h3>
          <div className="ml-5">
            <h4 className="text-lg font-bold mt-2">1. Ciudad Amurallada</h4>
            <p className="italic text-sm">
              La Ciudad Amurallada es el corazón histórico de Cartagena y uno de
              los lugares más emblemáticos de Colombia. Construida entre los
              siglos XVI y XVIII para defenderse de ataques piratas, conserva
              murallas, baluartes, plazas, iglesias y casas coloniales con
              balcones coloridos. Es Patrimonio de la Humanidad por la UNESCO y
              es ideal para recorrer a pie, disfrutar de su arquitectura y vivir
              su ambiente cultural y gastronómico.
            </p>
          </div>
          <div className="ml-5">
            <h4 className="text-lg font-bold mt-2">
              2. Castillo de San Felipe de Barajas
            </h4>
            <p className="italic text-sm">
              El Castillo de San Felipe es la fortaleza más importante
              construida por los españoles en América. Edificado en 1657 sobre
              el Cerro San Lázaro, fue diseñado para resistir invasiones y
              ataques por tierra y mar. Se caracteriza por sus túneles,
              miradores, murallas imponentes y su vista panorámica hacia la
              ciudad moderna y colonial.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
