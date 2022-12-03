import React, {useState} from "react";
import { ContainerApp, Logo, Zap, ZapLogo } from "./styles.js";
import logo from "../../assets/logo.png"
import Card from "../card";
import Footer from "../footer/index.js";

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript", color: "" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces", color: "" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula", color: "" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões", color: "" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma", color: "" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências", color: "" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes", color: "" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", color: "" }
]

function App() {
  const [conclude, setConclude] = useState(0)
  const [answer, setAnswer] = useState([])
  const [gameOn, setGameOn] = useState(false)
  const [cards, setCards] = useState([{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript", color: "" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces", color: "" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula", color: "" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões", color: "" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma", color: "" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências", color: "" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes", color: "" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", color: ""} ])
  

  function onZap(){
    return (
      <ContainerApp>
        <Logo>
          <img src = {logo}/> <span>ZapRecall</span>
        </Logo>
        {cards.map((item, index) => {
          return (
            <Card 
              key = {index}
              item = {item}
              index = {index}
              answer = {answer}
              setAnswer = {setAnswer}
              cards = {cards}
              setCards = {setCards}
              conclude = {conclude}
              setConclude = {setConclude}
             />
          )
        })}
        <Footer
        conclude = {conclude}
        cards = {cards} />
      </ContainerApp>
    )
  }

  function startZap(){
    return (
    <Zap>
      <ZapLogo>
          <img src = {logo}/> <span>ZapRecall</span>
        </ZapLogo>

      <button data-test="start-btn" onClick={() => setGameOn(true)}>Iniciar Recall</button>
    </Zap>)
  }

  return (
    gameOn? (onZap()) : (startZap())
  )
}

export default App;
