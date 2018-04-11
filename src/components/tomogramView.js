import React, { Component } from 'react'
import moment from 'moment';

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class TomogramView extends Component {
	constructor(props){
		super(props);

		this.state = {
			artifact: undefined
		}

		this.getTomogram = this.getTomogram.bind(this);
		this.storeTomogram = this.storeTomogram.bind(this);
	}
	componentDidMount(){
		this.getTomogram();
	}
	getTomogram(){
		this.props.Core.Index.getArtifactFromID(this.props.match.params.id, this.storeTomogram, (error) => {
			console.error(error)
		})
	}
	storeTomogram(artifact){
		this.setState({artifact: artifact});
	}
	render(){
		let title = "loading...", timestamp, description, strain, speciesName, date, NBCItaxID, artNotes, tiltSingleDual, files, thumbnail, thumbFilename, location, defocus, niceDate, software = "No info available"

		let collabRoles = "No info available"

		if (this.state.artifact){
			title = this.state.artifact.getTitle();
			timestamp = this.state.artifact.getTimestamp();
			description = this.state.artifact.getDescription();

			files = this.state.artifact.getFiles();
			location = this.state.artifact.getLocation();

			if (files) {
				for (var file of files){
					if (file.getType() === "Research" && file.getSubtype() === "Keyimg"){
						thumbFilename = file.getFilename();
					}
					if (file.getSoftware() && file.getSoftware() !== ""){
						software = file.getSoftware();
					}
				}
			}

			if (!thumbFilename){
				thumbnail = this.state.artifact.getThumbnail()
				if (thumbnail){
					thumbFilename = thumbnail.getFilename();
				}
			}

			date = this.state.artifact.getDetail("date");
			niceDate = moment(date * 1000).calendar(null, {sameElse: "MMMM Do YYYY"});
			NBCItaxID = this.state.artifact.getDetail("NBCItaxID");
			artNotes = this.state.artifact.getDetail("artNotes");
			strain = this.state.artifact.getDetail("strain");
			speciesName = this.state.artifact.getDetail("speciesName");
			tiltSingleDual = this.state.artifact.getDetail("tiltSingleDual");
			defocus = this.state.artifact.getDetail("defocus");
		}
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
						<div id="videoinner"><img src={"http://etdb.caltech.edu:8080/ipfs/" + location + "/" + thumbFilename}/>
							<div id="share">
								<p><b>Share:</b><span className="fab fa-facebook-square"></span><span className="fab fa-twitter-square"></span></p>
							</div>
						</div>
					</div>
					<div className="col-sm-6" id="tomographdata">
						<h2>{title}</h2>
						<h3><b>Lab:</b> Jensen Lab</h3>
						<h3><b>Insitution:</b> Caltech</h3>
						<div id="reddiv"> </div>
						<p><b>Tilt Series date:</b> {niceDate}</p>
						{/*<p><b>Data Taken By:</b> Yiwei Chang</p>*/}
						<p><b>Description:</b> {description}</p>
						<p><b>Strain:</b> {strain}</p>
						<p><b>Species / Specimen:</b> {speciesName}</p>
						<p><b>Collaborators and Roles:</b> {collabRoles}</p>
						<p><b>Tilt Series Setting:</b> {tiltSingleDual}. constant angular increment, step: 1.0. tilt range: (-60, 60). dosage: 130/A2. defocus: {defocus}. magnification: 27500.</p>
						<p><b>Microscope:</b> Caltech Polara</p>
						<p><b>Acquisition Software:</b> {software}</p>
						<p><b>Processing Software Used:</b> Raptor</p>
						<p style={{whiteSpace: "pre-wrap"}}><b>Notes:</b> {artNotes}</p>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default TomogramView;