import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'
import Filter from './filter'
import SearchResultGrid from './searchResultGrid'

class Browse extends Component {
	constructor(props){
		super(props);

		this.state = {
			artifacts: [],
			filterText: "",
			filterDate: false
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
					<Filter
						filterText={this.state.filterText}
						filterDate={this.state.filterDate}
					/>
					<SearchResultGrid
						Core={this.props.Core}
						artifacts={this.state.artifacts}
						filterText={this.state.filterText}
						filterDate={this.state.filterDate}
					/>

				</div>
				<Footer />
			</div>
		)
	}
}

export default Browse;
