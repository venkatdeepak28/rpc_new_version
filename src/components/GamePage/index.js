import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import {
  BackgroundContainer,
  GameContainer,
  GameButton,
  GameLogo,
  RulesButton,
  RulesView,
  PopUpView,
  PopUpImage,
} from './styledComponents'

import Navbar from '../NavBar'
import Result from '../GameResultView'

const apiStatusConstant = {
  initial: 'INITIAL',
  won: 'WON',
  lose: 'LOSE',
  draw: 'DRAW',
}

class GamePage extends Component {
  state = {
    randomValue: '',
    userValue: '',
    apiStatus: apiStatusConstant.initial,
    score: 0,
  }

  componentDidMount() {
    this.generateRandomValue()
  }

  generateRandomValue = () => {
    const random = Math.floor(Math.random() * 3)
    let randomName
    if (random === 0) {
      randomName = 'ROCK'
    } else if (random === 1) {
      randomName = 'SCISSORS'
    } else {
      randomName = 'PAPER'
    }

    this.setState({randomValue: randomName})
  }

  changeApiStatus = () => {
    const {userValue, randomValue} = this.state

    if (userValue === 'ROCK') {
      if (randomValue === userValue) {
        this.setState({apiStatus: apiStatusConstant.draw})
      }
      if (randomValue === 'PAPER') {
        this.setState(prevState => ({
          apiStatus: apiStatusConstant.lose,
          score: prevState.score - 1,
        }))
      }
      if (randomValue === 'SCISSORS') {
        this.setState(prevState => ({
          apiStatus: apiStatusConstant.won,
          score: prevState.score + 1,
        }))
      }
    }

    if (userValue === 'SCISSORS') {
      if (randomValue === userValue) {
        this.setState({apiStatus: apiStatusConstant.draw})
      }
      if (randomValue === 'ROCK') {
        this.setState(prevState => ({
          apiStatus: apiStatusConstant.lose,
          score: prevState.score - 1,
        }))
      }
      if (randomValue === 'PAPER') {
        this.setState(prevState => ({
          apiStatus: apiStatusConstant.won,
          score: prevState.score + 1,
        }))
      }
    }

    if (userValue === 'PAPER') {
      if (randomValue === userValue) {
        this.setState({apiStatus: apiStatusConstant.draw})
      }
      if (randomValue === 'SCISSORS') {
        this.setState(prevState => ({
          apiStatus: apiStatusConstant.lose,
          score: prevState.score - 1,
        }))
      }
      if (randomValue === 'ROCK') {
        this.setState(prevState => ({
          apiStatus: apiStatusConstant.won,
          score: prevState.score + 1,
        }))
      }
    }
  }

  changeValue = id => {
    this.setState({userValue: id}, this.changeApiStatus)
  }

  changeApiInitial = () => {
    this.setState(
      {apiStatus: apiStatusConstant.initial},
      this.generateRandomValue,
    )
  }

  renderPage = () => {
    const {choicesList} = this.props

    return (
      <GameContainer>
        <GameButton
          type="button"
          data-testid="rockButton"
          onClick={() => this.changeValue(choicesList[0].id)}
        >
          <GameLogo
            src={choicesList[0].imageUrl}
            alt={choicesList[0].id}
            key={choicesList[0].id}
          />
        </GameButton>
        <GameButton
          type="button"
          data-testid="scissorsButton"
          onClick={() => this.changeValue(choicesList[1].id)}
        >
          <GameLogo
            src={choicesList[1].imageUrl}
            alt={choicesList[1].id}
            key={choicesList[1].id}
          />
        </GameButton>
        <GameButton
          type="button"
          data-testid="paperButton"
          onClick={() => this.changeValue(choicesList[2].id)}
        >
          <GameLogo
            src={choicesList[2].imageUrl}
            alt={choicesList[2].id}
            key={choicesList[2].id}
          />
        </GameButton>
      </GameContainer>
    )
  }

  render() {
    const {score, apiStatus, randomValue, userValue} = this.state
    const {choicesList} = this.props

    return (
      <BackgroundContainer>
        <Navbar score={score} />.
        {apiStatus === apiStatusConstant.initial ? (
          this.renderPage()
        ) : (
          <Result
            choicesList={choicesList}
            randomValue={randomValue}
            userValue={userValue}
            apiStatus={apiStatus}
            changeApiInitial={this.changeApiInitial}
            renderPage={this.renderPage}
          />
        )}
        <RulesView>
          <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
            {close => (
              <PopUpView>
                {/* eslint-disable-next-line */}
                <button type="button" onClick={() => close()}>
                  <RiCloseLine />
                </button>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopUpView>
            )}
          </Popup>
        </RulesView>
      </BackgroundContainer>
    )
  }
}

export default GamePage
