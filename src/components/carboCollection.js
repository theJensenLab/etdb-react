import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class CarboCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div class="row" id="featured-2">
					<div class="col-sm-8">
						<h2>Carboxysomes</h2>
					</div>
				</div>
				<div class="row" id="featured-3">
					<div class="col-sm-6">
						<div id="reddiv"></div>
						<p>Carboxysomes are bacterial compartments consisting of polyhedral protein shells filled with the enzyme ribulose-1,5-bisphosphate carboxylase/oxygenase (RuBisCO) -the predominant enzyme in carbon fixation and the rate limiting enzyme in the Calvin Cycle-and a carbonic anhydrase.[2] Carboxysomes are thought to have evolved as a consequence of the increase in oxygen concentration in the ancient atmosphere; this is because oxygen is a competing substrate to carbon dioxide in the RuBisCO reaction.[3] </p>
					</div>
					<div class="col-sm-6">
						<div id="spacediv"></div>
						<p>To overcome the inefficiency of RuBisCO, carboxysomes concentrate carbon dioxide inside the shell by means of co-localized carbonic anhydrase activity, which produces carbon dioxide from the bicarbonate that diffuses into the carboxysome. The resulting production of carbon dioxide near RuBisCO decreases the proportion of ribulose-1,5-bisphosphate oxygenation and thereby avoids costly photorespiratory reactions. The surrounding shell provides a barrier to carbon dioxide loss, helping to increase its concentration around RuBisCO.[4][5] </p>
					</div>
				</div>
				<div class="row" id="featured"></div>
				<Footer />
			</div>
		)
	}
}

export default CarboCollection;