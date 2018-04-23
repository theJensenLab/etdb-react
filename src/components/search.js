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
    this.handleAdvanceSearchSubmit = this.handleAdvanceSearchSubmit.bind(this);
    this.handleSimpleSearchChange = this.handleSimpleSearchChange.bind(this);
    this.handleToggleAdvancedSearch = this.handleToggleAdvancedSearch.bind(this);
    this.toggleAdvancedSearch = this.toggleAdvancedSearch.bind(this);

  }

  handleFilterTextChange(e) {
    var value = e.target.value;
    this.props.onFilterTextChange(value);
  }


  handleToggleAdvancedSearch() {
    this.setState(prevState => ({
      advancedSearchToggleBool: !prevState.advancedSearchToggleBool
    }),
    this.toggleAdvancedSearch
  )
  }

  toggleAdvancedSearch() {
    this.props.onToggleAdvancedSearch(this.state.advancedSearchToggleBool)
  }

  handleAdvanceSearchSubmit(e) {
    console.log(e);
    e.preventDefault();
  }

  handleSimpleSearchChange(simpleSearchParams){
    this.props.onSimpleSearchChange(simpleSearchParams);
  }


  render() {
    const advancedSearchToggleBool = this.state.advancedSearchToggleBool;

    // IF ADVANCED SEARCH IS NOT TOGGLED, NORMAL TEXT FILTER IS RENDERED; ELSE, THE ADVANCED SEARCH GRID IS RENDERED
    const searchGrid = advancedSearchToggleBool ? (
      <AdvancedSearchGrid
        onSubmit={this.handleAdvanceSearchSubmit}
        onFilterTextChange={this.handleFilterTextChange}
        onSimpleSearchChange={this.handleSimpleSearchChange}

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
        <AdvancedSearchButton onToggleAdvancedSearch={this.handleToggleAdvancedSearch} />
        {searchGrid}
      </div>
    )
  }
}


export default Search
