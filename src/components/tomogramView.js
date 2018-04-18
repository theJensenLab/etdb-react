import React, { Component, StrictMode } from 'react'
import moment from 'moment';
import filesize from 'filesize';

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

	//this.props.match.params.id???
	getTomogram(){
		console.log("tomogramView props: ", this.props)
		this.props.Core.Index.getArtifactFromID(this.props.match.params.id, this.storeTomogram, (error) => {
			console.error(error)
		})
	}

	//why call setState, why not pass down through props?
	storeTomogram(artifact){
		this.setState({artifact: artifact});
	}
	render(){
		let title = "loading...", timestamp, description, strain, speciesName, date, NBCItaxID, artNotes, tiltSingleDual, files = [], thumbnail, thumbFilename, location, defocus, niceDate, software = "No info available", institution, lab, microscopist, scopeName, magnification, tiltSeriesSettingsString

		//props instead of state
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
			console.log("tomogramView date: ")
			niceDate = moment(date * 1000).calendar(null, {sameElse: "MMMM Do YYYY"});
			console.log("tomogramView niceDate: ")
			NBCItaxID = this.state.artifact.getDetail("NBCItaxID");
			artNotes = this.state.artifact.getDetail("artNotes");
			strain = this.state.artifact.getDetail("strain");
			speciesName = this.state.artifact.getDetail("speciesName");
			lab = this.state.artifact.getDetail("lab");
			institution = this.state.artifact.getDetail("institution");
			microscopist = this.state.artifact.getDetail("microscopist");
			scopeName = this.state.artifact.getDetail("scopeName") || "Caltech Polara";

			let tiltSeriesSettings = []
			let degree = String.fromCharCode(176)
			let sq = String.fromCharCode(178)
			let angs = String.fromCharCode(8491)
			let mu = String.fromCharCode(956)

			if (this.state.artifact.getDetail("tiltSingleDual"))
				tiltSeriesSettings.push(this.state.artifact.getDetail("tiltSingleDual") === 1 ?  "single axis" : "dual axis");
			if (this.state.artifact.getDetail("tiltMin") || this.state.artifact.getDetail("tiltMax"))
				tiltSeriesSettings.push(`tilt range: (${this.state.artifact.getDetail("tiltMin")}${degree}, ${this.state.artifact.getDetail("tiltMax")}${degree})`);
			if (this.state.artifact.getDetail("tiltStep"))
				tiltSeriesSettings.push(`step: ${this.state.artifact.getDetail("tiltStep")}${degree}`);
			if (this.state.artifact.getDetail("tiltConstant"))
				tiltSeriesSettings.push(this.state.artifact.getDetail("tiltConstant") === 1 ? "constant angular increment" : "");
			if (this.state.artifact.getDetail("dosage"))
				tiltSeriesSettings.push(`dosage: ${this.state.artifact.getDetail("dosage")}eV/${angs}${sq}`);			
			if (this.state.artifact.getDetail("defocus"))
				tiltSeriesSettings.push(`defocus: ${this.state.artifact.getDetail("defocus")}${mu}m`);
			if (this.state.artifact.getDetail("magnification"))
				tiltSeriesSettings.push(`magnification: ${this.state.artifact.getDetail("magnification")}x`);
			
			tiltSeriesSettingsString = tiltSeriesSettings.join(", ");
		}
		return(
			<div>
				<Header />
				<div className="row" id="singletomogram">
					<div className="col-sm-6">
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
						<div id="reddiv"> </div>
						<p><b>Tilt Series date:</b> {niceDate}</p>
						<p><b>Data Taken By:</b> {microscopist}</p>
						<p><b>Species / Specimen:</b> {speciesName}</p>
						<p><b>Strain:</b> {strain}</p>
						<p><b>Tilt Series Setting:</b> {tiltSeriesSettingsString}.</p>
						<p><b>Microscope:</b> {scopeName}</p>
						<p><b>Acquisition Software:</b> {software}</p>
						<p><b>Processing Software Used:</b> Raptor</p>
						<p style={{whiteSpace: "pre-wrap"}}><b>Notes:</b> {artNotes}</p>
					</div>
					<div className="col-sm-12" style={{marginTop: "10px"}}>
						<center>
							<h5>Files</h5>
						</center>
						<table className="table table-bordered">
							<thead>
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Size</th>
									<th>Type</th>
									<th>Subtype</th>
									<th>Download</th>
								</tr>
							</thead>
							<tbody>
								{files.map((file, i) => {
									let fileSize = "Unknown"
									if (file.getFilesize())
										fileSize = filesize(file.getFilesize(), {base: 10})
									return <tr>
										<th scope="row">{i + 1}</th>
										<td>{file.getDisplayName()}</td>
										<td>{fileSize}</td>
										<td>{file.getType()}</td>
										<td>{file.getSubtype()}</td>
										<td>
											<a href={"http://etdb.caltech.edu:8080/ipfs/" + location + "/" + file.getFilename()} className="btn btn-primary" target="_blank" download>Download</a>
										</td>
									</tr>
								})}
							</tbody>
						</table>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default TomogramView;
