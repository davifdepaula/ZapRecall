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
          <img key={index} src = {icone_erro}/>
        )
      }
  
      else if( color === "#2FBE34"){
        return(
          <img key={index} src = {icone_certo}/>
        )
      }
  
      if( color === "#FF922E"){
        return(
          <img key={index} src = {icone_quase}/>
        )
      }
    }


  function footerMainContainer(){
    return (
      <>
       <span>{conclude} / {cards.length} CONCLUÍDOS</span>
       <ButtonContainer>
          {cards.map((item, index) => {
            return (
              cards[index].color? (showIcon(cards[index].color, index)) : ("")
            )
          })}
      </ButtonContainer>
      </>
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
        console.log(includesRed())
        console.log("tem vermelho")
        return (
        <FooterContainer>
          <span>Putz...</span> <span>Ainda faltam alguns... Mas não desanime!</span>
          {footerMainContainer()}
        </FooterContainer>
        )}
      else {
        console.log(includesRed())
        console.log("não tem vermelho")
        return (
        <FooterContainer>
          <span>Parabéns!</span> <span>Você não esqueceu de nenhum flashcard!</span>
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