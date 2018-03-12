import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

class Featured extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className="row" id="featured-2">
				  <div className="col-sm-8">
				    <h2>With over x tomograms in the database we wanted to highlights some which exhibit particular features. </h2>
				  </div>
				</div>
				<div className="row" id="featured-3">
				  <div className="col-sm-4">
				    <div id="reddiv"></div>
				    <p>With over x tomograms in the database we wanted to highlights some which exhibit particular features.</p>
				  </div>
				  <div className="col-sm-4">
				    <div id="reddiv"></div>
				    <p>These collections do not represent every single tomogram which exhibits a paritcular feature, but gives a sample of some that do.</p>
				  </div>
				  <div className="col-sm-4">
				    <div id="reddiv"></div>
				    <p>Cryo-electron tomography is an imaging technique used to produce high-resolution, 3D views of biological samples, think of it as a CT scan for cells.</p>
				  </div>
				</div>
				<div className="row" id="featured">
				  <div className="col-sm-3"><a href="/carboxysomes/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				      <name>Carboxysomes</name></a></div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Chemoreceptors</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Filaments</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Flagella</name>
				  </div>
				</div>
				<div className="row" id="featured">
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Granules</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Internal membranes</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Pili</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Surface layer</name>
				  </div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Featured;