import React, {Component} from 'react';
import AdvancedSearchGrid from './advancedSearchGrid'
import AdvancedSearchButton from './advancedSearchButton'
import SubmitAdvancedSearch from './submitAdvancedSearch'

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      advancedSearchToggleBool: false
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleAdvanceSearchSubmit = this.handleAdvanceSearchSubmit.bind(this);
    this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);
    this.handleToggleAdvancedSearch = this.handleToggleAdvancedSearch.bind(this);
    this.toggleAdvancedSearch = this.toggleAdvancedSearch.bind(this);
    this.deleteRowParamsFromState = this.deleteRowParamsFromState.bind(this);

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

  handleAdvancedSearchChange(searchParams){
    this.props.onAdvancedSearchChange(searchParams);
  }

  deleteRowParamsFromState(uid) {
    this.props.onDeleteRowParamsFromState(uid);
  }


  render() {
    const advancedSearchToggleBool = this.state.advancedSearchToggleBool;

    // IF ADVANCED SEARCH IS NOT TOGGLED, NORMAL TEXT FILTER IS RENDERED; ELSE, THE ADVANCED SEARCH GRID IS RENDERED
    const searchGrid = advancedSearchToggleBool ? (
      <AdvancedSearchGrid
        onSubmit={this.handleAdvanceSearchSubmit}
        onFilterTextChange={this.handleFilterTextChange}
        onAdvancedSearchChange={this.handleAdvancedSearchChange}
        onDeleteRowParamsFromState={this.deleteRowParamsFromState}

       />
    ) : (
      <input
        className="form-control"
        type="text"
        onBlur={this.handleFilterTextChange}
        value={this.props.filterText}
        placeholder="Search for..."
      />
    );

    return (
      <div>
        <AdvancedSearchButton onToggleAdvancedSearch={this.handleToggleAdvancedSearch} />
        {searchGrid}
        {advancedSearchToggleBool ? "" : <SubmitAdvancedSearch />}
      </div>
    )
  }
}


export default Search
