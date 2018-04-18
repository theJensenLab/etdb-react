import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class FlagellaCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className="row" id="featured-2">
					<div className="col-sm-8">
						<h2>Flagella</h2>
					</div>
                    <div className="col-sm-4">
					<a className="back" href="http://localhost:9156/featured">Back to featured tomograms</a>
					</div>
				</div>
				<div className="row" id="featured-3">
					<div className="col-sm-6">
						<div id="reddiv"></div>
						<p> Bacteria swim by using a rotary motor in the cell envelope to spin a long helical fiber called the flagellum. Some bacteria contain a single flagellum, others multiple - located either near one another in a tuft or spread out over the cell body.  </p>
					</div>
					<div className="col-sm-6">
						<div id="spacediv"></div>
						<p> Some flagella are sheathed in outer membrane. Some diderm bacteria keep their flagella in the periplasm, wrapping around the cell body and enabling the cell to burrow, e.g. into tissue.  Archaea also use a similar motility structure, called an archaellum to differentiate it from the non-homologous flagellum.  </p>
					</div>
				</div>
				<div className="row" id="featured"></div>
				<Footer />
			</div>
		)
	}
}

export default FlagellaCollection;