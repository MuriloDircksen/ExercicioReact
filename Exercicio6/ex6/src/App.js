import React, {useState} from 'react'
import './App.css' 

function App() {
  const jogoVelha = [['' ,'' , ''], ['' , '', ''],['' , '','' ]];
  
  const [jogo, setJogo] = useState(jogoVelha);
  const [jogador, setJogador] = useState('X')
  const [jogando, setJogando] = useState(true)

  /*const tabuleiro = (jogada)=>{
    return(
      <div>
      {jogoVelha&&jogoVelha.map((e)=> <tr>{e.map((s) => <button onClick={()=>''}>{jogada[e][s]}</button>)}</tr>)}
      </div>
    );
  }*/

  const verificaVitoria = () =>{
    let pontos = 0
    let vitoria = false
    //linhas
    for(let l=0;l<3;l++){
      pontos=0;
      for(let c=0; c<3; c++){
        if(jogo[l][c]==jogador){
          pontos++;
        }
      }
      if(pontos>=3){
        vitoria=true
        break
      }
    }
    //colunas
    for(let c=0; c<3; c++){
      pontos=0;
      for(let l=0; l<3; l++){
        if(jogo[l][c]==jogador){
          pontos++;
        }
      }
      if(pontos>=3){
        vitoria=true
        break
      }
    }
    //diagonais
    pontos=0
    for(let d=0;d<3;d++){
      
      if(jogo[d][d]==jogador){
        
        pontos++
        
      }
    }
    if(pontos>=3){
      vitoria=true
      
    }
    pontos = 0
    let l = 0
    for(let c=2; c>=0;c--){
      if(jogo[l][c]==jogador){
        pontos++;
      }
      l++
    }
    if(pontos>=3){
      vitoria=true
      
    }
    return vitoria;
    
  }
  const trocaJogador=()=>{
    jogador =='X'?setJogador("O"):setJogador("X")
  }

 /* const retornaPosicao =(e)=>{
    const p = e.target.getAttribute('data-pos')
    const p2 = e.target.getAttribute('data-pos2');
    console.log(p)
    const pos = [parseInt(p.substring(0,1)),parseInt(p2.substring(1,2))];
    return pos
  }*/

  const verificaEspacoVazio=(index1, index2)=>{
   // console.log(retornaPosicao(e)[1])
    console.log(jogo[index1][index2])
    if(jogo[index1][index2]===''){
      console.log(true)
      return true
    }else{
      console.log(false)
      return false;
    }
  }

  const joga=(index1,index2)=>{
    
    if(jogando){
      if(verificaEspacoVazio(index1,index2)){
       // console.log(jogo[index1][index2], jogador)
        jogo[index1][index2]=jogador;
        trocaJogador()
        if(verificaVitoria()){
          trocaJogador()
          alert('Jogador '+ jogador +' venceu!')
          setJogando(false)
        }
      }else{
        alert("Espaço já definido!")
      }
    }
  }

  const reiniciar=()=>{
    setJogando(true)
    setJogo(jogoVelha)
    setJogador('X')
  }

  const BtnJogarNovamente=()=>{
    if(!jogando){
      return <button onClick={()=> reiniciar()}>Jogar Novamente</button>
    }
  }
  /*outra forma teste vitoria
  const encontraVencedor = ()=>{
    const formasDeVencer = [
            [campo[0], campo[1], campo[2]],
            [campo[3], campo[4], campo[5]],
            [campo[6], campo[7], campo[8]],

            [campo[0], campo[3], campo[6]],
            [campo[1], campo[4], campo[7]],
            [campo[2], campo[5], campo[8]],

            [campo[6], campo[4], campo[2]],
            [campo[0], campo[4], campo[8]],

    ]
    formasDeVencer.forEach(campos =>{
      if(campos.every(campo=>campo==="O")){
        setVancedor("O venceu")
      }
      else if(campos.every(campo=>campo==="X")){
        setVancedor("X venceu")
      }
      else {
        setVencedor("Empatou")
      }
    })
  }
  */


  return (
    <div>
      <h1>Jogo da Velha</h1>
      <p>Jogador atual: {jogador}</p>
      {jogo&&jogo.map((e,index1)=> <tr>{e.map((p,index2) => <button  onClick={()=>joga(index1,index2)}>{jogo[index1][index2]}</button>)}</tr>)}
      <BtnJogarNovamente></BtnJogarNovamente>
    </div>
  );
}

export default App;
