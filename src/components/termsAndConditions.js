import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'




class termsAndConditions extends Component {
	render(){
		return(
			<div className="contactrow">
				<Header />
				<div id="featured-2" className="row">
				  <div className="col-sm-8">
				    <h2>Contact</h2>
				  </div>
                  <div className="col-sm-4">
				  </div>
				</div>
				<div className="row contact" id="featured-3">
				
				  <div className="col-sm-3">
				    <h3 className="contact">Grant Jensen</h3>
                    <div id="reddiv"></div>
				    <p>Principal Investigator</p>
				    <p><b>p:</b> (626) 395-8827 </p>
				    <p><b>e: </b>jensen(at)caltech.edu</p>
				  </div>
				  <div className="col-sm-3">
						<h3 className="contact">Catherine Oikonomou</h3>
                        <div id="reddiv"></div>
						<p><b>p:</b> (626) 395-3056 </p>
						<p><b>e:</b> coiko(at)caltech.edu</p>
					</div>
					<div className="col-sm-3">
						<h3 className="contact">Davi Ortega</h3>
                        <div id="reddiv"></div>
						<p><b>p:</b> (626) 395-8829 </p>
						<p><b>e:</b> ortegad(at)caltech.edu</p>
				  </div>

                    <div className="col-sm-3">
				    <h3 className="contact">California Institute of Technology</h3>
                    <div id="reddiv"></div>
				    <p>1200 E California Blvd</p>
				    <p>Pasadena, CA 91125</p>
				    <p>Department of Biology</p>
				    <p>Broad Center for the Biological Sciences</p>
				  </div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default termsAndConditions;