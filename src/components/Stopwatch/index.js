// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    isTimerElapsed: 0,
  }

  onClikResetBtn = () => {
    this.onStopButton()
    this.setState({isTimerElapsed: 0})
  }

  onClickStopButton = () => {
    this.onStopButton()
    this.setState({isTimerRunning: false})
  }

  onStopButton = () => clearInterval(this.intervalId)

  onStartTimer = () => {
    this.setState(prevState => ({isTimerElapsed: prevState.isTimerElapsed + 1}))
  }

  timerDisplay = () => {
    const {isTimerElapsed} = this.state

    const minutes = Math.floor(isTimerElapsed / 60)
    const seconds = Math.floor(isTimerElapsed % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    const resultTimer = `${stringifiedMinutes}:${stringifiedSeconds}`
    return resultTimer
  }

  onClickStartButton = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.intervalId = setInterval(this.onStartTimer, 1000)
    }
  }

  render() {
    const {isTimerElapsed, isTimerRunning} = this.state
    console.log(isTimerRunning)

    console.log(isTimerElapsed)

    return (
      <div className="over-all-container">
        <div className="bg-container">
          <div className="Stopwatch-card">
          <h1>Stopwatch</h1>
            <div className="timer-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-image"
                alt="stopwatch"
              />
              <h1 className="timer-heading">Timer</h1>
            </div>
            <h1 className="timer">{this.timerDisplay()}</h1>
            <div className="buttons-container">
              <button
                className="start-btn"
                type="button"
                onClick={this.onClickStartButton}
              >
                Start
              </button>
              <button
                className="stop-btn"
                type="button"
                onClick={this.onClickStopButton}
              >
                Stop
              </button>
              <button
                className="reset-btn"
                type="button"
                onClick={this.onClikResetBtn}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
