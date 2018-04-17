
import React, {Component} from 'react';
import SortValueButton from './SortValueButton';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSortButtonChange = this.handleSortButtonChange.bind(this);
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

  render() {
    const sortValue = this.props.sortValue;

    //SORT_CONSTANTS
    const VIEWS_HTL = "viewsHtL";
    const VIEWS_LTH = "viewsLtH";

    const SPECIMEN_ATZ = "specimenAtZ";
    const SPECIMEN_ZTA = "specimenZtA";

    const USER_ATZ = "userAtZ";
    const USER_ZTA = "userZtA";

    const LAST_MODIFIED_NTL = "lastModifiedNtL";
    const LAST_MODIFIED_LTN = "lastModifiedLtN";

    const DATE_TAKEN_NTL = "dateTakenNtL";
    const DATE_TAKEN_LTN = "dateTakenLtN";

    return (
      <div className="col-sm-2">
        <div id="filters"></div>

        {/* filterText */}
        <input className="form-control" type="text" value={this.props.filterText} onChange={this.handleFilterTextChange} placeholder="Search for..."/>


        {/* sorts */}
        <div id="reddiv"></div><b>Sort by</b>

        <div className="sort-buttons">
          <SortValueButton buttonValue="Views" name={VIEWS_HTL} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange}/>
          <SortValueButton buttonValue="Specimen" name={SPECIMEN_ATZ} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange}/>
          <SortValueButton buttonValue="User" name={USER_ATZ} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange}/>
          <SortValueButton buttonValue="Last Modifed" name={LAST_MODIFIED_NTL} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange}/>
          <SortValueButton buttonValue="Date Taken" name={DATE_TAKEN_NTL} sortValue={this.props.sortValue} onSortButtonChange={this.handleSortButtonChange}/>

          {/* <div className="row"><button name="lastModifiedNtL" className="sortButton" onClick={this.handleSortButtonChange}>Last Modifed</button></div> */}
          {/* <div className="row"><button name="dateTakenNtL" className="sortButton" onClick={this.handleSortButtonChange}>Date Taken</button></div> */}
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
