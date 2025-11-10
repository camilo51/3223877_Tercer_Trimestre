import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-blue-100 w-1/2 mx-auto mt-5 rounded p-2 shadow-lg">
        <h1>Inicio, Tailwind CSS!</h1>
        <p>This is a sample Next.js.</p>
        <Link href="/about">About</Link>
      </div>
    </>
  );
}
