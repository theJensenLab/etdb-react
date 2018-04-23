import React, { Component } from 'react'
import moment from 'moment';

class TomogramListItem extends Component {
	render(){
		let thumbFilename = "";

		if (this.props.artifact){
			let thumbnail = this.props.artifact.getThumbnail()
			if (thumbnail){
				thumbFilename = thumbnail.getFilename();
			}
		}

		return(
			<div className="col-sm-3" id="tomogramcell"	>
				<div id="video-thumb-container">
					<a className="tomogram-link" href={"/tomogram/" + this.props.artifact.getTXID().substr(0,6)}>
						<video className="videothumbhover" style={{maxHeight: "72%"}} poster={"http://etdb.caltech.edu:8080/ipfs/" + this.props.artifact.getLocation() + "/" + thumbFilename}>
							<source src="" type="video/mp4"/>
						</video>
						<name><i>{this.props.artifact.getDetail("speciesName")}</i></name>
						<span className="TomoCellSubtext">{moment.utc(this.props.artifact.getDetail("date") * 1000).calendar(null, {sameElse: "MMM Do YYYY"})}</span>
						<span className="TomoCellMicroscopist">{this.props.artifact.getDetail("microscopist") || ""}</span>
					</a>
				</div>
			</div>
		)
	}
}

export default TomogramListItem;
