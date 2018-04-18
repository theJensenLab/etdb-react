import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class CarboCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className="row" id="featured-2">
					<div className="col-sm-8">
						<h2>Carboxysomes</h2>
					</div>
                    <div className="col-sm-4">
					<a className="back" href="http://localhost:9156/featured">Back to featured tomograms</a>
					</div>
				</div>
				<div className="row" id="featured-3">
					<div className="col-sm-6">
						<div id="reddiv"></div>
						<p> RuBisCO is the main enzyme involved in carbon fixation. To make the reaction it catalyzes more efficient, some bacteria enclose RuBisCO in microcompartments called carboxysomes. Carboxysomes are generally icosahedral, but vary in size and shape. </p>
					</div>
					<div className="col-sm-6">
						
					</div>
				</div>
				<div className="row" id="featured"></div>
				<Footer />
			</div>
		)
	}
}

export default CarboCollection;