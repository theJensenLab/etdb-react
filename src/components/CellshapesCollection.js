import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class CellshapesCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div class="row" id="featured-2">
					<div class="col-sm-8">
						<h2>Cell Shapes</h2>
					</div>
				</div>
				<div class="row" id="featured-3">
					<div class="col-sm-6">
						<div id="reddiv"></div>
						<p> Bacteria and archaea have evolved very different shapes to thrive in different environmental niches. Some cells are coccoid (round), some rod-shaped, others vibrioid (banana-shaped), or even square.  Some spiral like corkscrews, and some resemble stars.  Still others are pleomorphic (varied in shape).  Here's a sample of that diversity: </p>
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

export default CellshapesCollection;