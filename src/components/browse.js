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
			// checkered: {}
		}

		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
	}
	handleFilterTextChange(filterText) {
		this.setState({
			filterText: filterText
		});
	}

	handleCheckboxChange(name, checked) {
		//how can I do something like this: ???

		// this.setState((prevState) => {
		// 	const checkeredObj = Object.assign({[name]: checked}, prevState.checkered);
		// 	console.log(prevState.checkered);
		// 	return {checkered: checkeredObj};
		// })
		this.setState({
			[name]: checked
		})
		// console.log(this.state);
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
					/>
					<SearchResultGrid
						Core={this.props.Core}
						artifacts={this.props.Artifacts}
						browseState={this.state}
					/>

				</div>
				<Footer />
			</div>
		)
	}
}

export default Browse;
