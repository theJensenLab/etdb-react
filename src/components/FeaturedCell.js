import React, { Component } from 'react'

class FeaturedCell extends Component {
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
		this.props.Core.Index.search({ 
			"protocol": "media",
			"searchOn": [
				"sid",
				"lab",
				"institution"
			],
			"searchFor": [
				this.props.tomogram.sid,
				this.props.tomogram.lab,
				this.props.tomogram.institution
			]
		}, this.storeTomogram, (error) => {
			console.error(error)
		})
	}
	storeTomogram(artifact){
		this.setState({artifact: artifact});
	}
	render(){
		var matchedTomogram = undefined;
		var thumbnailLocation = "QmevjEoYtXtDBvjBFhxLuHaPHghdpPSChSvg64CWisGJEV"; // Default
		var thumbnail = undefined;
		var thumbnailFilename = "keyimg_pd2004-07-30-2.jpg"; // Default

		if (this.state.artifact){
			thumbnailLocation = artifact.getLocation();
			thumbnail = artifact.getThumbnail();
			thumbnailFilename = thumbnail.getFilename();
		}

		return(
			<div className="col-sm-3">
				<a href={this.props.url}>
                <div id="noimage">Data Not Available</div>
					<img className="results-thumb" src={"http://etdb.caltech.edu:8080/ipfs/" + thumbnailLocation + "/" + thumbnailFilename}/>
					<name>{this.props.title}</name>
				</a>
			</div>
		)
	}
}

export default FeaturedCell;