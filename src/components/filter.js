
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
        <div id="filters"></div>

        {/* filterText */}
        <input className="form-control" type="text" value={this.props.filterText} onChange={this.handleFilterTextChange} placeholder="Search for..."/>

        {/* sorts */}
        <div id="reddiv"></div><b>Sort by</b>
        <select value={this.props.sortValue} onChange={this.handleSelectChange}>
            <option value={null}>Default</option>
            <option value="mostViewed">Most Viewed</option>
            <option value="specimen">Specimen</option>
            <option value="user">User</option>
            <option value="lastModified">Last Modified</option>
            <option value="dateTaken">Date Taken</option>
          </select>

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
