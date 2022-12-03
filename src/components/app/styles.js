import styled from 'styled-components'

export const ContainerApp =styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
    margin-bottom: 60px;

    img {
        width: 52px;
    }

    span {
        color: #FFFFFF;
        font-family: 'Righteous', cursive;; 
        font-size: 36px;
        font-wight: 400;
    }
`

export const Zap = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    padding-top: 100px;
    padding-bottom: 200px;

    button {
        color: #D70900;
        background: #FFFFFF;
        width: 246px;
        height: 54px;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        cursor: pointer;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }

`
export const ZapLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
    margin-bottom: 60px;

    img {
        width: 136px;
    }

    span {
        color: #FFFFFF;
        font-family: 'Righteous', cursive;; 
        font-size: 36px;
        font-wight: 400;
    }

`