import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class dnaCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div class="row" id="featured-2">
					<div class="col-sm-8">
						<h2>DNA</h2>
					</div>
				</div>
				<div class="row" id="featured-3">
					<div class="col-sm-6">
						<div id="reddiv"></div>
						<p>The genome of bacterial and archaeal cells is highly organized to pack inside the cell. In certain conditions, it is visible by electron tomography. For instance, when cells are in a state of minimal transcription, like in this attack phase Bdellovibrio bacteriovorus [yc2013-05-01-10], the nucleoid is highly condensed. In this dividing Hyphomonas neptunium cell, you can see supercoiled DNA being segregated through the narrow stalk into the budding daughter  </p>
					</div>
					<div class="col-sm-6">
						
					</div>
				</div>
				<div class="row" id="featured"></div>
				<Footer />
			</div>
		)
	}
}

export default dnaCollection;