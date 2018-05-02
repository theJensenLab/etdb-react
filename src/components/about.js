import React, { Component } from 'react'

import Header from './header.js'
import FAQ from './faq.js'
import Footer from './footer.js'

class About extends Component {
	render(){
		return(
			<div>
				<Header />
			<div className="row" id="featured-2">
				  <div className="col-sm-8">
				    <h2>Welcome to the Caltech ETDB, the blockchain-based Web 3.0 database of 10,000+ electron tomograms. </h2>
				  </div>
				</div>
                <div id="space50"></div>
				<div className="row aboutintro" id="about">
          <div className="col-sm-12">	
						<h3>About Electron tomography</h3>
				    <div id="reddiv"></div>
          </div>
				  <div className="col-sm-6">				      
            <p>Electron tomography is a form of transmission electron microscopy in which a sample is tilted during imaging, typically one or two degrees between images, building up a "tilt-series" of images that can be computationally reconstructed into a 3D view of the sample, or "tomogram." In essence, electron tomography takes a CT scan of a cell.</p>
					</div>
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
            <div className="col-sm-6">
							<img src="/src/assets/img/challenges.png"/>
						</div>

				</div>
				<div className="row aboutintro" id="about">
                
				  <div className="col-sm-6">
              <h3>Built with Blockchain</h3>			  		 
				      <div id="reddiv"></div>
				      <p> A blockchain uses peer-to-peer networking to achieve network consensus without central points of failure, making it a public digital ledger which anyone can contribute to or audit, and no one can alter. The <a target="blank" href="https://ipfs.io/">Inter Planetary File System (IPFS)</a> is a file transport protocol and network designed to create a content-addressable, peer-to-peer method of storing and sharing content in a distributed file system.</p>
					</div>
				  <div className="col-sm-6">
				    <div>      
							<p>The <a target="blank" href="https://oip.wiki/Main_Page">Open Index Protocol (OIP)</a> specification defines standard use of these technologies; it uses the <a target="blank" href="https://flo.cash">FLO blockchain</a> to index metadata and IPFS to store files. The OIP system includes a transparent index, persistent file storage and permissionless access. The result is a robust, decentralized database open to anyone through open-source software.</p>

							<p>ETDB is an experiment in distributing large scientific datasets using the OIP specification. The addresses of the tomograms, and their corresponding metadata, are stored in the public FLO blockchain and the tomogram files are stored in the IPFS network. While etdb.caltech.edu offers one way to access the database, users are free to create their own applications to retrieve and interact with the data.</p>
				    </div>
				  </div>
				</div>
				<div className="row" id="about">
				  <div className="col-sm-6">
                  <img src="/src/assets/img/labshot.png"/>
				  </div>

                  <div className="col-sm-6"> <div>
				      <h3>Learning more</h3>
				      <div id="reddiv"></div>
				      <p>If you are interested in learning more about tomograms, this database and other research conducted by the Jensen Lab please <a href="/contact">get in touch</a></p>
                      <p>Many of these datasets have been used in studies resulting in scientific publications. You can view a list of these publications on the <a target="blank" href="/src/assets/img/learn-more.png">Jensen Lab</a> website.
</p>
                      <a className="browse" href="http://www.jensenlab.caltech.edu">Jensen Lab <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
				    </div>			  		
</div>
				</div>
				<a name="FAQ"></a> 
                <FAQ Core={this.props.Core} />
				<Footer />
			</div>
		)
	}
}

export default About;