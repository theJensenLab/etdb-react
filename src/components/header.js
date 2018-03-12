import React, { Component } from 'react'

class Header extends Component {
	render(){
		return(
		  <div id="headerfixed">
		    <div id="topbar">
		      <div class="row">
		        <div class="col-sm-6"><a href="./index.js"><img class="black-logo" src="/assets/etdb-logo.png"/></a></div>
		        <div class="col-sm-6">
		          <div id="menu"><a href="./about">About</a><a href="./database">Browse Database</a><a href="./featured">Featured Tomograms</a><a href="about#faq">FAQ</a><a href="/contact">Contact</a></div>
		        </div>
		      </div>
		    </div>
		  </div>
		)
	}
}

export default Header;