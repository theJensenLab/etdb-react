import React, { Component } from 'react'

import logo from '../assets/img/etdb-logo.png'

class Home extends Component {
	render(){
		return(
			<div>
				<div id="headerfixed">
				  <div class="transparent" id="topbar">
				    <div class="row">
				      <div class="col-sm-6"><a href="./index.js"></a><img class="black-logo" src={logo} /></div>
				      <div class="col-sm-6">
				        <div id="menu"><a href="./about">About</a><a href="./database">Browse Database</a><a href="./featured">Featured Tomograms</a><a href="http://www.designing-science-development.com/jensen/about/#faq">FAQ</a><a href="./contact">Contact</a></div>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		)
	}
}

export default Home;