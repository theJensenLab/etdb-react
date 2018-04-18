import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class OutermembraneCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div class="row" id="featured-2">
					<div class="col-sm-8">
						<h2>Outer Membrane Vesicles</h2>
					</div>
                    <div class="col-sm-4">
					<a class="back" href="http://localhost:9156/featured">Back to featured tomograms</a>
					</div>
				</div>
				<div class="row" id="featured-3">
					<div class="col-sm-6">
						<div id="reddiv"></div>
						<p>Many bacterial species secrete outer membrane vesicles (OMVs) into the environment, either for survival of the cell or community or to deliver toxins. OMVs can be released singly or as chains, with pearled or tubular morphologies. </p>
					</div>
					<div class="col-sm-6">
                    <div id="reddiv"></div>
						<p> Some species even OMV chains to extend the electron transport chain to an external electron acceptor, forming nanowires. </p>
					</div>
				</div>
				<div class="row" id="featured"></div>
				<Footer />
			</div>
		)
	}
}

export default OutermembraneCollection;