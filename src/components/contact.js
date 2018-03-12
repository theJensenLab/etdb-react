import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

class Contact extends Component {
	render(){
		return(
			<div>
				<Header />
				<red-2 className="row">
				  <div className="col-sm-8">
				    <h2>The Electronic Tomography Database is a multi faceted endeavor. Please contact the appropriate person.</h2>
				  </div>
				</red-2>
				<div className="row" id="featured-3">
				  <div className="col-sm-4">
				    <div id="reddiv"></div>
				    <h3 className="contact">California Institute of Technology</h3>
				    <p>1200 E California Blvd</p>
				    <p>Pasadena, CA 91125</p>
				    <p>Department of Biology</p>
				    <p>Broad Center for the Biological Sciences</p>
				  </div>
				  <div className="col-sm-4">
				    <div id="reddiv"></div>
				    <h3 className="contact">Grant Jensen</h3>
				    <p>Principal Investigator</p>
				    <p>phone: (626) 395-8827 </p>
				    <p>jensen(at)caltech.edu</p>
				  </div>
				  <div className="col-sm-4">
				    <div id="reddiv"></div>
				    <p>Cryo-elec</p>
				  </div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Contact;