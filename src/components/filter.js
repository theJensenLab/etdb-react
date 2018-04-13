
import React, {Component} from 'react';

class Filter extends Component {

  render() {
    const filterText = this.props.filterText;
    const filterDate = this.props.filterDate;

    return (
      <div className="col-sm-2">
        <div id="filters"></div>
        <input className="form-control" type="text" value={filterText} placeholder="Search for..."/>

        <div id="reddiv"></div><b>Sort by</b>
        <p><input type="checkbox" checked={null}/>   Most Viewed </p>
        <p><input type="checkbox" checked={null}/>   Specimen </p>
        <p><input type="checkbox" checked={null}/>   User</p>
        <p><input type="checkbox" checked={null}/>   Last Modified</p>
        <p><input type="checkbox" checked={filterDate}/>   Date Taken</p>


        <div id="reddiv"></div><b>Filters</b>
        <p><input type="checkbox" checked={null}/>   Bacteria</p>
        <p><input type="checkbox" checked={null}/>   Archaea</p>
        <p><input type="checkbox" checked={null}/>   Eukaryotes</p>
      </div>
    )
  }
}


export default Filter
