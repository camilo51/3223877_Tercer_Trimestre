import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export default function Proyecto() {
  return (
    <>
      <PageHeader />
      <Card className="w-1/2 mx-auto mt-10">
        <CardHeader>
          <CardTitle>Introducción breve</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Este proyecto demuestra cómo organizar un sitio con Next.js App
            Router, TailwindCSS y componentes propios mezclados con componentes
            de la librería shadcn/ui. Incluye rutas estáticas (por ejemplo
            /ciudades) y rutas dinámicas por ciudad (por ejemplo
            /ciudades/bogota) con estilos diferenciados por ciudad.
          </p>
        </CardContent>
        <CardFooter className="flex gap-2 justify-end">
          <Link href={'/proyecto/ciudades'}>
            <Button>Ciudades</Button>
          </Link>
          <Link href={'/proyecto/contacto'}>
            <Button>Contacto</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
