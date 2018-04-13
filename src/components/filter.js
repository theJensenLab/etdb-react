
import React, {Component} from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleCheckboxChange(e) {

    const name = e.target.name;
    const checked = e.target.checked;
    // console.log(name, checked);
    this.props.onCheckboxChange(name, checked);
  }

  render() {

    return (
      <div className="col-sm-2">
        <div id="filters"></div>
        <input className="form-control" type="text" value={this.props.filterText} onChange={this.handleFilterTextChange} placeholder="Search for..."/>

        <div id="reddiv"></div><b>Sort by</b>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="mostViewed" checked={null}/>   Most Viewed </p>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="specimen" checked={null}/>   Specimen </p>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="user" checked={null}/>   User</p>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="lastModified" checked={null}/>   Last Modified</p>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="dateTaken" checked={null}/>   Date Taken</p>


        <div id="reddiv"></div><b>Filters</b>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="bacteria" checked={null}/>   Bacteria</p>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="archaea" checked={null}/>   Archaea</p>
        <p><input type="checkbox" onChange={this.handleCheckboxChange} name="eukaryotes" checked={null}/>   Eukaryotes</p>
      </div>
    )
  }
}


export default Filter
