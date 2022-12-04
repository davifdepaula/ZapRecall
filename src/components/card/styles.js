import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    padding: 0 12px;
    border-radius: 5px;
    margin-bottom: 25px;

    span {
        font-family: cursive;; 
        font-size: 16px;
        font-wight: 700;
        color: ${props => props.color? (props.color): (null)};
        text-decoration: ${props => props.color? ("line-through"): ("none")};
    }

    ion-icon {
        font-size: 22px;
        cursor: pointer;
    }
`

export const HiddenContainer = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        position: absolute;
        bottom: 10px;
        right: 10px;

`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5px;
`
