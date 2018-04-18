import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class PiliCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div class="row" id="featured-2">
					<div class="col-sm-8">
						<h2>Pili</h2>
					</div>
                    <div class="col-sm-4">
					<a class="back" href="http://localhost:9156/featured">Back to featured tomograms</a>
					</div>
				</div>
				<div class="row" id="featured-3">
					<div class="col-sm-6">
						<div id="reddiv"></div>
						<p> Bacteria use extracellular appendages for a variety of purposes, including attachment and motility. The best studied are type IV pili, which some species use like grappling hooks to move across a surface. </p>
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

export default PiliCollection;