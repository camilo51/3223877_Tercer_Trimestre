import PageHeader from "@/components/PageHeader"
import SectionTitle from "@/components/SectionTitle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function page() {
  return (
    <>
      <PageHeader />

      <div>
        <SectionTitle title="Contacto" />
        <form className="w-1/2 mx-auto mt-5 bg-white p-5 rounded shadow-lg flex flex-col gap-4">
          <Input type="text" placeholder="Nombre" className="border border-gray-300 rounded" />
          <Input type="email" placeholder="Correo Electronico" className="border border-gray-300 rounded" />
          <Textarea placeholder="Mensaje" className="p-2 border border-gray-300 rounded resize-none h-32" />

          <Button type="submit" className="self-end mt-2">Enviar</Button>
        </form>
      </div>
    </>
  )
}