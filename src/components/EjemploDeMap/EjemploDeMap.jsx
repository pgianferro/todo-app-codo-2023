import React, { useState } from "react";

// tengo un array de nombres en un estado

const EjemploDeMap = () => {
  const [usuarios, setUsuarios] = useState(["Nico", "Pedro", "Juan"]);

  return (
    <div>
      {
        // recuerden que en las llaves se puede poner codigo JS

        // puedo usar map para retornar nuevo jsx segun cuantos elementos tenga el array de usuarios

        // usuarios.map((usuario)=>{})

        // usuario es cada elemento del array usuarios

        usuarios.map((usuario) => {
          // por cada usuario retorno <p>{nombre del usuario}</p>
          return (
            <div>
              <p>{usuario}</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default EjemploDeMap;