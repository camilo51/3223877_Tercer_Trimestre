'use client'

// import Aumentar from "@/components/Aumentar";
// import Button from "@/components/Button";
// import Disminuir from "@/components/Disminuir";
// import Image from "@/components/Image";
import Perfil from "@/components/Perfil";
// import Resetear from "@/components/Resetear";
// import Saludo from "@/components/Saludo";
// import { useState } from "react";

// const message = "Welcome to Next.js"
// const img = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d9/fa/1b/lost-valley.jpg?w=700&h=400&s=1"

export default function Home() {
      // const [count, setCount] = useState(0);
  
      const user = {
        name: "Cristian",
        lastname:  "Pereira",
        hobbies: ["Programar", "Patinar", "Jugar", "Basket"]
      }

      return (

        <Perfil usuario={user} />

    // <div>

    //   <div className="">
    //     <p>{count}</p>
    //     <Aumentar count={count} setCount={setCount} />
    //     <Disminuir count={count} setCount={setCount} />
    //     <Resetear count={count} setCount={setCount} />
    //   </div>
    // </div>
  );
}
