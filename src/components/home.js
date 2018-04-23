import React, { Component } from 'react'

import logo from '../assets/img/etdb-logo.png'

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
		this.props.Core.Index.getSupportedArtifacts(this.countTomograms, (error) => {
			console.error(error)
		})
	}
	countTomograms(artifacts){
		this.setState({numberOfTomograms: artifacts.length});

		var TypesOfSpecies = [];
		for (var artifact of artifacts){
			if (artifact.getDetail("speciesName") && TypesOfSpecies.indexOf(artifact.getDetail("speciesName")) === -1){
				TypesOfSpecies.push(artifact.getDetail("speciesName"))
			}
		}

		this.setState({numberOfSpecies: TypesOfSpecies.length});
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
			          	<a href="/challenges">Scientific Challenges</a>
			          	<a href="/contact">Contact</a>
			          </div>
				      </div>
				    </div>
				  </div>
				</div>
				<div id="home-image">
				  <div id="home-image-container"><img src="/src/assets/img/etdb-home.png"/>
                  <div id="photocredit">Matt Swulius using the Caltech Polara microscope</div>
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
				    </div>
				  </div>
				</div>
			</div>
		)
	}
}

export default Home;
