import React, { Component } from 'react'
import SVGInline from 'react-svg-inline'
import keyboard from './keyboard_diagram.svg'
import './main.css'

class KeyboardDisplay extends Component<{}> {
	constructor() {
		super()

		this.state = {
			bgColor: '#9AB452'
		}
	}
	componentDidMount = () => {
		window.addEventListener('keydown', this.handleKeyPress)
		window.addEventListener('keyup', this.handleKeyRelease)
	}
	handleKeyPress = (e) => {
		console.log(e.code)
		let lastPress = document.getElementById(e.code)
		if (lastPress) {
			lastPress.setAttribute('fill', this.state.bgColor)
		}
	}
	handleKeyRelease = (e) => {
		let lastPress = document.getElementById(e.code)
		if (lastPress) {
			lastPress.setAttribute('fill', 'black')
		}
	}
	render() {
		return(
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 300" height="240" >
					    <g fontSize="24" fontWeight="700" textAnchor="middle" fontFamily="Helvetica" color="white">
					        <g>
						        <path id="Backquote" d="M60,0 h-60 v60 h60" fill="black"/>
						        <path id="Digit1" d="M120,0 h-60 v60 h60" fill="black"/>
						        <path id="Digit2" d="M180,0 h-60 v60 h60" fill="black"/>
						        <path id="Digit3" d="M240,0 h-60 v60 h60" fill="black"/>
						        <path id="Digit4" d="M300,0 h-60 v60 h60" fill="black"/>
						        <path id="Digit5" d="M360,0 h-60 v60 h60" fill="black"/>
						        <path id="Digit6" d="M420,0 h-60 v60 h60" fill="black"/>
						        <path id="Digit7" d="M480,0 h-60 v60 h60" fill="black"/>
						        <path id="Digit8" d="M540,0 h-60 v60 h60" fill="black"/>
						        <path id="Digit9" d="M600,0 h-60 v60 h60" fill="black"/>
						        <path id="Digit0" d="M660,0 h-60 v60 h60" fill="black"/>
						        <path id="Minus" d="M720,0 h-60 v60 h60" fill="black"/>
						        <path id="Equal" d="M780,0 h-60 v60 h60" fill="black"/>
						        <path id="Backspace" d="M900,0 h-120 v60 h120" fill="black"/>
						      </g>
					        <g>
						        <path id="Tab" d="M90,60 h-90 v60 h90" fill="black"/>
						        <path id="KeyQ" d="M150,60 h-60 v60 h60" fill="black"/>
						        <path id="KeyW" d="M210,60 h-60 v60 h60" fill="black"/>
						        <path id="KeyE" d="M270,60 h-60 v60 h60" fill="black"/>
						        <path id="KeyR" d="M330,60 h-60 v60 h60" fill="black"/>
						        <path id="KeyT" d="M390,60 h-60 v60 h60" fill="black"/>
						        <path id="KeyY" d="M450,60 h-60 v60 h60" fill="black"/>
						        <path id="KeyU" d="M510,60 h-60 v60 h60" fill="black"/>
						        <path id="KeyI" d="M570,60 h-60 v60 h60" fill="black"/>
						        <path id="KeyO" d="M630,60 h-60 v60 h60" fill="black"/>
						        <path id="KeyP" d="M690,60 h-60 v60 h60" fill="black"/>
						        <path id="BracketLeft" d="M750,60 h-60 v60 h60" fill="black"/>
						        <path id="BracketRight" d="M810,60 h-60 v60 h60" fill="black"/>
						        <path id="Backslash" d="M900,60 h-90 v60 h90" fill="black"/>
						      </g>
					        <g>
						        <path id="CapsLock" d="M105,120 h-105 v60 h105" fill="black"/>
						        <path id="KeyA" d="M165,120 h-60 v60 h60" fill="black"/>
						        <path id="KeyS" d="M225,120 h-60 v60 h60" fill="black"/>
						        <path id="KeyD" d="M285,120 h-60 v60 h60" fill="black"/>
						        <path id="KeyF" d="M345,120 h-60 v60 h60" fill="black"/>
						        <path id="KeyG" d="M405,120 h-60 v60 h60" fill="black"/>
						        <path id="KeyH" d="M465,120 h-60 v60 h60" fill="black"/>
						        <path id="KeyJ" d="M525,120 h-60 v60 h60" fill="black"/>
						        <path id="KeyK" d="M585,120 h-60 v60 h60" fill="black"/>
						        <path id="KeyL" d="M645,120 h-60 v60 h60" fill="black"/>
						        <path id="Semicolon" d="M705,120 h-60 v60 h60" fill="black"/>
						        <path id="Quote" d="M765,120 h-60 v60 h60" fill="black"/>
						        <path id="Enter" d="M900,120 h-135 v60 h135" fill="black"/>
						      </g>
					        <g>
						        <path id="ShiftLeft" d="M135,180 h-150 v60 h150" fill="black"/>
						        <path id="KeyZ" d="M195,180 h-60 v60 h60" fill="black"/>
						        <path id="KeyX" d="M255,180 h-60 v60 h60" fill="black"/>
						        <path id="KeyC" d="M315,180 h-60 v60 h60" fill="black"/>
						        <path id="KeyV" d="M375,180 h-60 v60 h60" fill="black"/>
						        <path id="KeyB" d="M435,180 h-60 v60 h60" fill="black"/>
						        <path id="KeyN" d="M495,180 h-60 v60 h60" fill="black"/>
						        <path id="KeyM" d="M555,180 h-60 v60 h60" fill="black"/>
						        <path id="Comma" d="M615,180 h-60 v60 h60" fill="black"/>
						        <path id="Period" d="M675,180 h-60 v60 h60" fill="black"/>
						        <path id="Slash" d="M735,180 h-60 v60 h60" fill="black"/>
						        <path id="ShiftRight" d="M900,180 h-165 v60 h165" fill="black"/>
						      </g>
					        <g>
						        <path id="ControlLeft" d="M90,240 h-90 v60 h90" fill="black"/>
						        <path id="AltLeft" d="M150,240 h-60 v60 h60" fill="black"/>
						        <path id="MetaLeft" d="M240,240 h-90 v60 h90" fill="black"/>
						        <path id="Space" d="M600,240 h-360 v60 h360" fill="black"/>
						        <path id="MetaRight" d="M690,240 h-90 v60 h90" fill="black"/>
						        <path id="AltRight" d="M750,240 h-60 v60 h60" fill="black"/>
						        <path d="M810,240 h-60 v60 h60" fill="black"/>
						        <path id="ControlRight" d="M900,240 h-90 v60 h90" fill="black"/>
						      </g>
					        <g fill="none" stroke="white">
					            <path d="M60 0v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60M90 60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m-705 0v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m-630 0v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m-645 0v60m60-60v60m90-60v60m360-60v60m90-60v60m60-60v60m60-60v60M0 60h900M0 120h900M0 180h900M0 240h900M0 0h900v300H0z"/>
					        </g>
					        <g fontSize="16px" fill="white">
						        <text>
							        <tspan y="25" x="45">~</tspan>
							      </text>
						        <text>
							        <tspan y="25" x="100">!</tspan>
							      </text>
						        <text>
							        <tspan y="25" x="160">@</tspan>
							      </text>
						        <text>
							        <tspan y="25" x="220">#</tspan>
							      </text>
						        <text>
							        <tspan y="25" x="280">$</tspan>
							      </text>
						        <text>
							        <tspan y="25" x="340">%</tspan>
							      </text>
						        <text>
							        <tspan y="25" x="400">^</tspan>
							      </text>
						        <text>
							        <tspan y="25" x="460">&</tspan>
							      </text>
						        <text>
							        <tspan y="25" x="520">*</tspan>
							      </text>
						        <text>
							        <tspan y="25" x="580">(</tspan>
							      </text>
						        <text>
							        <tspan y="25" x="640">)</tspan>
							      </text>
						        <text>
							        <tspan y="25" x="700">_</tspan>
							      </text>
						        <text>
							        <tspan y="25" x="760">+</tspan>
							      </text>
							    </g>
					        <g fontSize="16px" fill="white">
						        <text>
							        <tspan y="50" x="45">`</tspan>
							      </text>
						        <text>
							        <tspan y="50" x="100">1</tspan>
							      </text>
						        <text>
							        <tspan y="50" x="160">2</tspan>
							      </text>
						        <text>
							        <tspan y="50" x="220">3</tspan>
							      </text>
						        <text>
							        <tspan y="50" x="280">4</tspan>
							      </text>
						        <text>
							        <tspan y="50" x="340">5</tspan>
							      </text>
						        <text>
							        <tspan y="50" x="400">6</tspan>
							      </text>
						        <text>
							        <tspan y="50" x="460">7</tspan>
							      </text>
						        <text>
							        <tspan y="50" x="520">8</tspan>
							      </text>
						        <text>
							        <tspan y="50" x="580">9</tspan>
							      </text>
						        <text>
							        <tspan y="50" x="640">0</tspan>
							      </text>
						        <text>
							        <tspan y="50" x="700">-</tspan>
							      </text>
						        <text>
							        <tspan y="50" x="760">=</tspan>
							      </text>
						        <text>
							        <tspan y="50" x="810">Delete</tspan>
							      </text>
							    </g>
					        <g fill="white">
						        <text fontSize="16px">
							        <tspan y="110" x="65">Tab</tspan>
							      </text>
						        <text>
							        <tspan y="110" x="130">Q</tspan>
							      </text>
						        <text>
							        <tspan y="110" x="190">W</tspan>
							      </text>
						        <text>
							        <tspan y="110" x="250">E</tspan>
							      </text>
						        <text>
							        <tspan y="110" x="310">R</tspan>
							      </text>
						        <text>
							        <tspan y="110" x="370">T</tspan>
							      </text>
						        <text>
							        <tspan y="110" x="430">Y</tspan>
							      </text>
						        <text>
							        <tspan y="110" x="490">U</tspan>
							      </text>
						        <text>
							        <tspan y="110" x="550">I</tspan>
							      </text>
						        <text>
							        <tspan y="110" x="610">O</tspan>
							      </text>
						        <text>
							        <tspan y="110" x="670">P</tspan>
							      </text>
						        <text fontSize="16">
							        <tspan y="110" x="730">[</tspan>
							      </text>
						        <text fontSize="16">
							        <tspan y="110" x="790">]</tspan>
							      </text>
						        <text fontSize="16">
							        <tspan y="110" x="850">\</tspan>
							      </text>
							    </g>
							    <g fill="white">
						        <text fontSize="16">
							        <tspan y="170" x="53">Caps Lock</tspan>
							      </text>
						        <text>
							        <tspan y="170" x="145">A</tspan>
							      </text>
						        <text>
							        <tspan y="170" x="205">S</tspan>
							      </text>
						        <text>
							        <tspan y="170" x="265">D</tspan>
							      </text>
						        <text>
							        <tspan y="170" x="325">F</tspan>
							      </text>
						        <text>
							        <tspan y="170" x="385">G</tspan>
							      </text>
						        <text>
							        <tspan y="170" x="445">H</tspan>
							      </text>
						        <text>
							        <tspan y="170" x="505">J</tspan>
							      </text>
						        <text>
							        <tspan y="170" x="565">K</tspan>
							      </text>
						        <text>
							        <tspan y="170" x="625">L</tspan>
							      </text>
						        <text>
							        <tspan y="170" x="685">;</tspan>
							      </text>
						        <text fontSize="16">
							        <tspan y="170" x="745">'</tspan>
							      </text>
						        <text fontSize="16">
							        <tspan y="170" x="805">Return</tspan>
							      </text>
							    </g>
							    <g fill="white">
						        <text fontSize="16">
							        <tspan y="230" x="105">Shift</tspan>
							      </text>
						        <text>
							        <tspan y="230" x="175">Z</tspan>
							      </text>
						        <text>
							        <tspan y="230" x="235">X</tspan>
							      </text>
						        <text>
							        <tspan y="230" x="295">C</tspan>
							      </text>
						        <text>
							        <tspan y="230" x="355">V</tspan>
							      </text>
						        <text>
							        <tspan y="230" x="415">B</tspan>
							      </text>
						        <text>
							        <tspan y="230" x="475">N</tspan>
							      </text>
						        <text>
							        <tspan y="230" x="535">M</tspan>
							      </text>
						        <text>
							        <tspan y="230" x="595">,</tspan>
							      </text>
						        <text>
							        <tspan y="230" x="655">.</tspan>
							      </text>
						        <text fontSize="16">
							        <tspan y="230" x="715">/</tspan>
							      </text>
						        <text fontSize="16">
							        <tspan y="230" x="775">Shift</tspan>
							      </text>
							    </g>
							    <g fontSize="16" fill="white">
						        <text>
							        <tspan y="290" x="65">Ctrl</tspan>
							      </text>
						        <text>
							        <tspan y="290" x="130">Alt</tspan>
							      </text>
						        <text>
							        <tspan y="290" x="205">Option</tspan>
							      </text>
						        <text>
							        <tspan y="290" x="420">Space</tspan>
							      </text>
						        <text>
							        <tspan y="290" x="635">Option</tspan>
							      </text>
						        <text>
							        <tspan y="290" x="710">Alt</tspan>
							      </text>
						        <text>
							        <tspan y="290" x="835">Ctrl</tspan>
							      </text>
							    </g>
					    </g>
					</svg>
			</div>
		)
	}
}

export default KeyboardDisplay