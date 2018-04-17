import React, { Component } from 'react'

class Footer extends Component {
	render(){
		return(
            
			<div className="row" id="footer">
			  <div className="col-sm-3">
			  	<a href="http://www.hhmi.org/">
			  		<img class="square" src="/src/assets/img/hhmi.png"/>
			  	</a>
			  
			  </div>
			  <div className="col-sm-3">
              <a href="https://om.od.nih.gov/">
			  		<img class="long" src="/src/assets/img/nih.png"/>
			  	</a>
			  	
			  </div>
			  <div className="col-sm-3">
              <a href="http://beckmaninstitute.caltech.edu/">
			  		<img src="/src/assets/img/beckman.png"/>
			  	</a>
			  </div>
			  <div className="col-sm-3">
              <a href="https://www.moore.org/">
			  		<img src="/src/assets/img/logo-white.png"/>
			  	</a>
			  </div>
              <div className="col-sm-3">
              <a href="http://microbiology.caltech.edu/CIT_Micro-Welcome.html">
			  		<img src="/src/assets/img/cemi.png"/>
			  	</a>
			  </div>
			  <div className="col-sm-3">
              <a href="http://www.hfsp.org/">
			  		<img class="square" src="/src/assets/img/hfsp.png"/>
			  	</a>
			  </div>
              <div className="col-sm-3">
              <a href="https://templeton.org/">
			  		<img src="/src/assets/img/templteton.png"/>
			  	</a>
			  </div>
              <div className="col-sm-3">
              <a class="footerlink" href="https://templeton.org/">
			  		Department of Energy
			  	</a>
			  </div>
              <div className="col-sm-3">
              <a class="footerlink" href="https://templeton.org/">
              The Searle Scholars Program
			  	</a>
			  </div>
              <div className="col-sm-3">
              <a href="https://templeton.org/">
              <img src="/src/assets/img/ted.png"/>			  	</a>
			  </div>
              <div className="col-sm-3">
              <a href="https://templeton.org/">
              <img src="/src/assets/img/agi.png"/>			  	</a>
			  </div>
			</div>
		)
	}
}

export default Footer;