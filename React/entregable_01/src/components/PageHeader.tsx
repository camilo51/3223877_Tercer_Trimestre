import Link from 'next/link';

export default function PageHeader() {
  return (
    <>
      <header className="bg-indigo-950 text-white w-full p-3 flex md:flex-row flex-col items-center justify-between md:px-20">
        <Link href={'/proyecto'}>
          <h1 className="font-bold uppercase text-2xl text-center">
            Proyecto React
          </h1>
        </Link>
        <nav className="flex flex-col md:flex-row gap-4">
          <Link href={'/proyecto/ciudades'}>Ciudades</Link>
          <Link href={'/proyecto/contacto'}>Contacto</Link>
        </nav>
      </header>
    </>
  );
}
