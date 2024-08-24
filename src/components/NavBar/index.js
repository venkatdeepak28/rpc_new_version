import {
  NavContainer,
  NavHeading,
  SpaceContainer,
  ScoreHeading,
  Score,
} from './styledComponents'

const Navbar = props => {
  const {score} = props

  return (
    <NavContainer>
      <div>
        <NavHeading>ROCK PAPER SCISSORS</NavHeading>
      </div>
      <SpaceContainer>
        <ScoreHeading>Score</ScoreHeading>
        <Score>{score}</Score>
      </SpaceContainer>
    </NavContainer>
  )
}

export default Navbar
