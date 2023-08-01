import { useState } from 'react'
import Verduras from "./Verduras.jsx"
import Frutas from "./Frutas.jsx"
import Legumes from "./Legumes.jsx"

function Feira() {
  const [tipo, setTipo] = useState("")
  const [verdura, setVerdura] = useState(false)
  const [fruta, setFruta] = useState(false)
  const [legume, setLegume] = useState(false)

  function verduraChange(){
    setTipo("");
    setTipo("verdura");
  }

  function frutaChange(){
    setTipo("");
    setTipo("fruta");
  }

  function legumeChange(){
    setTipo("");
    setTipo("legume");
  }

  function lista(){
    if(tipo === "verdura"){
      return <Verduras/>
    }else if(tipo === "fruta"){
      return <Frutas/>
    }else if(tipo === "legume"){
      return <Legumes/>
    }
  }

  return (
    <>
      <h2>Escolha oque você quer ver!</h2>
      <form>
        <input type="radio" onChange={verduraChange} name='escolha'/>Verdura
        <input type="radio" onChange={frutaChange} name='escolha'/>Fruta
        <input type="radio" onChange={legumeChange} name='escolha'/>Legume
      </form>
      {lista()}
    </>
  )
}

export default Feira
