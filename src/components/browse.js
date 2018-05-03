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
		this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);
		this.handleToggleAdvancedSearch = this.handleToggleAdvancedSearch.bind(this);
		this.clearSearchParams = this.clearSearchParams.bind(this);
		this.deleteRowParamsFromState = this.deleteRowParamsFromState.bind(this);

	}

	componentDidMount(){
    this.getTomograms();
  }


  getTomograms(){
    this.props.Core.Index.getArtifacts("*", this.storeTomograms, (error) => {
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

	deleteRowParamsFromState(uid) {
    this.props.onDeleteRowParamsFromState(uid);
  }

	handleAdvancedSearchChange(searchParams){
		var advancedSearchParams = this.state.advancedSearchParams;
		var didMatch = false;

		for (var i = 0; i < advancedSearchParams.length; i++) {
			if (advancedSearchParams[i].uid === searchParams.uid) {
				advancedSearchParams[i] = searchParams;
				didMatch = true;
			}
		}

		if (!didMatch) {
			advancedSearchParams.push(searchParams);
		}

		this.setState({
			advancedSearchParams: advancedSearchParams
		})
  }

	handleToggleAdvancedSearch(advancedSearchToggleBool) {
		this.setState({
			advancedSearchToggleBool: advancedSearchToggleBool,
			filterText: ""
		}, this.clearSearchParams)
  }

	clearSearchParams() {
		if (!this.state.advancedSearchToggleBool) {
			this.setState({advancedSearchParams: []})
		}
	}

	deleteRowParamsFromState(uid) {
		// console.log(uid)
		var advancedSearchParams = this.state.advancedSearchParams;

		for (var i = 0; i < advancedSearchParams.length; i++) {
			if (advancedSearchParams[i].uid === uid) {
				console.log("UID: ", uid, "ASP: ", advancedSearchParams[i]);
				let newParameterState = this.state.advancedSearchParams;
				newParameterState.splice(i, 1)
				this.setState({advancedSearchParams: newParameterState})
				// console.log(newParameterState)
			}
		}
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
						onAdvancedSearchChange={this.handleAdvancedSearchChange}
						onToggleAdvancedSearch={this.handleToggleAdvancedSearch}
						onDeleteRowParamsFromState={this.deleteRowParamsFromState}

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
