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
				  <div className="col-sm-3"><a href="/cellenvelope/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				      <name>Cell envelopes</name></a></div>
				  <div className="col-sm-3"><a href="/surfacelayer/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Surface layers</name></a>
				  </div>
				  <div className="col-sm-3"><a href="/cellshapes/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Cell shapes</name></a>
				  </div>
				  <div className="col-sm-3"><a href="/cytoskeletal/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Cytoskeletal elements</name></a>
				  </div>
				</div>
				<div className="row" id="featured">
				  <div className="col-sm-3"><a href="/storage/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Storage granules</name></a>
				  </div>
				  <div className="col-sm-3"><a href="/gasvesicles/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Gas vesicles</name></a>
				  </div>
				  <div className="col-sm-3"> <a href="/flagella/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Flagella</name></a>
				  </div>
				  <div className="col-sm-3"><a href="/terminalorganelles/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Terminal organelles</name></a>
				  </div>
				</div>
                <div className="row" id="featured">
				  <div className="col-sm-3"><a href="/dna/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>DNA</name></a>
				  </div>
				  <div className="col-sm-3"><a href="/outermembrane/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Outer membrane vesicles</name></a>
				  </div>
				  <div className="col-sm-3"><a href="/intra/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Intracytoplasmic membranes</name></a>
				  </div>
				  <div className="col-sm-3"><a href="/carboxysomes/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Carboxysomes</name></a>
				  </div>
				</div>
                	
                <div className="row" id="featured">
				  <div className="col-sm-3"><a href="/pili/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Pili</name></a>
				  </div>
				  <div className="col-sm-3"><a href="chemoreceptor/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Chemoreceptor arrays</name></a>
				  </div>
				  <div className="col-sm-3"><a href="magnetosomes/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Magnetosomes</name></a>
				  </div>
				  <div className="col-sm-3"><a href="spores/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Spores</name></a>
				  </div>
				</div>
                <div className="row" id="featured">
				  <div className="col-sm-3"><a href="contractile/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Contractile injection machines</name></a>
				  </div>
				  <div className="col-sm-3"><a href="phage/txid"><img className="results-thumb" src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/keyimg_zl2008-01-11-13.jpg"/>
				    <name>Phage</name></a>
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