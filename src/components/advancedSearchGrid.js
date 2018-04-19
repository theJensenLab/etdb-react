
import React, {Component} from 'react';
import AdvancedSearchRow from './advancedSearchRow'
import AdvancedSearchRowComplex from './advancedSearchRowComplex'


class AdvancedSearchGrid extends Component {
  constructor(props){
    super(props);

    this.state = {
      complexRowCounter: 0
    }

    this.handleAddRowClick = this.handleAddRowClick.bind(this);
    this.handleMinusRowClick = this.handleMinusRowClick.bind(this);
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

  render() {
    let complexRows = [];

    for (var i = 0; i < this.state.complexRowCounter; i++){
      complexRows.push(
        <AdvancedSearchRowComplex
          onAddRowClick={this.handleAddRowClick}
          onMinusRowClick={this.handleMinusRowClick}
        />)
    }

    return (
      <div>
        {/* ---------------- DEFAULT ADVANCED SEARCH ---------------- */}
        <AdvancedSearchRow
          complexRowCounter={this.state.complexRowCounter}
          onAddRowClick={this.handleAddRowClick}
        />
        {/* ---------------- ADDITIONAL SEARCH ROWS TO ADD COMPLEXITY QUERIES ---------------- */}
        {complexRows}
        {/* ---------------- SUBMIT BUTTON ---------------- */}

      </div>

    )
  }
}


export default AdvancedSearchGrid
