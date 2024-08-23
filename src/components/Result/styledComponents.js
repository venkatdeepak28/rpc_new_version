import styled from 'styled-components'

export const ResultContainer = styled.div`
  list-style: none;
  height: 30vh;
  width: 40vw;
  flex-wrap: wrap;
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImageHeading = styled.p`
  font-family: 'Roboto';
  color: white;
`
export const Image = styled.img`
  height: 135px;
`
export const ResultPara = styled.p`
  margin-top: 2%;
  margin-left: 1%;
  font-family: 'Roboto';
  color: white;
  font-size: 24px;
`
export const PlayButton = styled.button`
  color: #223a5f;
  background-color: white;
  margin-top: 0;
  border: 0;
  margin-left: 2%;
  height: 7vh;
  width: 15vw;
  font-family: 'Bree Serif';
  font-size: 20px;
  border-radius: 10px;
`
