'use client'
import { useParams } from "next/navigation"

export default function Docs() {

  const params = useParams();
  const slug = params.slug as string[] | string | undefined;
  const segments = Array.isArray(slug) ? slug : slug ? [slug] : [];
  const path = segments.join('/');

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Documentación</h1>
      <p>Ruta: /docs/{path}</p>
    </div>
  )
}