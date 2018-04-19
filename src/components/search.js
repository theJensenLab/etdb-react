import React, {Component} from 'react';
import AdvancedSearch from './advancedSearch'
import AdvancedSearchGrid from './advancedSearchGrid'

class Smart extends Component {
  constructor(props){
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleAdvancedSearchToggle = this.handleAdvancedSearchToggle.bind(this);

  }

  handleFilterTextChange(e) {
    var value = e.target.value;
    this.props.onFilterTextChange(value);
  }

  handleAdvancedSearchToggle() {
    this.props.onAdvancedSearchtoggleClick()
  }

  render() {
    const advancedSearchToggleBool = this.props.advancedSearchToggleBool

    const filterTextInput = advancedSearchToggleBool ? (
      <AdvancedSearchGrid />
    ) : (
      <input
        className="form-control"
        type="text"
        onChange={this.handleFilterTextChange}
        placeholder="Search for..."
      />
    );

    return (
    <div>

      {/* advanced search */}
      <AdvancedSearch
        onAdvancedSearchtoggleClick={this.handleAdvancedSearchToggle}
        advancedSearchToggleBool={advancedSearchToggleBool}
      />

      {/* filterText */}
      {filterTextInput}



    </div>
    )
  }
}


export default Smart
