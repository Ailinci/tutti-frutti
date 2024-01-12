'use client'
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";


export const Name = () => {
  return (
    <div className=" my-6 flex w-full flex-col justify-center align-middle flex-wrap md:flex-nowrap gap-4">
      <Input type="name" isRequired label="Nombre de jugador" />
      <Button color="primary" variant="shadow" className="px-6 w-1/2">
        Crear Sala
      </Button>
      <Input type="text" isRequired label="Código de sala" />
      <Button color="primary" variant="shadow" className="px-6 w-1/2" >
        Unirse
      </Button>

    </div>

  );
};