import { useState } from 'react'

function Frutas() {
  const lista = ["Maçã", "Manga", "Laranja", "Melancia"]

  return (
    <>
    <h2>Frutas disponíveis</h2>
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

export default Frutas