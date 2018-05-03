import React, { Component } from 'react'
import { BarLoader } from 'react-spinners'

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
		this.props.Core.Index.getArtifacts("*", this.storeTomograms, (error) => {
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
                        <div id="reddiv"></div>
					</div>
                    <div className="col-sm-4">
					<a className="topretur" href="/featured"><i class="fas fa-arrow-left"></i> Return to featured tomograms</a>
					</div>
				</div>
				<div className="row" id="featured">
					<div className="col-sm-12 featured-description">
						
						<p>{type.detailOne}</p>
					</div>
					
				</div>
				<div className="row" id="featured">
					{this.state.artifacts.length === 0 ? 
					<center style={{marginTop: "50px", marginBottom: "0px", width: "50%", marginLeft: "auto", marginRight: "auto"}}>
			            <BarLoader
			              color={'#e5342a'} 
			              width={-1}
			              loading={true} 
			            />
			        </center>
					: tomograms.map((type, i) => {
						var matchedTomogram = undefined;
						var tomoTxid = "";
						var tomoSpeciesName = "";
						var thumbnailLocation = "QmevjEoYtXtDBvjBFhxLuHaPHghdpPSChSvg64CWisGJEV"; // Default
						var thumbnail = undefined;
						var thumbnailFilename = "keyimg_pd2004-07-30-2.jpg"; // Default

						for (var artifact of this.state.artifacts){
							if (artifact.getDetail("institution") === type.institution 
									&& artifact.getDetail("lab") === type.lab 
									&& artifact.getDetail("sid") === type.sid){
								matchedTomogram = artifact;
								tomoTxid = artifact.getTXID().substr(0,6);
								tomoSpeciesName = artifact.getDetail("speciesName");
								thumbnailLocation = artifact.getLocation();
								thumbnail = artifact.getThumbnail();
								thumbnailFilename = thumbnail.getFilename();
							}
						}

						return <div className="col-sm-3" style={{marginBottom: "10px"}}>
							<a href={"/tomogram/" + tomoTxid}>
								<img className="results-thumb" src={"https://etdb.caltech.edu/ipfs/" + thumbnailLocation + "/" + thumbnailFilename}/>
								<name2><i>{tomoSpeciesName || type.sid}</i></name2> <div id="goarrow"><i class="fas fa-arrow-right"></i>

</div>
								<description>{type.description}</description>
							</a>
						</div>
					})}
				</div>

                	<div className="row" id="featured">
					{/* This line below should be uncommented out once the OIPd Advanced search is working.
					featuredTypes.map((type, i) => <FeaturedCell Core={this.props.Core} tomogram={type.thumbnail} url={"/featured/" + type.section} title={type.name} description={type.description} />)
					*/}
					{this.state.artifacts.length === 0 ?
					<center style={{marginTop: "50px", marginBottom: "0px", width: "50%", marginLeft: "auto", marginRight: "auto"}}>
			            <BarLoader
			              color={'#e5342a'}
			              width={-1}
			              loading={true}
			            />
			        </center>
					: featuredTypes.map((type, i) => {
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
								<img className="results-thumb" src={"https://etdb.caltech.edu/ipfs/" + thumbnailLocation + "/" + thumbnailFilename}/>
								<name>{type.name}</name> <div id="goarrow"><i className="fas fa-arrow-right"></i></div>
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