import React, { Component } from 'react'

import logo from '../assets/img/etdb-logo.png'
import homePic from '../assets/img/etdb-home.png'

class Home extends Component {
	constructor(props){
		super(props);

		this.state = {
			numberOfTomograms: "(Loading...)",
			numberOfSpecies: "(Loading...)"
		}

		this.getTomograms = this.getTomograms.bind(this);
		this.countTomograms = this.countTomograms.bind(this);
	}
	componentDidMount(){
		this.getTomograms();
	}
	getTomograms(){
		this.props.Core.Network.OIPdRequest("get", "/research/tomogram/summary", {}, this.countTomograms, console.error)
	}
	countTomograms(info){
		var numTomos = "(Loading...)";
		var numSpecies = "(Loading...)";

		if (info && info.data){
			numTomos = info.data.total || "(Loading...)";
			numSpecies = info.data.species || "(Loading...)";

			if (info.data.publishers && info.data.publishers.FTSTq8xx8yWUKJA5E3bgXLzZqqG9V6dvnr){
				numTomos = info.data.publishers.FTSTq8xx8yWUKJA5E3bgXLzZqqG9V6dvnr
			}
		}
		this.setState({numberOfTomograms: numTomos, numberOfSpecies: numSpecies});
	}
	render(){

		return(
			<div>
				<div id="headerfixed">
				  <div className="transparent" id="topbar">
				    <div className="row">
				      <div className="col-sm-6"><a href="./index.js">   <img className="black-logo" src={logo} /> </a> </div>
				      <div className="col-sm-6">
				        <div id="menu">
			          	<a href="/about">About</a>
			          	<a href="/browse">Browse Database</a>
			          	<a href="/featured">Featured Tomograms</a>
			          	<a href="/challenges">Scientific Challenges</a>
			          	<a href="/contact">Contact</a>
			          </div>
				      </div>
				    </div>
				  </div>
				</div>
				<div id="home-image">
				  <div id="home-image-container"><img src={homePic} />
                  </div>
				</div>
				<div className="row" id="homecontent">
				  <div className="col-sm-6" id="homehero"></div>
				  <div className="col-sm-6" id="homesecondary">
				    <div>
                        <h4>Welcome to the</h4>
				      <h3>Caltech Electron Tomography Database</h3>
				      <h6>A public repository featuring {this.state.numberOfTomograms} electron tomography datasets of intact bacterial and archaeal cells, representing {this.state.numberOfSpecies} species.</h6>
				      <a className="browse" href="/browse">Browse database <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
				   <a class="termsandconditions" href="/terms">View our terms and conditions</a>
                    </div>
				  </div>
				</div>
			</div>
		)
	}
}

export default Home;
