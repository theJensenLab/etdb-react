import React, { Component } from 'react'

import hhmi from '../assets/img/hhmi.png'
import nih from '../assets/img/nih.png'
import beckman from '../assets/img/beckman.png'
import templteton from '../assets/img/templteton.png'
import cemi from '../assets/img/cemi.png'
import hfsp from '../assets/img/hfsp.png'
import logoWhite from '../assets/img/logo-white.png'
import searle_banner from '../assets/img/searle_banner.png'
import ted from '../assets/img/ted.png'
import agi from '../assets/img/agi.png'

class Footer extends Component {
	render(){
		return(
			<div>
				
					<div className="row" id="footer">
                    <h3>The following organizations supported the collection of the data in this database:</h3>
						<div className="col-sm-3">
							<a target="blank" href="http://www.hhmi.org/">
								<img className="square" src={hhmi}/>
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="https://om.od.nih.gov/">
								<img className="long" src={nih}/>
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="http://beckmaninstitute.caltech.edu/">
								<img src={beckman}/>
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="https://templeton.org/">
								<img src={templteton} />
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="http://microbiology.caltech.edu/CIT_Micro-Welcome.html">
								<img src={cemi} />
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="http://www.hfsp.org/">
								<img className="square" src={hfsp} />
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="https://www.moore.org/">
								<img src={logoWhite} />
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" className="footerlink" href="https://www.energy.gov/">
								Department of Energy
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" className="footerlink" href="http://www.searlescholars.net/">
								<img src={searle_banner} />
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="http://www.tedpella.com/">
								<img src={ted} />
							</a>
						</div>
						<div className="col-sm-3">
							<a target="blank" href="http://agi.org/">
								<img src={agi} />
							</a>
						</div>

                       <h4><a href="/terms">Terms and Conditions.</a> © 2018 The Jensen Lab, Caltech</h4>
					</div>
              
			</div>
            
		)
	}
}

export default Footer;
