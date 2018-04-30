
import React, {Component} from 'react';

class SelectSearchOnOptions extends Component {
  constructor(props){
    super(props);

    this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this)

  }

  handleAdvancedSearchChange(e) {
    this.props.onHandleAdvancedSearchChange(e)
  }

  render() {
    return (
      <select value={this.props.searchOn} name="searchOn" onChange={this.handleAdvancedSearchChange} className="col-sm-5 as-select">
        <option value="anyField">Any Field</option>
        <option value="microscopist">Microscopist</option>
        <option value="speciesName">Species</option>
        <option value="strain">Strain</option>
        <option value="institution">Institution</option>
        <option value="lab">Lab</option>
        <option value="date">Date</option>
        <option value="scopeName">Scope Name</option>
        <option value="magnification">Magnification</option>
        <option value="defocus">Defocus</option>
        <option value="dosage">Dosage</option>
        <option value="tiltSingleDual">Tilt</option>
        <option value="tiltStep">TiltStep</option>
        <option value="tiltConstant">TiltConstant</option>
        <option value="tiltMin">TiltMin</option>
        <option value="tiltMax">TiltMax</option>
        <option value="sid">Internal ID</option>
        <option value="NBCItaxID">NBCI Taxonomy ID</option>
        <option value="artNotes">Notes</option>
      </select>
    )
  }
}


export default SelectSearchOnOptions
