import PageHeader from "@/components/PageHeader";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Medellin() {
  return (
    <>
      <PageHeader />

      <div className="w-[95%] md:w-2/3 mx-auto mt-10">
        <Link href="/proyecto/ciudades" className="flex gap-2"><ArrowLeft className="stroke-3" /> Volver</Link>
        <h2 className="text-3xl font-bold mt-5 mb-3">Medellín</h2>
        <p className="my-3">Medellín es la capital de la provincia montañosa de Antioquia en Colombia. Es apodada la "Ciudad de la eterna primavera" por su clima templado y alberga la famosa Feria de las Flores anual. El moderno Metrocable conecta la ciudad con los barrios circundantes y tiene vistas del Valle de Aburrá que se encuentra debajo</p>
        <p className="my-3"><span className="font-bold">Población:</span> 2.63 millones de habitantes</p>
        <div className="mb-5">
          <h3 className="text-xl font-bold mt-5 mb-1">Atractivos Turísticos</h3>
          <div className="ml-5">
            <h4 className="text-lg font-bold mt-2">1. Plaza Botero</h4>
            <p className="italic text-sm">La Plaza Botero es un espacio público ubicado en el centro de Medellín que reúne 23 esculturas monumentales creadas por el famoso artista colombiano Fernando Botero. Cada pieza mantiene su característico estilo de “volumen”, convirtiendo la plaza en un museo al aire libre. Es uno de los lugares más visitados de la ciudad y está rodeado por el Museo de Antioquia, que también exhibe una gran colección del artista.</p>
          </div>
          <div className="ml-5">
            <h4 className="text-lg font-bold mt-2">2. Parque Arví</h4>
            <p className="italic text-sm">El Parque Arví es un eco-parque natural de más de 1.700 hectáreas ubicado en Santa Elena, al oriente de Medellín. Es reconocido por su riqueza ambiental, senderos ecológicos, miradores naturales y vestigios arqueológicos. Es accesible mediante el Metrocable Línea L, lo que permite a los visitantes disfrutar un ascenso panorámico sobre la ciudad. Es ideal para caminatas, avistamiento de aves, picnic y recorridos guiados.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <img src="/medellin.png" alt="Imagen Medellín" className="rounded-tl-md rounded-tr-md md:rounded-bl-md" />
          <img src="/medellin2.png" alt="Imagen Medellín" className="md:rounded-tr-md rounded-br-md rounded-bl-md" />
        </div>
      </div>
    </>
  )
}