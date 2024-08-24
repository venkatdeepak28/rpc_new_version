import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const GameContainer = styled.div`
  list-style: none;
  height: 30vh;
  width: 30vw;
  flex-wrap: wrap;
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 0;
  padding-bottom: 0;
`
export const GameButton = styled.button`
  background-color: transparent;
  border: 0;
`
export const GameLogo = styled.img`
  height: 140px;
`
export const RulesButton = styled.button`
  color: #223a5f;
  background-color: white;
  margin-top: 2%;
  border: 0;
  height: 5vh;
  width: 8vw;
  font-family: 'Bree Serif';
  font-size: 20px;
  border-radius: 10px;
`

export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vw;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`
export const PopUpImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
