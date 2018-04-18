import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class PhageCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className="row" id="featured-2">
					<div className="col-sm-8">
						<h2>Phage</h2>
					</div>
                    <div className="col-sm-4">
					<a className="back" href="http://localhost:9156/featured">Back to featured tomograms</a>
					</div>
				</div>
				<div className="row" id="featured-3">
					<div className="col-sm-6">
						<div id="reddiv"></div>
						<p> Bacteria and archaea are constantly under attack from viruses, called phage.  Phage exhibit a variety of forms, from tailed icosahedra to filaments to spindles.  The capsid of the phage is packed with the viral DNA, which is subsequently injected into the host.  </p>
					</div>
					<div className="col-sm-6">
                    <div id="reddiv"></div>
						<p>  Following replication, they lyse the host cell to release the new viral particles. Some archaeal viruses do this with seven-sided pyramidal structures that assemble in the host membrane and open to lyse the cell.    </p>
					</div>
				</div>
				<div className="row" id="featured"></div>
				<Footer />
			</div>
		)
	}
}

export default PhageCollection;