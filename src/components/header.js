import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/etdb-logo.png'

class Header extends Component {
	render(){
		return(
		  <div id="headerfixed">
		    <div id="topbar">
		      <div className="row">
		        <div className="col-sm-6"><Link to="/"><img className="black-logo" src={logo}/></Link></div>
		        <div className="col-sm-6">
		          <div id="menu">
		          	<Link to="/about">About</Link>
		          	<Link to="/browse">Browse Database</Link>
		          	<Link to="/featured">Featured Tomograms</Link>
		          	<Link to="/about#FAQ">FAQ</Link>
		          	<Link to="/contact">Contact</Link>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		)
	}
}

export default Header;
