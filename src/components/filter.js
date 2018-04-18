
import React, {Component} from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
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

  handleSelectChange(e) {
    console.log(e.target.value);
    this.props.onSelectChange(e.target.value);
  }

  render() {

    return (
      <div className="col-sm-2">
        <div id="filters">

        {/* filterText */}
        <b>Search</b>
        <input className="form-control" type="text" value={this.props.filterText} onChange={this.handleFilterTextChange} placeholder="Search for..."/>

        {/* sorts */}
       <b>Sort by</b>
        <select value={this.props.sortValue} onChange={this.handleSelectChange}>
            <option value={null}>Default</option>
            <option value="viewsHtL">Views: High to Low </option>
            <option value="viewsLtH">Views: Low to High</option>
            <option value="specimenAtZ">Specimen: A to Z</option>
            <option value="specimenZtA">Specimen: Z to A</option>
            <option value="userAtZ">User: A to Z</option>
            <option value="userZtA">User: Z to A</option>
            <option value="lastModifiedNtL">Last Modified: Newest to Latest</option>
            <option value="lastModifiedLtN">Last Modified: Newest to Latest</option>
            <option value="dateTakenNtL">Date Taken: Newest to Latest</option>
            <option value="dateTakenLtN">Date Taken: Latest to Newest</option>

          </select>

        {/* filters */}
        <b>Filters</b>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="bacteria" checked={null}/>   Bacteria</p>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="archaea" checked={null}/>   Archaea</p>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="eukaryotes" checked={null}/>   Eukaryotes</p>
      </div></div>
    )
  }
}


export default Filter
