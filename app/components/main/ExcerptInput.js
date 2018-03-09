import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postScore } from '../../actions'
import request from 'superagent'
import './main.css'
import Excerpt from './Excerpt'

const initialState = {
	timer: null,
	counter: 0,
	charIndex: 0,
	countdown: 4,
	error: false,
  showCountdown: false
}

class ExcerptInput extends Component<{}> {
	constructor() {
		super()

		this.state = {
			body: [],
			...initialState
		}
	}

  componentWillReceiveProps(props) {
    const body = props.currentExcerpt.body.split('')
    this.setState({...initialState, body: body})
    this.clearTimer()
    this.inputVal.value = ''
  }

  startTimer = () => {
    let countdownTimer = setInterval(() => {
      this.setState({showCountdown: true, countdownTimer: countdownTimer, countdown: this.state.countdown - 1}, () => {this.checkCountdown()})
    }, 1000)
  }

  checkCountdown = () => {
    if (this.state.countdown === 0) {
      let timer = setInterval(this.tick, 500)
      this.setState({timer: timer, showCountdown: false, countdownTimer: null})
      clearInterval(this.state.countdownTimer)
      this.inputVal.focus()
    }
  }

  clearTimer = () => {
  	clearInterval(this.state.timer)
  	this.setState({timer: null, counter: 0, countdown: 4, charIndex: 0, showCountdown: false})
  }

  tick = () => {
    this.setState({
      counter: this.state.counter + 0.5
    });
  }

  checkInput = () => {
  	let checkLast = this.inputVal.value
  	checkLast.charAt(checkLast.length - 1) === this.state.body[this.state.charIndex] ? this.inputMatch() : this.inputError()
  }

  inputMatch = () => {
  	this.setState({charIndex: this.state.charIndex + 1, error: false})
  	if (this.inputVal.value.length > 14) {
  		this.inputVal.value = this.inputVal.value.substring(1)
  	}
  	if (this.state.charIndex == this.state.body.length - 1) {
  		let wpm = (this.state.body.length / 5) / (this.state.counter / 60)
    	this.clearTimer()
    	this.inputVal.value = ''

      this.props.dispatch(postScore(this.props.currentExcerpt.id, wpm))
  	}
  }

  inputError = () => {
  	this.setState({error: true})
  }

	render() {
		console.log(this.state)
		return(
			<div className="excerpt-container">
				<Excerpt currentExcerpt={this.props.currentExcerpt} bodyArray={this.state.body} currentIndex={this.state.charIndex}/>
				<input 
					style={{
						color: this.state.error ? 'white' : 'black',
					  backgroundColor: this.state.error ? 'red' : null,
            fontSize: '32px'
					}}
					onChange={this.checkInput} 
					maxLength={!this.state.timer ? 0 : 15} 
					className="excerpt-input" 
					placeholder={this.state.timer ? 'Go!' : "Ready?"} 
					ref={character => this.inputVal = character}
				/>
				<button onClick={() => {!this.state.timer ? this.startTimer() : this.clearTimer()}}>{this.state.timer ? 'Reset?' : 'Start!'}</button> 
        {this.state.showCountdown ? <span style={{fontSize: '32px', margin: '2px'}}>{this.state.countdown}</span> : null}
			</div>
		)
	}
}

export default connect()(ExcerptInput)

  		

