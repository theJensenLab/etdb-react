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
			    <p><b>About</b></p>
			    <p>Electron Tomography</p>
			    <p>Scientific Challenges</p>
			    <p>Built with Blockchain</p>
			    <p>FAQ</p>
                
			  </div>
			  <div className="col-sm-3">
			    <p>Extra links</p>
			  </div>
			</div>
		)
	}
}

export default Footer;