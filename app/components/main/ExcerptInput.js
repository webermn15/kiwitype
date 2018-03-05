import React, { Component } from 'react'
import request from 'superagent'
import Excerpt from './Excerpt'
import './main.css'

const initialState = {
	timer: null,
	counter: 0,
	charIndex: 0,
	countdown: 0,
	error: false
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
  	let timer = setInterval(this.tick, 500)
  	this.setState({timer: timer})
  }

  clearTimer = () => {
  	clearInterval(this.state.timer)
  	this.setState({timer: null, counter: 0})
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
  	console.log('match')
  	this.setState({charIndex: this.state.charIndex + 1, error: false})
  	if (this.inputVal.value.length > 5) {
  		this.inputVal.value = this.inputVal.value.substring(1)
  	}
  	if (this.state.charIndex == this.state.body.length - 1) {
  		let wpm = (this.state.body.length / 5) / (this.state.counter / 60)
    	this.clearTimer()
    	this.inputVal.value = ''
  		this.setState({...this.state, initialState})
  		request
  			.post('http://localhost:9292/attempts/new')
  			.type('form')
  			.send({excerpt_id: this.props.currentExcerpt.id, wpm: wpm})
  			.end((err, res) => {
  				console.log(res)
  			})
  	}
  }

  inputError = () => {
  	console.log('error')
  	this.setState({error: true})
  }

	render() {
		console.log(this.state)
		return(
			<div>
				<Excerpt currentExcerpt={this.props.currentExcerpt} bodyArray={this.state.body} currentIndex={this.state.charIndex}/>
				<input 
					style={{
						color: this.state.error ? 'white' : 'black',
					  backgroundColor: this.state.error ? 'red' : null
					}}
					onChange={this.checkInput} 
					maxLength="6" 
					className="excerpt-input" 
					placeholder="user input goes here" 
					ref={character => this.inputVal = character}
				/>
				<button onClick={() => {!this.state.timer ? this.startTimer() : this.clearTimer()}}>Start?</button>
			</div>
		)
	}
}

export default ExcerptInput

  		

