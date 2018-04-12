import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'
import Filter from './filter'
import SearchResultGrid from './searchResultGrid'

class Browse extends Component {
	constructor(props){
		super(props);

		this.state = {
			filterText: "",
			filter: false
		}
	}

	render(){
		return(
			<div>
				<Header />
				<div className="row" id="browsedatabase">
					<Filter
						filterText={this.state.filterText}
						filter={this.state.filter}
					/>
					<SearchResultGrid
						Core={this.props.Core}
						filterText={this.state.filterText}
						filter={this.state.filter}
					/>

				</div>
				<Footer />
			</div>
		)
	}
}

export default Browse;
