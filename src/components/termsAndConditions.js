import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'




class termsAndConditions extends Component {
	render(){
		return(
			<div className="contactrow">
				<Header />
				<div id="featured-2" className="row">
				  <div className="col-sm-8">
				    <h2>Terms and Condititions</h2>
				  </div>
                  <div className="col-sm-4">
				  </div>
				</div>
				<div className="row contact" id="featured-3">
				
				  <div className="col-sm-12 tandc">
                    <div id="reddiv"></div>
				    <p>These images and data have been provided free to the public in hopes of advancing science.  All parties are free to use them for research purposes without restriction.  </p>
                        
                    <p>Publications benefiting from the data should reference Ortega et al. (name of paper we are writing now).  Users may also choose to directly acknowledge the individual, individuals, lab, or institution who collected particular images as well.  </p>
                        
                    <p>If any party wishes to use the images or data for commercial purposes, please contact Prof. Grant Jensen at jensen@caltech.edu.  The California Institute of Technology (Caltech) claims copyright to the data and images contained herein.  </p>
                        
                    <p>Images and data are provided “as is,” with no warranties of any kind, including that the use of the images and data infringe any third party intellectual property rights.   Note some representations of a small fraction of the data have been published in scientific journals. Some of these journals claim copyright on those particular representations that were shown in the paper as figures, but it is highly unlikely that any new representation would exactly match that already copyrighted. 
</p>
				   
				  </div>
				 
					

                    
				</div>
				<Footer />
			</div>
		)
	}
}

export default termsAndConditions;