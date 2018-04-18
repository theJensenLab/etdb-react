import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class StorageCollection extends Component {
	render(){
		return(
			<div>
				<Header />
				<div class="row" id="featured-2">
					<div class="col-sm-8">
						<h2>Storage Granules</h2>
					</div>
                    <div class="col-sm-4">
					<a class="back" href="http://localhost:9156/featured">Back to featured tomograms</a>
					</div>
				</div>
				<div class="row" id="featured-3">
					<div class="col-sm-6">
						<div id="reddiv"></div>
						<p> Cells use storage granules to stockpile a variety of components, including phosphate, nitrogen, or hydroxybutyrate. The contents of storage granules are enclosed by a proteinaceous shell that grows and shrinks dynamically to accommodate the contents. </p>
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

export default StorageCollection;