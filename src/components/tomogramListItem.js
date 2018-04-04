import React, { Component } from 'react'
import moment from 'moment';

class TomogramListItem extends Component {
	render(){
		return(
			<div className="col-sm-3" id="tomogramcell">
				<div id="video-thumb-container">
					<a className="tomogram-link" href={"/tomogram/" + this.props.artifact.getTXID().substr(0,6)}>
						<video className="videothumbhover" loop="">
							<source src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/tomogram-Converted_1.mp4" type="video/mp4"/>
							<source src="/video/movie.ogg" type="video/ogg"/>
						</video>
						<name>{this.props.artifact.getTitle()}</name>
						<date>{moment(this.props.artifact.getDetail("date") * 1000).calendar(null, {sameElse: "MMMM Do YYYY"})}</date>
					</a>
				</div>
			</div>
		)
	}
}

export default TomogramListItem;