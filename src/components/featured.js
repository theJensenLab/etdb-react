import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import FeaturedFile from '../assets/data/featured.js';

const featuredTypes = FeaturedFile.featuredSummary;

class Featured extends Component {
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
					{featuredTypes.map((type, i) => {
						var matchedTomogram = undefined;
						var thumbnailLocation = "QmevjEoYtXtDBvjBFhxLuHaPHghdpPSChSvg64CWisGJEV"; // Default
						var thumbnail = undefined;
						var thumbnailFilename = "keyimg_pd2004-07-30-2.jpg"; // Default

						for (var artifact of this.state.artifacts){
							if (artifact.getDetail("institution") === type.thumbnail.institution 
									&& artifact.getDetail("lab") === type.thumbnail.lab 
									&& artifact.getDetail("sid") === type.thumbnail.sid){
								matchedTomogram = artifact;
								thumbnailLocation = artifact.getLocation();
								thumbnail = artifact.getThumbnail();
								thumbnailFilename = thumbnail.getFilename();
							}
						}

						return <div className="col-sm-3">
							<a href={"/featured/" + type.section}>
								<img className="results-thumb" src={"http://etdb.caltech.edu:8080/ipfs/" + thumbnailLocation + "/" + thumbnailFilename}/>
								<name>{type.name}</name>
							</a>
						</div>
					})}
				</div>
				<Footer />
			</div>
		)
	}
}

export default Featured;