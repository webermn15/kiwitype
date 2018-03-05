import React, { Component } from 'react'
import Excerpt from './Excerpt'
import './main.css'

class ExcerptInput extends Component<{}> {
	constructor() {
		super()

		this.state = {
			body: [],
			timer: null,
			counter: 0,
			charIndex: 0,
			countdown: 0
		}
	}

  componentWillReceiveProps(props) {
    const body = props.currentExcerpt.body.split('');
    this.setState({body: body});
  }

  startTimer = () => {
  	let timer = setInterval(this.tick, 1000)
  	this.setState({timer: timer})
  }

  clearTimer = () => {
  	clearInterval(this.state.timer)
  	this.setState({timer: null, counter: 0})
  }

  tick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  checkInput = () => {
  	let checkLast = this.inputVal.value
  	checkLast.charAt(checkLast.length - 1) === this.state.body[this.state.charIndex] ? this.inputMatch() : this.inputError()
  }

  inputMatch = () => {
  	console.log('match')
  	this.setState({charIndex: this.state.charIndex + 1})
  	if (this.inputVal.value.length > 4) {
  		this.inputVal.value = this.inputVal.value.substring(1)
  	}
  }

  inputError = () => {
  	console.log('error')

  }

	render() {
		console.log(this.props, this.state)
		return(
			<div>
				<Excerpt currentExcerpt={this.props.currentExcerpt} bodyArray={this.state.body} currentIndex={this.state.charIndex}/>
				<input onChange={this.checkInput} maxLength="5" className="excerpt-input" placeholder="user input goes here" ref={character => this.inputVal = character}/>
				<button onClick={() => {!this.state.timer ? this.startTimer() : this.clearTimer()}}>Start?</button>
			</div>
		)
	}
}

export default ExcerptInput