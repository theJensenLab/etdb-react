import React, { Component } from 'react'

import Header from './header.js'
import FAQ from './faq.js'
import Footer from './footer.js'

class About extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className="row" id="about">
				  <div>
				    <h2>The Caltech Tomography Database is a public repository of cryo-electron tomography datasets (tilt-series and reconstructions) of cells.</h2>
				    <h2>These datasets were acquired by the <a target="blank" href="jensenlab.caltech.edu">Jensen Lab</a> at Caltech over the past 15 years. Currently, [nearly 90] species of bacteria and archaea are represented, and this number will keep climbing.</h2>
				  </div>
				</div>
				<div className="row" id="about">
				  <div className="col-sm-6"></div>
				  <div className="col-sm-6">
				    <div>
				      <h3>Cryo-electron tomography</h3>
				      <div id="reddiv"></div>
				      <p> Cryo-electron tomography is an imaging technique used to produce high-resolution, 3D views of biological samples, think of it as a CT scan for cells. In contrast to other electron tomography techniques, samples are immobilized in non-crystalline ("vitreous") ice and imaged under cryogenic conditions, allowing them to be imaged without dehydration or chemical fixation, which could otherwise disrupt or distort biological structures. </p>
				    </div>
				  </div>
				</div>
				<div className="row" id="about">
				  <div className="col-sm-6">
				    <div>
				      <h3>Scientific Challenges</h3>
				      <div id="reddiv"></div>
				      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><a className="browse" href="http://www.designing-science-development.com/jensen/search-results/">View challenges <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
				    </div>
				  </div>
				</div>
				<div className="row" id="about">
				  <div className="col-sm-6"></div>
				  <div className="col-sm-6">
				    <div>
				      <h3>Built with Blockchain</h3>
				      <div id="reddiv"></div>
				      <p> Cryo-electron tomography is an imaging technique used to produce high-resolution, 3D views of biological samples, think of it as a CT scan for cells. In contrast to other electron tomography techniques, samples are immobilized in non-crystalline ("vitreous") ice and imaged under cryogenic conditions, allowing them to be imaged without dehydration or chemical fixation, which could otherwise disrupt or distort biological structures. </p>
				    </div>
				  </div>
				</div>
				<div className="row" id="about">
				  <div className="col-sm-6">
				    <div>
				      <h3>Learning more</h3>
				      <div id="reddiv"></div>
				      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><a className="browse" href="http://www.jensenlab.caltech.edu">Jensen Lab <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
				    </div>
				  </div>
				</div>
				<FAQ />
				<Footer />
			</div>
		)
	}
}

export default About;