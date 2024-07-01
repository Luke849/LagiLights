'use client'
import Detail from "@/components/component/Detail";
import { useEffect, useState } from "react";

interface Light {
  id: number;
  name: string;
}

export default function Home() {
  const [lights, setLights] = useState<Light[]>([]);

  useEffect(() => {
    const fetchLights = async () => {
      const res = await fetch('/api/lights'); // Ensure this URL is correct
      const data = await res.json();
      setLights(data.lights);
    };

    fetchLights();
  }, []);

  return (
    <div className="bg-zinc-800">
      <header>
        <nav className="px-5 pt-5">
          <p className="text-zinc-50 text-xl font-semibold drop-shadow-sm-white">Lagi<span className="ml-[2px] font-black">Lights</span></p>
        </nav>
      </header>
      <main className="flex min-h-screen p-24 pt-20">
      <div className="grid grid-cols-4 grid-flow-row gap-4 w-full h-auto">
      {lights.map(light => (
            <Detail key={light.id} light={light}/>
          ))}
        {/* <div className="h-52 w-full bg-zinc-100 shadow-sm-white rounded-md"></div> */}
      </div>
    </main>
    </div>
    
  );
}
