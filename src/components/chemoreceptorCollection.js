import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class ChemoreceptorCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div class="row" id="featured-2">
					<div class="col-sm-8">
						<h2>Chemoreceptor</h2>
					</div>
				</div>
				<div class="row" id="featured-3">
					<div class="col-sm-6">
						<div id="reddiv"></div>
						<p>Bacteria and archaea direct their motility by chemotaxis, sensing gradients of attractive or repellant molecules and biasing the direction of their movement accordingly.  Chemotaxis is mediated by a large hexagonally-packed array of chemoreceptors, which sense the signal and transmit the information to soluble effector molecules inside the cell.  </p>
					</div>
					<div class="col-sm-6">
                    <div id="reddiv"></div>
                    <p> The architecture of these chemoreceptor arrays is conserved across bacteria and archaea.  Chemoreceptor arrays are usually associated with the membrane, but some cells contain cytoplasmic arrays, too, consisting of two layers of chemoreceptors.</p>
					</div>
				</div>
				<div class="row" id="featured"></div>
				<Footer />
			</div>
		)
	}
}

export default ChemoreceptorCollection;