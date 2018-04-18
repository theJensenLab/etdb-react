import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import FeaturedFile from '../assets/data/featured.js';

const featuredTypes = FeaturedFile.featuredSummary;

class FeaturedCollection extends Component {
	constructor(props){
		super(props);

		this.state = {
			artifacts: []
		}

		this.getTomograms = this.getTomograms.bind(this);
		this.storeTomograms = this.storeTomograms.bind(this);
	}
	componentDidMount(){
		this.getTomograms();
	}
	getTomograms(){
		this.props.Core.Index.getSupportedArtifacts((this.storeTomograms), (error) => {
			console.error(error)
		})
	}
	storeTomograms(artifacts){
		this.setState({artifacts: artifacts});
	}
	render(){

		var type = {};
		var tomograms = [];

		for (var t of featuredTypes){
			if (t.section === this.props.match.params.id){
				type = t;
				tomograms = t.artifacts;
			}
		}
		return(
			<div>
				<Header />
				<div className="row" id="featured-2">
					<div className="col-sm-8">
						<h2>{type.name}</h2>
					</div>
                    <div className="col-sm-4">
					<a className="back" href="/featured">Back to featured tomograms</a>
					</div>
				</div>
				<div className="row" id="featured-3">
					<div className="col-sm-6">
						<div id="reddiv"></div>
						<p>{type.detailOne}</p>
					</div>
					<div className="col-sm-6">
						<div id="spacediv"></div>
						<p>{type.detailTwo}</p>
					</div>
				</div>
				<div className="row" id="featured">
					{tomograms.map((type, i) => {
						var matchedTomogram = undefined;
						var tomoTxid = "";
						var tomoTitle = "";
						var thumbnailLocation = "QmevjEoYtXtDBvjBFhxLuHaPHghdpPSChSvg64CWisGJEV"; // Default
						var thumbnail = undefined;
						var thumbnailFilename = "keyimg_pd2004-07-30-2.jpg"; // Default

						for (var artifact of this.state.artifacts){
							if (artifact.getDetail("institution") === type.institution 
									&& artifact.getDetail("lab") === type.lab 
									&& artifact.getDetail("sid") === type.sid){
								matchedTomogram = artifact;
								tomoTxid = artifact.getTXID().substr(0,6);
								tomoTitle = artifact.getTitle();
								thumbnailLocation = artifact.getLocation();
								thumbnail = artifact.getThumbnail();
								thumbnailFilename = thumbnail.getFilename();
							}
						}

						return <div className="col-sm-3" style={{marginBottom: "10px"}}>
							<a href={"/tomogram/" + tomoTxid}>
								<img className="results-thumb" src={"http://etdb.caltech.edu:8080/ipfs/" + thumbnailLocation + "/" + thumbnailFilename}/>
								<name>{tomoTitle || type.sid}</name>
								<p>Description</p>
							</a>
						</div>
					})}
				</div>
				<Footer />
			</div>
		)
	}
}

export default FeaturedCollection;