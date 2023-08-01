import { useState } from 'react'

function Legumes() {
  const lista = ["Berinjela", "Pimentão", "Chuchu", "Abobrinha"]

  return (
    <>
    <h2>Legumes disponíveis</h2>
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

export default Legumes