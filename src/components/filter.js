
import React, {Component} from 'react';
import SortValueButton from './SortValueButton';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSortButtonChange = this.handleSortButtonChange.bind(this);
    this.handleFlipSortChange = this.handleFlipSortChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleCheckboxChange(e) {
    const name = e.target.name;
    const checked = e.target.checked;
    console.log(name, checked);
    this.props.onCheckboxChange(name, checked);
  }


  handleSortButtonChange(value) {
    this.props.onSortButtonChange(value);
  }

  handleFlipSortChange() {
    this.props.onFlipSortChange();
  }

  render() {
    const sortValue = this.props.sortValue;

    //SORT_CONSTANTS
    const VIEWS = "views";
    const SPECIMEN = "specimen";
    const USER = "user";
    const LAST_MODIFIED = "lastModified";
    const DATE_TAKEN = "dateTaken";

    return (
      <div className="col-sm-2">
        <div id="filter flipSort={this.props.flipSort} s"></div>

        {/* filterText */}
        <input className="form-control" type="text" value={this.props.filterText} onChange={this.handleFilterTextChange} placeholder="Search for..."/>


        {/* sorts */}
        <div id="reddiv"></div><b>Sort by</b>

        <div className="sortButton">
          <SortValueButton buttonValue="Views" name={VIEWS} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange} onFlipSortChange={this.handleFlipSortChange} flipSort={this.props.flipSort} />
          <SortValueButton buttonValue="Specimen" name={SPECIMEN} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange} onFlipSortChange={this.handleFlipSortChange} flipSort={this.props.flipSort} />
          <SortValueButton buttonValue="User" name={USER} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange} onFlipSortChange={this.handleFlipSortChange} flipSort={this.props.flipSort} />
          <SortValueButton buttonValue="Last Modifed" name={LAST_MODIFIED} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange} onFlipSortChange={this.handleFlipSortChange} flipSort={this.props.flipSort} />
          <SortValueButton buttonValue="Date Taken" name={DATE_TAKEN} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange} onFlipSortChange={this.handleFlipSortChange} flipSort={this.props.flipSort} />
        </div>

        {/* filters */}
        <div id="reddiv"></div><b>Filters</b>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="bacteria" checked={null}/>   Bacteria</p>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="archaea" checked={null}/>   Archaea</p>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="eukaryotes" checked={null}/>   Eukaryotes</p>
      </div>
    )
  }
}


export default Filter
