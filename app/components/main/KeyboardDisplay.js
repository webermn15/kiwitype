import React from 'react'
import SVGInline from 'react-svg-inline'
import keyboard from './keyboard_diagram.svg'

const yellow = 'yellow'

const KeyboardDisplay = () => (
	<div>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 300" height="200" >
			    <g fontSize="24" fontWeight="700" textAnchor="middle" fontFamily="Helvetica">
			        <path d="M0 60h90v60h15v60h30v60H90v60H0V60zm150 180h90v60h-90v-60zm450 0h90v60h-90v-60zM780 0h120v300h-90v-60h-75v-60h30v-60h45V60h-30V0z" fillOpacity=".25" fill="green"/>
			        <g>
				        <path d="M150,60 h-60 v60 h60" fill={yellow}/>
				        <path d="M210,60 h-60 v60 h60" fill="lightblue"/>
				        <path d="M270,60 h-60 v60 h60" fill="lightblue"/>
				        <path d="M330,60 h-60 v60 h60" fill="lightblue"/>
				        <path d="M390,60 h-60 v60 h60" fill="lightblue"/>
				        <path d="M450,60 h-60 v60 h60" fill="lightblue"/>
				        <path d="M510,60 h-60 v60 h60" fill="lightblue"/>
				        <path d="M570,60 h-60 v60 h60" fill="lightblue"/>
				        <path d="M630,60 h-60 v60 h60" fill="lightblue"/>
				        <path d="M690,60 h-60 v60 h60" fill="lightblue"/>
				        <path d="M750,60 h-60 v60 h60" fill="lightblue"/>
				        <path d="M810,60 h-60 v60 h60" fill="lightblue"/>
				      </g>
			        <g>
				        <path d="M165,120 h-60 v60 h60" fill="lightblue"/>
				        <path d="M225,120 h-60 v60 h60" fill="lightblue"/>
				        <path d="M285,120 h-60 v60 h60" fill="lightblue"/>
				        <path d="M345,120 h-60 v60 h60" fill="lightblue"/>
				        <path d="M405,120 h-60 v60 h60" fill="lightblue"/>
				        <path d="M465,120 h-60 v60 h60" fill="lightblue"/>
				        <path d="M525,120 h-60 v60 h60" fill="lightblue"/>
				        <path d="M585,120 h-60 v60 h60" fill="lightblue"/>
				        <path d="M645,120 h-60 v60 h60" fill="lightblue"/>
				        <path d="M705,120 h-60 v60 h60" fill="lightblue"/>
				        <path d="M765,120 h-60 v60 h60" fill="lightblue"/>
				      </g>
			        <g>
				        <path d="M195,180 h-60 v60 h60" fill="lightblue"/>
				        <path d="M255,180 h-60 v60 h60" fill="lightblue"/>
				        <path d="M315,180 h-60 v60 h60" fill="lightblue"/>
				        <path d="M375,180 h-60 v60 h60" fill="lightblue"/>
				        <path d="M435,180 h-60 v60 h60" fill="lightblue"/>
				        <path d="M495,180 h-60 v60 h60" fill="lightblue"/>
				        <path d="M555,180 h-60 v60 h60" fill="lightblue"/>
				        <path d="M615,180 h-60 v60 h60" fill="lightblue"/>
				        <path d="M675,180 h-60 v60 h60" fill="lightblue"/>
				        <path d="M735,180 h-60 v60 h60" fill="lightblue"/>
				      </g>
			        <g fill="none" stroke="#000">
			            <path d="M60 0v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60M90 60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m-705 0v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m-630 0v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m60-60v60m-645 0v60m60-60v60m90-60v60m360-60v60m90-60v60m60-60v60m60-60v60M0 60h900M0 120h900M0 180h900M0 240h900M0 0h900v300H0z"/>
			        </g>
			        <g>
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
					        <tspan y="110" x="710"></tspan>
					      </text>
				        <text fontSize="16">
					        <tspan y="110" x="730"></tspan>
					      </text>
				        <text fontSize="16">
					        <tspan y="110" x="770"></tspan>
					      </text>
				        <text fontSize="16">
					        <tspan y="110" x="790"></tspan>
					      </text>
					    </g>
			    </g>
			</svg>
	</div>
)

export default KeyboardDisplay