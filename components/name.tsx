'use client'
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";


export const Name = () => {
  return (
    <div className=" my-6 flex w-full flex-col justify-center items-center flex-wrap md:flex-nowrap gap-4 mt-16">
      <Input type="name" isRequired label="Nombre de jugador"/>
      <Button color="secondary" variant="shadow" className="px-6 w-1/2">
        Crear Sala
      </Button>
      <Input type="text" isRequired label="Código de sala" className=" mt-16" />
      <Button color="secondary" variant="shadow" className="px-6 w-1/2" >
        Unirse
      </Button>

    </div>

  );
};