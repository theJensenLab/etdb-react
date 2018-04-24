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
			artifacts: [],
			sortValue: null,
			flipSort: false,
			advancedSearchParams: [],
			advancedSearchToggleBool: false
		}

		this.getTomograms = this.getTomograms.bind(this);
		this.storeTomograms = this.storeTomograms.bind(this);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.handleSortButtonChange = this.handleSortButtonChange.bind(this);
		this.handleFlipSortChange = this.handleFlipSortChange.bind(this);
		this.handleSimpleSearchChange = this.handleSimpleSearchChange.bind(this);
		this.handleToggleAdvancedSearch = this.handleToggleAdvancedSearch.bind(this);
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
		this.setState({
			[name]: checked
		})
	}

	handleSortButtonChange(value) {
		console.log(value);
		if (value === this.state.sortValue) {
			this.setState({sortValue: null})
		} else this.setState({
			sortValue: value,
			flipSort: false
		})
	}

	handleFlipSortChange() {
		this.setState(prevState => ({
      flipSort: !prevState.flipSort
    }))
	}

	handleSimpleSearchChange(simpleSearchParams){
    // console.log(simpleSearchParams);
		// var params = this.state.advancedSearchParams;
		// var didMatch = false;
		//
		// for (var i; i < params.length; i++) {
		// 	if (params[i].id === simpleSearchParams.id) {
		// 		params[i] = simpleSearchParams;
		// 		didMatch = true;
		// 	}
		// }
		//
		// if (!didMatch) {
		// 	params.push(simpleSearchParams);
		// }
		//
		// this.setState({
		// 	advancedSearchParams: params
		// })
		this.setState({
			advancedSearchParams: [simpleSearchParams]
		})
  }

	handleToggleAdvancedSearch(advancedSearchToggleBool) {
		this.setState({
			advancedSearchToggleBool: advancedSearchToggleBool,
			filterText: ""
		})
  }

	render(){
		return(
			<div>
				<Header />
				<div className="row" id="browsedatabase">
					<Filter
						onFilterTextChange={this.handleFilterTextChange}
						onCheckboxChange={this.handleCheckboxChange}
						onSelectChange={this.handleSelectChange}
						sortValue={this.state.sortValue}
						onSortButtonChange={this.handleSortButtonChange}
						onFlipSortChange={this.handleFlipSortChange}
						flipSort={this.state.flipSort}
						flipText={this.state.flipText}
						onSimpleSearchChange={this.handleSimpleSearchChange}
						onToggleAdvancedSearch={this.handleToggleAdvancedSearch}

					/>
					<SearchResultGrid
						Core={this.props.Core}
						artifacts={this.state.artifacts}
						filterText={this.state.filterText}
						filterState={this.state}
						sortValue={this.state.sortValue}
						flipSort={this.state.flipSort}
						advancedSearchParams={this.state.advancedSearchParams}
						advancedSearchToggleBool={this.state.advancedSearchToggleBool}
					/>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Browse;
