import React, { Component } from 'react'

class TomogramListItem extends Component {
	render(){
		return(
			<div class="col-sm-3" id="tomogramcell">
				<div id="video-thumb-container">
					<a class="tomogram-link" href="/singletomogram">
						<video class="videothumbhover" loop="">
							<source src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/01/tomogram-Converted_1.mp4" type="video/mp4"/>
							<source src="/video/movie.ogg" type="video/ogg"/>
						</video>
						<p>Tomogram name</p>
						<p>Tomogram date</p>
					</a>
				</div>
			</div>
		)
	}
}

export default TomogramListItem;