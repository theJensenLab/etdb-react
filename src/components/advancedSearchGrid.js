
import React, { Component } from 'react';
import AdvancedSearchRow from './advancedSearchRow'
import AdvancedSearchRowComplex from './advancedSearchRowComplex'
import SubmitAdvancedSearch from './submitAdvancedSearch'
import uid from 'uid';

class AdvancedSearchGrid extends Component {
  constructor(props){
    super(props);

    this.state = {
      complexRows: []
    }

    this.handleAddRowClick = this.handleAddRowClick.bind(this);
    this.handleMinusRowClick = this.handleMinusRowClick.bind(this);
    this.handleAdvanceSearchSubmit = this.handleAdvanceSearchSubmit.bind(this);
    this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);
  }

  handleAddRowClick() {
    let newComplexRow = [...this.state.complexRows];
    newComplexRow.push( { uid: uid() } );
    this.setState({complexRows: newComplexRow})
  }

  handleMinusRowClick(uuid) {
    let newRow = [...this.state.complexRows];

    for (var i = 0; i < newRow.length; i++){
      if (newRow[i].uid === uuid){
        newRow.splice(i, 1)
      }
    }

    this.setState({complexRows: newRow})
  }

  handleAdvanceSearchSubmit(e){
    this.props.onSubmit(e);
  }

  handleAdvancedSearchChange(searchParams, uuid){
    let stateArray = [...this.state.complexRows];

    for (var i = 0; i < stateArray.length; i++){
      if (stateArray[i].uid === uuid) {
        stateArray[i] = searchParams;
      }
    }
    this.setState({complexRows: stateArray})
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

          {this.state.complexRows.map((componentState, i) => {
            return <AdvancedSearchRowComplex
                    onAddRowClick={this.handleAddRowClick}
                    onMinusRowClick={this.handleMinusRowClick}
                    onAdvancedSearchChange={this.handleAdvancedSearchChange}
                    uid={componentState.uid}
                    componentState={componentState}
                  />
          })}
          <SubmitAdvancedSearch />
        </form>

      </div>

    )
  }
}


export default AdvancedSearchGrid
