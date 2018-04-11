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
				    <h2>What's in a tomogram? </h2>
				  </div>
				</div>
				<div className="row" id="featured-3">
                <div className="col-sm-4">
				    <div id="reddiv"></div>
				    <p>Many cell structures are visible by electron tomography.</p>
				  </div>
				  <div className="col-sm-4">
				    <div id="reddiv"></div>
				    <p>Here are a few highlights from bacterial and archaeal cells.</p>
				  </div>
				  <div className="col-sm-4">
				    <div id="reddiv"></div>
				    <p>Choose a category below to learn more and see examples.</p>
				  </div>
				  
				</div>
				<div className="row" id="featured">
				  <div className="col-sm-3"><a href="/carboxysomes/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				      <name>Cell envelopes</name></a></div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Surface layers</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Cell shapes</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Cytoskeletal elements</name>
				  </div>
				</div>
				<div className="row" id="featured">
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Storage granules</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Gas vesicles</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Flagella</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Terminal organelles</name>
				  </div>
				</div>
                <div className="row" id="featured">
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>DNA</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Outer membrane vesicles</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Intracytoplasmic membranes</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Carboxysomes</name>
				  </div>
				</div>
                	
                <div className="row" id="featured">
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Pili</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Chemoreceptor arrays</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Magnetosomes</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Spores</name>
				  </div>
				</div>
                <div className="row" id="featured">
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Contractile injection machines</name>
				  </div>
				  <div className="col-sm-3"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Phage</name>
				  </div>
				  <div className="col-sm-3">
				  </div>
				  <div className="col-sm-3">
				  </div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Featured;