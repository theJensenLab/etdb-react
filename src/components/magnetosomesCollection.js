import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class MagnetosomesCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className="row" id="featured-2">
					<div className="col-sm-8">
						<h2>Magnetosomes</h2>
					</div>
                    <div className="col-sm-4">
					<a className="back" href="http://localhost:9156/featured">Back to featured tomograms</a>
					</div>
				</div>
				<div className="row" id="featured-3">
					<div className="col-sm-6">
						<div id="reddiv"></div>
						<p> Magnetosomes orient magnetotactic bacteria in a magnetic field. These membrane pockets contain ferrous microcrystals and are aligned by cytoskeletal filaments of MamK, creating a compass needle along the cell's length.  </p>
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

export default MagnetosomesCollection;