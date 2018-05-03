import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

class NotFoundPage extends Component {
	render(){
		return(
			<div>
				<Header />
					<center>
						<h1 style={{paddingTop: "250px"}}>404 Page Not Found</h1>
					</center>
				<Footer />
			</div>
		)
	}
}

export default NotFoundPage;