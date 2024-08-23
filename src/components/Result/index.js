import {
  ResultContainer,
  ImageContainer,
  ImageHeading,
  Image,
  ResultPara,
  PlayButton,
} from './styledComponents'

const Result = props => {
  const {choicesList, randomValue, userValue, apiStatus} = props
  const {changeApiInitial} = props

  const youValue = choicesList.filter(
    eachValue => eachValue.id === `${userValue}`,
  )

  const opponentValue = choicesList.filter(
    eachValue => eachValue.id === `${randomValue}`,
  )

  let resultValue

  if (apiStatus === 'WON') {
    resultValue = 'YOU WON'
  } else if (apiStatus === 'LOSE') {
    resultValue = 'YOU LOSE'
  } else {
    resultValue = 'IT IS DRAW'
  }

  const clickStart = () => {
    changeApiInitial()
  }

  return (
    <>
      <ResultContainer>
        <ImageContainer>
          <ImageHeading>YOU</ImageHeading>
          <Image src={youValue[0].imageUrl} alt="your choice" />
        </ImageContainer>
        <ImageContainer>
          <ImageHeading>OPPONENT</ImageHeading>
          <Image src={opponentValue[0].imageUrl} alt="opponent choice" />
        </ImageContainer>
      </ResultContainer>
      <ResultPara>{resultValue}</ResultPara>
      <PlayButton type="submit" onClick={clickStart}>
        Play Again
      </PlayButton>
    </>
  )
}

export default Result
