import { useState } from 'react'

function ListaTelefonica() {
  const [nomes, setNomes] = useState('')
  const [numeros, setNumeros] = useState('')
  const [item] = useState([])


  function nomesChange(evento){
    setNomes(evento.target.value)
    console.log(evento.target.value);
  }

  function numerosChange(evento){
    setNumeros(evento.target.value)
    console.log(evento.target.value);
  }

  function add(){
    item.push(`Nome: ${nomes} / Número: ${numeros}`);
    setNomes('');
    setNumeros('');
    console.log(nomes);
    console.log(item);
    console.log(numeros);
  }

  return (
    <>
      <form>
        <input type="text" placeholder='Nome' value={nomes} onChange={nomesChange}/>
        <input type="number" placeholder='Número' value={numeros} onChange={numerosChange}/>
      </form>
        <button onClick={add}>Cadastrar</button>

    <div>
      <ul>
        {item.map((item, i)=> (
        <li key={i}>
          {item}
        </li>))}
      </ul>
    </div>
    </>
  )
}

export default ListaTelefonica
