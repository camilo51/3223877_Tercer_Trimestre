'use client';

import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function page() {
  const { nombre } = useParams();
  return (
    <>
      <PageHeader />

      <Card className="w-1/2 mx-auto mt-10">
        <CardHeader>
          <CardTitle>{nombre}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <code className="bg-gray-200 px-2 py-1 rounded font-mono text-sm italic">
              /proyecto/ciudades/{nombre}
            </code>{' '}
            Es una ruta dinamica y se obtiene con el parametro{' '}
            <code className="bg-gray-200 px-2 py-1 rounded font-mono text-sm italic">
              nombre
            </code>
          </p>
        </CardContent>
        <CardFooter className="flex gap-2 justify-end">
          <Link href={'/proyecto/ciudades'}>
            <Button>
              <ArrowLeft /> Volver
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
