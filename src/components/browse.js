import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import TomogramListItem from './tomogramListItem.js'

class Browse extends Component {
	constructor(props){
		super(props);

		this.state = {
			artifacts: []
		}

		this.getTomograms = this.getTomograms.bind(this);
		this.storeTomograms = this.storeTomograms.bind(this);
	}
	componentDidMount(){
		this.getTomograms();
	}
	getTomograms(){
		this.props.Core.Index.getSupportedArtifacts(this.storeTomograms, (error) => {
			console.error(error)
		})
	}
	storeTomograms(artifacts){
		this.setState({artifacts: artifacts});
	}
	render(){
		return(
			<div>
				<Header />
				<div className="row" id="browsedatabase">
					<div className="col-sm-2">
						<div id="filters"></div>
						<input className="form-control" type="text" placeholder="Search for..."/>
						<div id="reddiv"></div><b>Sort by</b>
						<p>Most Viewed</p>
						<p>Specimen</p>
						<p>User</p>
                        <p>Last Modified</p>
                        <p>Date Taken</p>
                        
                        
                        <div id="reddiv"></div><b>Filters</b>
						<p>+ Bacteria</p>
						<p>+ Archaea</p>
						<p>+ Eukaryotes</p>
					</div>
					<div className="col-sm-10" id="searchresultsgrid">
						{this.state.artifacts.map((artifact) => <TomogramListItem Core={this.props.Core} artifact={artifact} />)}
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Browse;