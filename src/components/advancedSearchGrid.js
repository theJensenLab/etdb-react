
import React, { Component } from 'react';
import AdvancedSearchRow from './advancedSearchRow'
import AdvancedSearchRowComplex from './advancedSearchRowComplex'
import SubmitAdvancedSearch from './submitAdvancedSearch'


class AdvancedSearchGrid extends Component {
  constructor(props){
    super(props);

    this.state = {
      complexRowCounter: 0
    }

    this.handleAddRowClick = this.handleAddRowClick.bind(this);
    this.handleMinusRowClick = this.handleMinusRowClick.bind(this);
    this.handleAdvanceSearchSubmit = this.handleAdvanceSearchSubmit.bind(this);
    this.handleSearchOnChange = this.handleSearchOnChange.bind(this)
    this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
    this.handleSearchForChange = this.handleSearchForChange.bind(this)

  }

  handleAddRowClick() {
    this.setState({
      complexRowCounter: this.state.complexRowCounter + 1
    })
  }

  handleMinusRowClick() {
    this.setState({
      complexRowCounter: this.state.complexRowCounter - 1
    })
  }

  handleAdvanceSearchSubmit(e){
    this.props.onSubmit(e);
  }

  handleSearchOnChange(searchOnField) {
    this.props.onSearchOnChange(searchOnField);
    // console.log(searchOnField);
  }

  handleSearchTypeChange(searchType) {
    this.props.onSearchTypeChange(searchType);
    // console.log(searchType);
  }

  handleSearchForChange(searchForText) {
    this.props.onSearchForChange(searchForText);
    // console.log(searchForText);
  }

  render() {
    let complexRows = [];

    for (var i = 0; i < this.state.complexRowCounter; i++){
      complexRows.push(
        <AdvancedSearchRowComplex
          onAddRowClick={this.handleAddRowClick}
          onMinusRowClick={this.handleMinusRowClick}
          id={i}
        />)
    }

    return (
      <div>
        <form id="advanced-search" onSubmit={this.handleAdvanceSearchSubmit}>
          <AdvancedSearchRow
            complexRowCounter={this.state.complexRowCounter}
            onAddRowClick={this.handleAddRowClick}
            onSearchOnChange={this.handleSearchOnChange}
            onSearchTypeChange={this.handleSearchTypeChange}
            onSearchForChange={this.handleSearchForChange}
          />
          {complexRows}
          <SubmitAdvancedSearch />
        </form>

      </div>

    )
  }
}


export default AdvancedSearchGrid
