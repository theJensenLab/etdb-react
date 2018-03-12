import React, { Component } from 'react'

class Footer extends Component {
	render(){
		return(
			<div className="row" id="footer">
			  <div className="col-sm-3">
			  	<a href="https://templeton.org/">
			  		<img src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/02/templteton.png"/>
			  	</a>
			  	<a href="https://templeton.org/">
			  		<img src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/02/nih-logo-color.png"/>
			  	</a>
			  </div>
			  <div className="col-sm-3">
			  	<a href="http://beckmaninstitute.caltech.edu/">
			  		<img src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/02/logo.png"/>
			  	</a>
			  	<a href="https://templeton.org/">
			  		<img src="http://www.designing-science-development.com/jensen/wp-content/uploads/2018/02/hhmi-social-200x200.png"/>
			  	</a>
			  </div>
			  <div className="col-sm-3">
			    <p><b>California Institute of Technology</b></p>
			    <p>1200 E California Blvd</p>
			    <p>Pasadena, CA 91125</p>
			    <p>Department of Biology</p>
			    <p>Broad Center for the Biological Sciences</p>
			  </div>
			  <div className="col-sm-3">
			    <p>Extra links</p>
			  </div>
			</div>
		)
	}
}

export default Footer;