'use client'
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";

export const Name = () => {

  const [name, setName] = useState('')
  const [codSala, setCodSala] = useState('')

  return (
    <div className=" my-6 flex w-full flex-col justify-center items-center flex-wrap md:flex-nowrap gap-4 mt-16">
      <Input type="name"
        value={name}
        onValueChange={setName} label="Nombre de jugador" />
      <Button color="secondary" type="submit" variant="shadow" className="px-6 w-1/2">
        Crear Sala
      </Button>
      <Input type="text"
      value={codSala}
      onValueChange={setCodSala} 
      label="Código de sala" className=" mt-16" />
      <Button color="secondary" variant="shadow" className="px-6 w-1/2" >
        Unirse
      </Button>

    </div>

  );
};

function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
