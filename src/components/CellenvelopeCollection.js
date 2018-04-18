import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class CellenvelopeCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div class="row" id="featured-2">
					<div class="col-sm-8">
						<h2>Cell Envelope</h2>
					</div>
                    <div class="col-sm-4">
					<a class="back" href="http://localhost:9156/featured">Back to featured tomograms</a>
					</div>
				</div>
				<div class="row" id="featured-3">
					<div class="col-sm-6">
						<div id="reddiv"></div>
						<p>All cells are separated from their environment by at least one selectively permeable membrane.  To buttress this membrane against turgor pressure, most bacteria use a cell wall made of carbohydrate – long glycan strands crosslinked by short peptides to form a rigid peptidoglycan sacculus.  </p>
					</div>
					<div class="col-sm-6">
						<div id="spacediv"></div>
						<p>Monoderms have one membrane and a thick multi-layered sacculus.  Diderms have two membranes, an inner and an outer, with a thin sacculus sandwiched in between.  Here are some examples of these different architectures:  </p>
					</div>
				</div>
				<div class="row" id="featured"></div>
				<Footer />
			</div>
		)
	}
}

export default CellenvelopeCollection;