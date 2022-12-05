import React from 'react'
import styled from 'styled-components'

function Buttons(props) {
    const {text, color, cards, setCards, conclude, index, setConclude, setShowHidden, setShowButtons, data} = props
    
    return (
        <Container color = {color}>
            <button data-test ={data} onClick={() => {
                setConclude(conclude + 1)
                setShowButtons(false)
                setShowHidden(false)
                cards[index].color = color
                setCards([...cards])
            }}>{text}</button>
        </Container>
    )
}

export default Buttons

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
    width: 90px;
    background-color: ${props => props.color};
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
    cursor: pointer;
    }

`