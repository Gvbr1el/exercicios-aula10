import { useState } from 'react'

function Verduras() {
  const lista = ["Alface", "Couve", "Espinafre", "Manjericão"]

  return (
    <>
    <h2>Verduras disponíveis</h2>
    <ul>
        {lista.map((item, i)=>(
            <li key={i}>
                {item}
            </li>
        ))}
    </ul>
    </>
  )
}

export default Verduras