import React, {useState} from 'react'
import { FooterContainer, ButtonContainer } from './styles'
import icone_certo from '../../assets/icone_certo.png'
import icone_erro from '../../assets/icone_erro.png'
import icone_quase from '../../assets/icone_quase.png'

function Footer(props) {
    const {cards, conclude} = props
    function showIcon(color, index){
      if( color === "#FF3030"){
        return(
          <div data-test="no-icon">
            <img key={index} src = {icone_erro}/>
          </div>
        )
      }
  
      else if( color === "#2FBE34"){
        return(
          <div data-test="zap-icon">
            <img key={index} src = {icone_certo}/>
          </div>
        )
      }
  
      if( color === "#FF922E"){
        return(
          <div data-test="partial-icon" >
            <img key={index} src = {icone_quase}/>
          </div>
        )
      }
    }


  function footerMainContainer(){
    return (
      <div>
       <span data-test="footer">{conclude} / {cards.length} CONCLUÍDOS</span>
       <ButtonContainer>
          {cards.map((item, index) => {
            return (
              cards[index].color? (showIcon(cards[index].color, index)) : ("")
            )
          })}
      </ButtonContainer>
      </div>
    )    
  }

  function includesRed(){
    for(let i in cards){
      if(cards[i].color === "#FF3030" ) return true
    }
    return false
  }
  
  function showFooter(){
    if(conclude !== cards.length ){
      return (
        <FooterContainer>
          {footerMainContainer()}
        </FooterContainer>
      )}
    else{
      if(includesRed()){
        return (
        <FooterContainer>
          <div data-test="finish-text">
            <span>Putz...</span> <span>Ainda faltam alguns... Mas não desanime!</span>
          </div>
          {footerMainContainer()}
        </FooterContainer>
        )}
      else {
        return (
        <FooterContainer>
          <div data-test="finish-text">
            <span>Parabéns!</span> <span >Você não esqueceu de nenhum flashcard!</span>
          </div>
          {footerMainContainer()}
        </FooterContainer>

      )}
    }

  } 
  
  return (
    showFooter()
  )
}

export default Footer