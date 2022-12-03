import styled from "styled-components";


export const FooterContainer = styled.div`
    box-sizing: border-box;
    width: 100vw;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
    
    span {
        padding-top: 5px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: flex-start;
    margin: 20px;
    gap: 5px;
`