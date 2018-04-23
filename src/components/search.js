import React, {Component} from 'react';
import AdvancedSearchGrid from './advancedSearchGrid'
import AdvancedSearchButton from './advancedSearchButton'

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      advancedSearchToggleBool: false
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleAdvancedSearchToggle = this.handleAdvancedSearchToggle.bind(this);
    this.handleAdvanceSearchSubmit = this.handleAdvanceSearchSubmit.bind(this);
    this.handleSearchOnChange = this.handleSearchOnChange.bind(this);
    this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
    this.handleSearchForChange = this.handleSearchForChange.bind(this);
  }

  handleFilterTextChange(e) {
    var value = e.target.value;
    this.props.onFilterTextChange(value);
  }


  handleAdvancedSearchToggle() {
    this.setState(prevState => ({
      advancedSearchToggleBool: !prevState.advancedSearchToggleBool
    }))
  }

  handleAdvanceSearchSubmit(e) {
    console.log(e);
    e.preventDefault();
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
    const advancedSearchToggleBool = this.state.advancedSearchToggleBool;

    // IF ADVANCED SEARCH IS NOT TOGGLED, NORMAL TEXT FILTER IS RENDERED; ELSE, THE ADVANCED SEARCH GRID IS RENDERED
    const searchGrid = advancedSearchToggleBool ? (
      <AdvancedSearchGrid
        onSubmit={this.handleAdvanceSearchSubmit}
        onFilterTextChange={this.handleFilterTextChange}
        onSearchOnChange={this.handleSearchOnChange}
        onSearchTypeChange={this.handleSearchTypeChange}
        onSearchForChange={this.handleSearchForChange}
       />
    ) : (
      <input
        className="form-control"
        type="text"
        onChange={this.handleFilterTextChange}
        value={this.props.filterText}
        placeholder="Search for..."
      />
    );

    return (
      <div>
        <AdvancedSearchButton onAdvancedSearchButtonClick={this.handleAdvancedSearchToggle} />
        {searchGrid}
      </div>
    )
  }
}


export default Search
