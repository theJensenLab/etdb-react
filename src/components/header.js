import React, { Component } from 'react'

import logo from '../assets/img/etdb-logo.png'

class Header extends Component {
	render(){
		return(
		  <div id="headerfixed">
		    <div id="topbar">
		      <div className="row">
		        <div className="col-sm-6"><a href="/"><img className="black-logo" src={logo}/></a></div>
		        <div className="col-sm-6">
		          <div id="menu">
		          	<a href="/about">About</a>
		          	<a href="/browse">Browse Database</a>
		          	<a href="/featured">Featured Tomograms</a>
		          	<a href="/about#FAQ">FAQ</a>
		          	<a href="/contact">Contact</a>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		)
	}
}

export default Header;