import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class TomogramView extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className="row" id="singletomogram">
					<div className="col-sm-6">
						<a className="return" href="/database">
							<span className="fas fa-arrow-left"> </span>
							<p>Return to database</p>
						</a>
					</div>
					<div className="col-sm-6" id="downloadoptions">
						<li className="dropdown btn btn-default"><span className="glyphicon glyphicon-th-list"> Download Options <span className="fas fa-arrow-down"></span></span>
							<ul className="dropdown-menu dropdown-toggle" data-toggle="dropdown">
								<li><a href="#">Raw data</a></li>
								<li> <a href="#">3D Reconstruction</a></li>
							</ul>
						</li>
					</div>
				</div>
				<div className="row" id="singletomograminfo">
					<div className="col-sm-6" id="videoembed">
						<div id="videoinner"><img src={placeholder}/>
							<div id="share">
								<p><b>Share:</b><span className="fab fa-facebook-square"></span><span className="fab fa-twitter-square"></span></p>
							</div>
						</div>
					</div>
					<div className="col-sm-6" id="tomographdata">
						<h2>E.coli Minicell/Pul T2SS </h2>
						<h3><b>Lab:</b> Jensen Lab</h3>
						<h3><b>Insitution:</b> Caltech</h3>
						<div id="reddiv"> </div>
						<p><b>Tilt Series date:</b> 04/17/2017</p>
						<p><b>Data Taken By:</b> Yiwei Chang</p>
						<p><b>Description:</b> grid box YWC250</p>
						<p><b>Strain:</b> PAP5359 (minCDE knockout) (Pipeline: autoprocref_1492486778)</p>
						<p><b>Species / Specimen:</b> Escherichia coli 562</p>
						<p><b>Collaborators and Roles:</b> Strain provided by Ingrid Guilvout in Olivera Francetic lab</p>
						<p><b>Tilt Series Setting:</b> single tilt. constant angular increment, step: 1.0. tilt range: (-60, 60). dosage: 130/A2. defocus: -6um. magnification: 27500.</p>
						<p><b>Microscope:</b> Caltech Polara</p>
						<p><b>Acquisition Software:</b> UCSFTomo</p>
						<p><b>Processing Software Used:</b> Raptor</p>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default TomogramView;