import React from 'react'
import { FooterContainer, ButtonContainer } from './styles'
import icone_certo from '../../assets/icone_certo.png'
import icone_erro from '../../assets/icone_erro.png'
import icone_quase from '../../assets/icone_quase.png'

function Footer(props) {
    const {cards, conclude, concludeQuantity} = props
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
  return (
    <FooterContainer>
      <span>{conclude} / {concludeQuantity} CONCLUÍDOS</span>
      <ButtonContainer>
        {cards.map((item, index) => {
          return (
            cards[index].color? (showIcon(cards[index].color)) : ("")
          )
        })}
      </ButtonContainer>
    </FooterContainer>
  )
}

export default Footer