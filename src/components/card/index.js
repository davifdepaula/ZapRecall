import React,  {useState} from 'react'
import Buttons from '../buttons'
import { CardContainer, HiddenContainer, ButtonContainer } from './styles'
import seta_virar from '../../assets/seta_virar.png'
import icone_certo from '../../assets/icone_certo.png'
import icone_erro from '../../assets/icone_erro.png'
import icone_quase from '../../assets/icone_quase.png'

const buttons = [{text: "Não lembrei", color: "#FF3030"}, 
                {text: "Quase não Lembrei", color: "#FF922E"}, 
                {text: "Zap", color: "#2FBE34"}]

function Card(props) {
  const {item, index, conclude, cards, setCards, setConclude} =  props

  const [showHidden, setShowHidden] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  function showCard(){
    if(!showHidden){
      return front()
    }
    return hidden()
  }

  function front(){
    return (
      <CardContainer color = {cards[index].color}>
        <span>Pergunta {index + 1}</span> 
        <div onClick={() => {if(!cards[index].color) setShowHidden(true)}}>
          {cards[index].color ? (showIcon(cards[index].color)):(<ion-icon name="play-outline"></ion-icon>)}
        </div>

      </CardContainer>
    )
  }

  function showIcon(color){
    if( color === "#FF3030"){
      return(
        <img src = {icone_erro}/>
      )
    }

    else if( color === "#2FBE34"){
      return(
        <img src = {icone_certo}/>
      )
    }

    if( color === "#FF922E"){
      return(
        <img src = {icone_quase}/>
      )
    }
  }
  
  function showCardButtons(){
    return (
    <HiddenContainer color = {cards[index].color}>
      <span> {item.question} </span>
      <ButtonContainer>
        {buttons.map((item)=> {
          return (
            <Buttons 
              key = {item.text}
              text = {item.text}
              cards = {cards}
              setCards = {setCards}
              color = {item.color}
              conclude = {conclude}
              index = {index}
              setConclude = {setConclude}
              setShowHidden = {setShowHidden}
              setShowButtons = {setShowButtons}
            />)
        })}
      </ButtonContainer>
    </HiddenContainer>)
  }

  function hidden(){
    return (
      showButtons?      
      (showCardButtons()):      
      (<HiddenContainer>
        <span> {item.question} </span>
        <img onClick={() => setShowButtons(true)} src = {seta_virar} />
      </HiddenContainer>)
  )}

  return (
      showCard()
  )
}

export default Card