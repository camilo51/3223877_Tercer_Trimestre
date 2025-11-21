import CityCard from "@/components/CityCard";
import GridContainer from "@/components/GridContainer";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

export default function Ciudades() {
  const ciudades = [
    {name: "Medellín", href: "/proyecto/ciudades/medellin", img: "/medellin.png"},
    {name: "Bogotá", href: "/proyecto/ciudades/bogota", img: "/bogota.png"},
    {name: "Cali", href: "/proyecto/ciudades/cali", img: "/cali.png"},
    {name: "Cartagena", href: "/proyecto/ciudades/cartagena", img: "/cartagena.png"},
    {name: "Bucaramanga", href: "/proyecto/ciudades/bucaramanga", img: "/bucaramanga.png"},
    {name: "Pereira", href: "/proyecto/ciudades/pereira", img: "/pereira.png"},
  ]

  return (
    <>
        <PageHeader />
        
        <SectionTitle title="Ciudades" />
        <GridContainer>
          {ciudades.map((ciudad, i) => (
            <CityCard name={ciudad.name} href={ciudad.href} img={ciudad.img} key={i}/>
          ))}
        </GridContainer>
          
      </>
  )
}