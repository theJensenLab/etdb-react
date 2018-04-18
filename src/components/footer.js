import React, { Component } from 'react'

class Footer extends Component {
	render(){
		return(
			<div>
				<div className="row">This project</div> 
					<div className="row" id="footer">
						<div className="col-sm-3">
							<a target="blank" href="http://www.hhmi.org/">
								<img className="square" src="/src/assets/img/hhmi.png"/>
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="https://om.od.nih.gov/">
								<img className="long" src="/src/assets/img/nih.png"/>
							</a>	
						</div>
						<div className="col-sm-3">
							<a target="blank" href="http://beckmaninstitute.caltech.edu/">
								<img src="/src/assets/img/beckman.png"/>
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="https://templeton.org/">
								<img src="/src/assets/img/templteton.png"/>
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="http://microbiology.caltech.edu/CIT_Micro-Welcome.html">
								<img src="/src/assets/img/cemi.png"/>
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="http://www.hfsp.org/">
								<img className="square" src="/src/assets/img/hfsp.png"/>
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="https://www.moore.org/">
								<img src="/src/assets/img/logo-white.png"/>
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" className="footerlink" href="https://www.energy.gov/">
								Department of Energy
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" className="footerlink" href="http://www.searlescholars.net/">
								<img src="/src/assets/img/searle_banner.png"/>
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="http://www.tedpella.com/">
								<img src="/src/assets/img/ted.png"/>
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="http://agi.org/">
								<img src="/src/assets/img/agi.png"/>			  	
							</a>
						</div>
					</div>
			</div>
		)
	}
}

export default Footer;