import React, {useState} from 'react';



function App() {
  const [pok, setPok] = useState();
  const [nome, setNome] = useState();
  function buscaPok(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`).
    then(response => response.json())
    .then(data => setPok(data))
    .catch(error => console.log("Pokemon não encontrado: "+error))
  }
  return (
    <div>
            <input type="radio" value="pikachu" name="pokemon" onChange={e => setNome(e.target.value)} />
            <label>Pikachu</label> <br />

            <input type="radio" value="bulbasaur" name="pokemon" onChange={e => setNome(e.target.value)} />
            <label>Bulbasaur</label><br />
            <input type="radio" name="pokemon" value="squirtle" onChange={e => setNome(e.target.value)} />
            <label>Squirtle</label><br />

            <input type="radio" name="pokemon" value="charmander" onChange={e => setNome(e.target.value)} />
            <label>Charmander</label> <br /> <br />

            <button id="btn" onClick={buscaPok}>Pesquisar Pokemon</button>
          
            {pok &&  pok.stats.map((e) => <p>{`${e.stat.name} = ${e.base_stat}`}</p>)}
    </div>
  );
}

export default App;
