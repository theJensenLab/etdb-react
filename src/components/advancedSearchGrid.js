
import React, { Component } from 'react';
import AdvancedSearchRow from './advancedSearchRow'
import AdvancedSearchRowComplex from './advancedSearchRowComplex'
import SubmitAdvancedSearch from './submitAdvancedSearch'

class AdvancedSearchGrid extends Component {
  constructor(props){
    super(props);

    this.state = {
      complexRowCounter: 0,
      complexRows: []
    }

    this.handleAddRowClick = this.handleAddRowClick.bind(this);
    this.handleMinusRowClick = this.handleMinusRowClick.bind(this);
    this.handleAdvanceSearchSubmit = this.handleAdvanceSearchSubmit.bind(this);
    this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);
  }

  handleAddRowClick() {
    let newComplexRow = [...this.state.complexRows];
    newComplexRow.push(
      <AdvancedSearchRowComplex
            onAddRowClick={this.handleAddRowClick}
            onMinusRowClick={this.handleMinusRowClick}
            onAdvancedSearchChange={this.handleAdvancedSearchChange}
          />
    );
    this.setState({complexRows: newComplexRow})
  }

  handleMinusRowClick() {
    this.setState({
      complexRowCounter: this.state.complexRowCounter - 1
    })
  }

  handleAdvanceSearchSubmit(e){
    this.props.onSubmit(e);
  }

  handleAdvancedSearchChange(searchParams){
    this.props.onAdvancedSearchChange(searchParams);
  }


  render() {

    return (
      <div>
        <form id="advanced-search" onSubmit={this.handleAdvanceSearchSubmit}>
          <AdvancedSearchRow
            complexRowArray={this.state.complexRows.length}
            onAddRowClick={this.handleAddRowClick}
            onAdvancedSearchChange={this.handleAdvancedSearchChange}


          />
          {this.state.complexRows}
          <SubmitAdvancedSearch />
        </form>

      </div>

    )
  }
}


export default AdvancedSearchGrid
