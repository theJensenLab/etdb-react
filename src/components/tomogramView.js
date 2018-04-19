import React, { Component, StrictMode } from 'react'
import { Carousel } from 'react-bootstrap'
import moment from 'moment';
import filesize from 'filesize';
import Lightbox from 'react-image-lightbox';
import { Button, Panel, PanelGroup } from 'react-bootstrap'

import {
	FacebookShareButton,
	GooglePlusShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	PinterestShareButton,
	RedditShareButton,
	EmailShareButton,
	FacebookIcon,
	TwitterIcon,
	GooglePlusIcon,
	LinkedinIcon,
	PinterestIcon,
	RedditIcon,
	EmailIcon,
  } from 'react-share';

import Header from './header.js'
import Footer from './footer.js'

import placeholder from '../assets/img/placeholder.jpg'

class TomogramView extends Component {
	constructor(props){
		super(props);

		this.state = {
			artifact: undefined,
			isLightboxOpen: false,
			photoIndex: 0
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
		let title = "loading...", timestamp, description, strain, speciesName, date, NBCItaxID, artNotes, tiltSingleDual, files = [], thumbnail, thumbFilename, video, videoFilename, location, defocus, niceDate, software = "No info available", institution, lab, microscopist, scopeName, magnification, tiltSeriesSettingsString, txid, snapshots = []

		//props instead of state
		if (this.state.artifact){
			title = this.state.artifact.getTitle();
			timestamp = this.state.artifact.getTimestamp();
			description = this.state.artifact.getDescription();

			files = this.state.artifact.getFiles();
			location = this.state.artifact.getLocation();
			
			let fileSubtypeOrder = ['Tiltseries', 'Reconstruction', 'Subvolume', 'Keymov', 'Keyimg', 'Preview', 'Snapshot', 'Thumbnail']
			files.sort((a, b) => {
				return fileSubtypeOrder.indexOf(a.getSubtype()) - fileSubtypeOrder.indexOf(b.getSubtype())
			})

			if (files) {
				for (var file of files){
					if (file.getType() === "Tomogram" && file.getSubtype() === "Keyimg"){
						thumbFilename = file.getFilename();
					}
					if (file.getType() === "Tomogram" && file.getSubtype() === "Keymov"){
						if (this.props.Core.util.getExtension(file.getFilename()) === "mp4"){
							video = file;
							videoFilename = file.getFilename();
						}
					}
					if (file.getSoftware() && file.getSoftware() !== ""){
						software = file.getSoftware();
					}
					if (file.getSubtype() === 'Snapshot' && file.getFilename().match(`.jpg$`)) {
						snapshots.push("http://etdb.caltech.edu:8080/ipfs/" + location + "/" + file.getFilename())
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
			lab = this.state.artifact.getDetail("lab");
			institution = this.state.artifact.getDetail("institution");
			microscopist = this.state.artifact.getDetail("microscopist");
			scopeName = this.state.artifact.getDetail("scopeName") || "Caltech Polara";
			scopeName = scopeName === '0' ? "Caltech Polara" : scopeName


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
			txid = this.state.artifact.getTXID()
		}
		return(
			<div>
				<Header />
				<div className="row" id="singletomogram">
					<div className="col-sm-6">
					</div>
				</div>
                <div className="container row" id="singletomograminfo">
                <h2>{title}</h2>
						<div id="reddiv"> </div>
                        </div>

				<div className="container row" id="singletomograminfo">
					<div className="col-sm-4" id="videoembed">
						<div id="videoinner">
							{ videoFilename ? <video autoPlay loop controls>
								<source src={"http://etdb.caltech.edu:8080/ipfs/" + location + "/" + videoFilename} />
							</video> : <img src={"http://etdb.caltech.edu:8080/ipfs/" + location + "/" + thumbFilename} />}
							<div id="share">
								<p>
									<b>Share:</b>
									<TwitterShareButton url={"http://etdb.caltech.edu/tomogram/" + txid}>
										<TwitterIcon size={32} round />
									</TwitterShareButton>
									<RedditShareButton url={"http://etdb.caltech.edu/tomogram/" + txid}>
										<RedditIcon size={32} round />
									</RedditShareButton>
									<FacebookShareButton url={"http://etdb.caltech.edu/tomogram/" + txid}>
										<FacebookIcon size={32} round />
									</FacebookShareButton>
									<LinkedinShareButton url={"http://etdb.caltech.edu/tomogram/" + txid}>
										<LinkedinIcon size={32} round />
									</LinkedinShareButton>
									<GooglePlusShareButton url={"http://etdb.caltech.edu/tomogram/" + txid}>
										<GooglePlusIcon size={32} round />
									</GooglePlusShareButton>
									<PinterestShareButton url={"http://etdb.caltech.edu/tomogram/" + txid}>
										<PinterestIcon size={32} round />
									</PinterestShareButton>
									<EmailShareButton url={"http://etdb.caltech.edu/tomogram/" + txid}>
										<EmailIcon size={32} round />
									</EmailShareButton>
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-8" id="tomographdata">
						
						<p><b>Tilt Series date:</b> {niceDate}</p>
						<p><b>Data Taken By:</b> {microscopist}</p>
						<p><b>Species / Specimen:</b> <i>{speciesName} </i></p>
						<p><b>Strain:</b> {strain}</p>
						<p><b>Tilt Series Setting:</b> {tiltSeriesSettingsString}.</p>
						<p><b>Microscope:</b> {scopeName}</p>
						<p><b>Acquisition Software:</b> {software}</p>
						<p><b>Processing Software Used:</b> Raptor</p>
						<p style={{whiteSpace: "pre-wrap"}}><b>Notes:</b> {artNotes}</p>
                       
         

					</div>







                    
					<div className="col-sm-12 snapshots" style={{marginTop: "10px"}}>
						
							<h4>View Snapshots</h4>
						<div id="reddiv"></div>
						<div style={{width: "100%", margin: "auto", overflowX: "auto"}}>
							<div style={{display: "flex"}}>
								{snapshots.map((snapshot, i) => <img index={i} onClick={() => this.setState({photoIndex: i, isLightboxOpen: true})} width="auto" height={300} src={snapshot} style={{display: "inline-block", padding: "0px 3px"}} />)}
							</div>
						</div>
					</div>
					{this.state.isLightboxOpen && (
						<Lightbox
							mainSrc={snapshots[this.state.photoIndex]}
							nextSrc={snapshots[(this.state.photoIndex + 1) % snapshots.length]}
							prevSrc={snapshots[(this.state.photoIndex + snapshots.length - 1) % snapshots.length]}
							onCloseRequest={() => this.setState({ isLightboxOpen: false })}
							onMovePrevRequest={() =>
								this.setState({
									photoIndex: (this.state.photoIndex + snapshots.length - 1) % snapshots.length,
								})
							}
							onMoveNextRequest={() =>
								this.setState({
									photoIndex: (this.state.photoIndex + 1) % snapshots.length,
								})
							}
						/>
					)}
					<div className="col-sm-12 downloads" style={{marginTop: "10px"}}>
                    <h4>Download files</h4>
						<div id="reddiv"></div>
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
