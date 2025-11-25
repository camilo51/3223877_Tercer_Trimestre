import PageHeader from '@/components/PageHeader';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Bogota() {
  return (
    <>
      <PageHeader />

      <div className="w-[95%] md:w-2/3 mx-auto mt-10">
        <Link href="/proyecto/ciudades" className="flex gap-2">
          <ArrowLeft className="stroke-3" /> Volver
        </Link>
        <h2 className="text-3xl font-bold mt-5 mb-3">Bogotá</h2>
        <img
          src="/bogota.png"
          alt="Imagen Bogotá"
          className="rounded-md w-full h-96 object-cover mt-5"
        />
        <p className="my-3">
          Bogotá es la extensa capital en altura de Colombia. La Candelaria, su
          centro con adoquines, cuenta con sitios coloniales como el Teatro
          Colón neoclásico y la Iglesia de San Francisco del siglo XVII. También
          alberga museos populares, incluido el Museo Botero, que exhibe arte de
          Fernando Botero, y el Museo del Oro, con piezas de oro precolombinas.
        </p>
        <p className="my-3">
          <span className="font-bold">Población:</span> 10 millones de
          habitantes
        </p>
        <div className="mb-5">
          <h3 className="text-xl font-bold mt-5 mb-1">Atractivos Turísticos</h3>
          <div className="ml-5">
            <h4 className="text-lg font-bold mt-2">1. Monserrate</h4>
            <p className="italic text-sm">
              Monserrate es uno de los sitios más emblemáticos de Bogotá,
              ubicado a más de 3.100 metros de altura sobre el nivel del mar.
              Ofrece una vista panorámica completa de la ciudad y se puede subir
              caminando, por teleférico o funicular. En la cima se encuentra el
              Santuario del Señor Caído, así como restaurantes y senderos
              naturales.
            </p>
          </div>
          <div className="ml-5">
            <h4 className="text-lg font-bold mt-2">2. Museo del Oro</h4>
            <p className="italic text-sm">
              El Museo del Oro es uno de los más importantes de Colombia y del
              mundo en su categoría. Cuenta con más de 34.000 piezas de
              orfebrería prehispánica hechas en oro y otros materiales sagrados
              para las culturas indígenas. Sus salas exhiben piezas icónicas
              como la famosa Balsa Muisca, relacionada con la leyenda de El
              Dorado.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
