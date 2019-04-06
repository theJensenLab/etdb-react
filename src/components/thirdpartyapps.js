import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

class Thirdpartyapps extends Component {
	render(){
		return(
			<div>
				<Header />
                <div id="space150"></div>
				<div className="row " id="about">
				  <div className="col-sm-8">
                  <h2><b>Third Party Apps</b></h2>
				    <h6>The ETDB is an open source and built on a distributed network, this makes it ideal for app developers who are interested in creating third party apps. Below are the apps currently available. If you are interested in contributing, please <a href="/contact">get in touch.</a></h6>
				  </div>

                   <div className="col-sm-4">
                   <img src="/src/assets/img/apps.gif"/>				  </div>
				</div>
                <div className="row challengerow" id="about">
               
				  <div className="col-sm-8">
                  <h3>1. ETDB Download
</h3>
				      <div id="reddiv"></div>				      
                        <p className="goal challenge">Download the entire ETDB to your computer.</p>
 
                        <p className="challenge">This is an example of third party command line application written in `nodejs` to download data from ETDB-Caltech. The goal here is not only provide the functionality for bulk download but also to exemplify how a simple app can be made to leverage the distributed nature of ETDB.</p>
                        <p class="app-meta"><b>Author:</b> Davi Ortega</p>
                        <p class="app-meta"><b>Date published:</b> 5/8/2018 </p>

                    
                        
				    </div>

				  <div className="col-sm-4"> 
               
                   <a href="/"  className="btn btn-primary" target="_blank" >Download full package <i class="far fa-arrow-alt-circle-down"></i></a>
                   <a class="appdownload" href="/">Source code</a>
                   <a class="appdownload" href="/"> User manual</a>
                   <a class="appdownload" href="/">Developer manual</a>


                  
                  
                  </div>
				</div>



                  

				  
	




				<Footer />
			</div>
		)
	}
}

export default Thirdpartyapps;