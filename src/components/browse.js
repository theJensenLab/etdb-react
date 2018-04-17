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
			// filterState: {
			// 	test: "ryan",
			// 	test2: "erik"
			// },
			artifacts: [],
			sortValue: null

		}

		this.getTomograms = this.getTomograms.bind(this);
		this.storeTomograms = this.storeTomograms.bind(this);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.handleSortButtonChange = this.handleSortButtonChange.bind(this);
	}

	componentDidMount(){
    this.getTomograms();
  }
  getTomograms(){
    this.props.Core.Index.getSupportedArtifacts((this.storeTomograms), (error) => {
      console.error(error)
    })
  }
	storeTomograms(artifacts){
    this.setState({artifacts: artifacts});
  }

	handleFilterTextChange(filterText) {
		this.setState({
			filterText: filterText
		});
	}

	handleCheckboxChange(name, checked) {

		//This doesn't work, so I have to pass the whole state to get access
		// this.setState({
		// 	filterState: {
		// 		[name]: checked
		// 	}
		// })

		this.setState({
			[name]: checked
		})

		// console.log(this.state);
	}

	handleSortButtonChange(value) {
		this.setState({
			sortValue: value
		})
	}

	render(){
		return(
			<div>
				<Header />
				<div className="row" id="browsedatabase">
					<Filter
						filterText={this.state.filterText}
						onFilterTextChange={this.handleFilterTextChange}
						onCheckboxChange={this.handleCheckboxChange}
						onSelectChange={this.handleSelectChange}
						sortValue={this.state.sortValue}
						onSortButtonChange={this.handleSortButtonChange}
					/>
					<SearchResultGrid
						Core={this.props.Core}
						artifacts={this.state.artifacts}
						filterText={this.state.filterText}
						filterState={this.state}
						sortValue={this.state.sortValue}
					/>

				</div>
				<Footer />
			</div>
		)
	}
}

export default Browse;
