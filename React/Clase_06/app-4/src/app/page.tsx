import Image from "next/image";

export default function Home() {
  return (
      <div className="bg-green-100 w-1/2 mx-auto mt-5 rounded p-2 shadow-lg">
        <h1 className="text-center text-4xl text-green-600">Inicio, Tailwind CSS!</h1>
        <p className="text-sm text-center italic text-gray-500 mt-2 font-bold">This is a sample Next.js.</p>
      </div>
  );
}
