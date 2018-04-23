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
			advancedSearchParams: []
		}

		this.getTomograms = this.getTomograms.bind(this);
		this.storeTomograms = this.storeTomograms.bind(this);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.handleSortButtonChange = this.handleSortButtonChange.bind(this);
		this.handleFlipSortChange = this.handleFlipSortChange.bind(this);
		this.handleSearchOnChange = this.handleSearchOnChange.bind(this);
    this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
    this.handleSearchForChange = this.handleSearchForChange.bind(this);
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
		//only for Dev so my comp doesn't crash. delete for prod
		artifacts = artifacts.slice(0,4);
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

	handleSearchOnChange(searchOnField) {
		this.setState({
			advancedSearchParams: null,
			advancedSearchParams: {
				searchOn: searchOnField
			}
		})
  }

  handleSearchTypeChange(searchType) {
    console.log(searchType);
  }

  handleSearchForChange(searchForText) {
    console.log(searchForText);
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
						onSearchOnChange={this.handleSearchOnChange}
	          onSearchTypeChange={this.handleSearchTypeChange}
	          onSearchForChange={this.handleSearchForChange}
					/>
					<SearchResultGrid
						Core={this.props.Core}
						artifacts={this.state.artifacts}
						filterText={this.state.filterText}
						filterState={this.state}
						sortValue={this.state.sortValue}
						flipSort={this.state.flipSort}
					/>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Browse;
