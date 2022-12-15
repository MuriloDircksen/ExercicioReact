
import React, {useEffect} from 'react'

function App() {
 

  function buscaCep(){
   let btn = document.getElementById("btn") 
   let meuCep = document.getElementById("inputCep").value
   let p =document.getElementById("p");  
   btn.addEventListener('click', () => {
    fetch(`https://brasilapi.com.br/api/cep/v2/${meuCep}`)
    .then(response => response.json())
    .then(data =>{p.innerHTML=`
      <div>
      <p>Cep= ${data.cep}</p>
      <p>Estado= ${data.state}</p>
      <p>Cidade= ${data.city}</p>
      <p>Bairro= ${data.neighborhood}</p>
      <p>Rua= ${data.street}</p>
      </div>`
    })
    .catch(error => console.log("Cep não encontrado: "+error))
   })
  }
  return (
    <div>
    <label >Digite seu cep:</label>
    <input type="tel" id="inputCep" required></input>
    <button id = 'btn' onClick={()=>buscaCep()}>Buscar Cep</button>
    <p id='p'></p>
    </div>
       
  );
}

export default App;
