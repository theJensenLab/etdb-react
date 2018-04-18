import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class IntraCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div class="row" id="featured-2">
					<div class="col-sm-8">
						<h2>Intracytoplasmic Membranes</h2>
					</div>
                    <div class="col-sm-4">
					<a class="back" href="http://localhost:9156/featured">Back to featured tomograms</a>
					</div>
				</div>
				<div class="row" id="featured-3">
					<div class="col-sm-6">
						<div id="reddiv"></div>
						<p>Photosynthetic bacteria expand their light-harvesting capacity by expanding their photocomplex-containing membrane. Some create extensive stacks of intracytoplasmic membranes.  </p>
					</div>
					<div class="col-sm-6">
						
					</div>
				</div>
				<div class="row" id="featured"></div>
				<Footer />
			</div>
		)
	}
}

export default IntraCollection;