import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class ContractileCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className="row" id="featured-2">
					<div className="col-sm-8">
						<h2> Contractile Injection Machines</h2>
					</div>
                    <div className="col-sm-4">
					<a className="back" href="http://localhost:9156/featured">Back to featured tomograms</a>
					</div>
				</div>
				<div className="row" id="featured-3">
					<div className="col-sm-6">
						<div id="reddiv"></div>
						<p>Some bacteria use contractile injection machinery similar to the DNA-delivery machinery of phage tails to shoot toxin-tipped spears into neighboring cells.  Type VI secretion systems assemble in the cytoplasm of the cell, attached to the membrane. To fire, the outer sheath contracts into a shorter, wider conformation, powering the ejection of the inner rod into the target cell.    </p>
					</div>
					<div className="col-sm-6">
                    <div id="reddiv"></div>
						<p>Huge arrays of a related structure in a marine bacterium are released by lysis.  These arrays provide a signal for a tubeworm to settle onto a surface and differentiate, so they're known as morphogenesis-associated contractile structures (MACs).</p>
					</div>
				</div>
				<div className="row" id="featured"></div>
				<Footer />
			</div>
		)
	}
}

export default ContractileCollection;