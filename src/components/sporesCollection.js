import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class SporesCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div class="row" id="featured-2">
					<div class="col-sm-8">
						<h2>Spores</h2>
					</div>
                    <div class="col-sm-4">
					<a class="back" href="http://localhost:9156/featured">Back to featured tomograms</a>
					</div>
				</div>
				<div class="row" id="featured-3">
					<div class="col-sm-6">
						<div id="reddiv"></div>
						<p> To survive a period of harsh conditions, some bacteria produce spores. These metabolically inert forms are resistant to desiccation and mechanical stress.  Spores are produced by a variant of cell division.  Some species produce endospores, engulfing the forespore and maturing it in the cytoplasm of the mother cell before releasing it by lysis.  </p>
					</div>
					<div class="col-sm-6">
                    <div id="reddiv"></div>

						<p> Other species produce exospores that are released to the environment directly.  Once a spore encounters favorable conditions, it transitions back to a metabolically active (and environmentally vulnerable) cell. </p>
					</div>
				</div>
				<div class="row" id="featured"></div>
				<Footer />
			</div>
		)
	}
}

export default SporesCollection;