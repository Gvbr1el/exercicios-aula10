import { useState } from 'react'

function App() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState(0);

  function nomeChange(evento){
    setNome(evento.target.value)

    const arrayNome = nome.split(' ');
    const arrayNome2 = arrayNome.split()
    console.log(arrayNome);
    setSobrenome(arrayNome.length - 1)
  }


  return (
    <>
      <form>
        <input type="text" placeholder='Nome Completo' onChange={nomeChange}/>
      </form>
      <p>Nome: {nome}</p>
      <p>Sobrenomes: {sobrenome}</p>
    </>
  )
}

export default App
