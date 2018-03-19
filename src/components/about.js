import React, { Component } from 'react'

import Header from './header.js'
import FAQ from './faq.js'
import Footer from './footer.js'

class About extends Component {
	render(){
		return(
			<div>
				<Header />
                <div id="space150"></div>
			
				<div className="row" id="about">
                <h3>About Electron tomography</h3>
				      <div id="reddiv"></div>
				  <div className="col-sm-6">				      
                        <p>Electron tomography is a form of transmission electron microscopy in which a sample is tilted during imaging, typically one or two degrees between images, building up a "tilt-series" of images that can be computationally reconstructed into a 3D view of the sample, or "tomogram." In essence, electron tomography takes a CT scan of a cell.</p>				    </div>

				  <div className="col-sm-6"> 
               
                  <p>Currently, the majority of tomograms in the ETDB were acquired by cryo-EM, in which cells in standard growth media are plunged into a cryogen that freezes them so rapidly that the water molecules don't have a chance to rearrange into a crystalline lattice, preserving cell structures in vitreous, or glass-like, amorphous ice.  Vitrified cells can be imaged directly by electron tomography, without the need for fixation, dehydration, resin-embedding or staining.  This captures the cells in an essentially native state.</p>
                  </div>
				</div>
				<div className="row" id="about">
				  <div className="col-sm-6">
				    <div>
				      <h3>By making this data available, we hope others will use it to fuel their own discoveries.  </h3>
				      <div id="reddiv"></div>
				      <p>In addition to its value for cell biologists, the ETDB offers a massive dataset for software developers to develop, test and improve image processing algorithms. We have some ideas for areas particularly ripe for improvement; check them out on the Scientific Challenges page.</p>
                      <a className="browse" href="/challenges">View challenges <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
				    </div>
				  </div>
                  <div className="col-sm-6">			  		<img src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/03/challenges.png"/>
</div>

				</div>
				<div className="row" id="about">
				  <div className="col-sm-6">			  		<img src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/03/BLOCKCHAIN-2.png"/>
</div>
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
				      <p>If you are interested in learning more about tomograms, this database and other research conducted by the Jensen Lab please <a href="/contact">get in touch</a></p>
                      <p>Many of these datasets have been used in studies resulting in scientific publications. You can view a list of these publications on the <a target="blank" href="https://jensenlab.caltech.edu/publications/">Jensen Lab</a> website.
</p>
                      <a className="browse" href="http://www.jensenlab.caltech.edu">Jensen Lab <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
				    </div>
				  </div>

                  <div className="col-sm-6">			  		<img src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/03/cell.png"/>
</div>
				</div>
                
				<FAQ />
				<Footer />
			</div>
		)
	}
}

export default About;