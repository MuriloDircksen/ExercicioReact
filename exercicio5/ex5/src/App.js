
import React, {useState} from 'react'

function App() {
//const [pagina, setPagina]= useState(1);
const [nomePersonagem, setNomePersonagem] = useState();
let url = '';
let vivos= [];
  function buscaAlive(){
  fetch(`https://rickandmortyapi.com/api/character/?page=1`)
  .then(response => response.json())
    .then(data => 
      data.results.map((e) => {if(e.status==="Alive"){  vivos.push(e);}}))
    .catch(error => console.log("Página não encontrado: "+error))
  console.log(vivos)
  setNomePersonagem(vivos)
  }

  buscaAlive();
  
  function avancaPagina(){
    
    url = nomePersonagem.info.next
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => 
      data.results.map((e) => {if(e.status==="Alive"){ vivos.push(e)}}))
    .catch(error => console.log("Página não encontrado: "+error))
  }
  

  function retornaPagina(){
    url = nomePersonagem.info.prev
    fetch(url)
    .then(response => response.json())
    .then(data => 
      data.results.map((e) => {if(e.status==="Alive"){ vivos.push(e)}}))
    .catch(error => console.log("Página não encontrado: "+error))
  }
  
    return (
    <div>
      <button onClick={avancaPagina}>Avança</button>
      <button onClick={retornaPagina}>Retorna</button>
      <h3>Personagens Vivos:</h3>
      <ul>
        {nomePersonagem && nomePersonagem.map((a,e) =>
        <li key={e}>{`Nome: ${a.name}, Espécie: ${a.species}`}</li>)}
      </ul>
    </div>
  );
}

export default App;
