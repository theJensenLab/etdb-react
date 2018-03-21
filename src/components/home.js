import React, { Component } from 'react'

import logo from '../assets/img/etdb-logo.png'
import red from '../assets/img/red.jpg'

class Home extends Component {
	constructor(props){
		super(props);

		this.state = {
			numberOfTomograms: ""
		}

		this.getTomograms = this.getTomograms.bind(this);
		this.countTomograms = this.countTomograms.bind(this);
	}
	componentDidMount(){
		this.getTomograms();
	}
	getTomograms(){
		this.props.Core.Index.getSupportedArtifacts(this.countTomograms, (error) => {
			console.error(error)
		})
	}
	countTomograms(artifacts){
		this.setState({numberOfTomograms: artifacts.length});
	}
	render(){
		return(
			<div>
				<div id="headerfixed">
				  <div className="transparent" id="topbar">
				    <div className="row">
				      <div className="col-sm-6"><a href="./index.js"></a><img className="black-logo" src={logo} /></div>
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
				<div id="home-image">
				  <div id="home-image-container"><img src={red}/></div>
				</div>
				<div className="row" id="homecontent">
				  <div className="col-sm-6" id="homehero"></div>
				  <div className="col-sm-6" id="homesecondary">
				    <div>
                        <h4>Welcome to the</h4>
				      <h3>Caltech Electron Tomography Database</h3>
				      <h6>A public repository featuring more than {this.state.numberOfTomograms} electron tomography datasets of intact bacterial and archaeal cells, representing more than [number or species counter] species.</h6>
				      <a className="browse" href="/browse">Browse database <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
				    </div>
				  </div>
				</div>
			</div>
		)
	}
}

export default Home;