
import React, {Component} from 'react';
import AdvancedSearchRow from './advancedSearchRow'
import AdvancedSearchRowComplex from './advancedSearchRowComplex'


class AdvancedSearchGrid extends Component {
  constructor(props){
    super(props);

    this.state = {
      complexCount: 0
    }

    this.handleAddRowClick = this.handleAddRowClick.bind(this);
    this.handleMinusRowClick = this.handleMinusRowClick.bind(this);
  }

  handleAddRowClick() {
    this.setState({
      complexCount: this.state.complexCount + 1
    })
  }

  handleMinusRowClick() {
    this.setState({
      complexCount: this.state.complexCount - 1
    })
  }

  render() {
    let complexRows = [];

    for (var i = 0; i < this.state.complexCount; i++){
      complexRows.push(
        <AdvancedSearchRowComplex
          onAddRowClick={this.handleAddRowClick}
          onMinusRowClick={this.handleMinusRowClick}
        />)
    }

    return (
      <div>

        <AdvancedSearchRow
          complexCounter={this.state.complexCount}
          onAddRowClick={this.handleAddRowClick}
        />
        {complexRows}



      </div>

    )
  }
}


export default AdvancedSearchGrid
