import React from 'react'
import styled from 'styled-components'

function Buttons(props) {
    const {text, color, cards, setCards, conclude, index, setConclude, setShowHidden, setShowButtons} = props


    return (
        <Container color = {color}>
            <div data-test="no-btn partial-btn zap-btn" onClick={() => {
                setConclude(conclude + 1)
                setShowButtons(false)
                setShowHidden(false)
                cards[index].color = color
                setCards([...cards])
            }}>{text}</div>
        </Container>
    )
}

export default Buttons

const Container = styled.div`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background-color: ${props => props.color};
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
    cursor: pointer;
`