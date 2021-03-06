
import React, {Component} from 'react';
import SortValueButton from './sortValueButton';
import Search from './search';


class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSortButtonChange = this.handleSortButtonChange.bind(this);
    this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);
    this.handleToggleAdvancedSearch = this.handleToggleAdvancedSearch.bind(this);
    this.deleteRowParamsFromState = this.deleteRowParamsFromState.bind(this);

  }

  handleFilterTextChange(value) {
    this.props.onFilterTextChange(value);
  }

  handleCheckboxChange(e) {
    const name = e.target.name;
    const checked = e.target.checked;
    console.log(name, checked);
    this.props.onCheckboxChange(name, checked);
  }


  handleSortButtonChange(name, sortStatus) {
    this.props.onSortButtonChange(name, sortStatus);
  }

  handleAdvancedSearchChange(searchParams){
    this.props.onAdvancedSearchChange(searchParams);
  }

  handleToggleAdvancedSearch(advancedSearchToggleBool) {
    this.props.onToggleAdvancedSearch(advancedSearchToggleBool)
  }

  deleteRowParamsFromState(uid) {
    this.props.onDeleteRowParamsFromState(uid);
  }

  render() {
    const sortValue = this.props.sortValue;

    //SORT_CONSTANTS if changed, change in searchResultGrid too
    const VIEWS = "views";
    const TITLE = "title";
    const SPECIMEN = "specimen";
    const MICROSCOPIST = "microscopist";
    const LAST_MODIFIED = "lastModified";
    const DATE_TAKEN = "dateTaken";

    return (
      <div className="col-sm-2">
        <div id="filters">

        {/* ---------------- SEARCH (EVERYTHING ABOVE SORT BUTTONS) ---------------- */}
        <h5><i className="fas fa-search"></i> Search</h5>
        <div id="smline"></div>
         <Search
          onFilterTextChange={this.handleFilterTextChange}
          filterText={this.props.filterText}
          onAdvancedSearchChange={this.handleAdvancedSearchChange}
          onToggleAdvancedSearch={this.handleToggleAdvancedSearch}
          onDeleteRowParamsFromState={this.deleteRowParamsFromState}
        />

        {/* ---------------- SORT BUTTONS ---------------- */}
       <div id="sortbuttons"> <h5><i className="fas fa-sort"></i> Sort by</h5>
       <div id="smline"></div>
        <div className="sortButton">
          {/* <SortValueButton buttonValue="Views" name={VIEWS} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange} onFlipSortChange={this.handleFlipSortChange} flipSort={this.props.flipSort} /> */}
          <SortValueButton buttonValue="Specimen" name={SPECIMEN} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange} />
          <SortValueButton buttonValue="Microscopist" name={MICROSCOPIST} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange} />
          <SortValueButton buttonValue="Last Modifed" name={LAST_MODIFIED} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange} />
          <SortValueButton buttonValue="Date Taken" name={DATE_TAKEN} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange} />
        </div>
        </div>

        {/* ---------------- FILTER CHECKBOXES ---------------- */}
        {/* <b>Filters</b>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="bacteria" checked={null}/>   Bacteria</p>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="archaea" checked={null}/>   Archaea</p>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="eukaryotes" checked={null}/>   Eukaryotes</p> */}
      </div>
    </div>
    )
  }
}



export default Filter
