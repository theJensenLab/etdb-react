
import React, {Component} from 'react';

class SelectTypeOptions extends Component {
  constructor(props){
    super(props);

    this.switchTypes = this.switchTypes.bind(this);
    this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);
  }

  handleAdvancedSearchChange(e){
    this.props.onHandleAdvancedSearchChange(e)
  }

  switchTypes(searchOn) {
    console.log(searchOn);
    switch(searchOn) {
      case "anyField":
        return ( <option value="contains">contains</option> )
      case "microscopist":
      case "speciesName":
      case "strain":
      case "institution":
      case "lab":
      case "date":
      case "scopeName":
      case "magnification":
      case "defocus":
      case "dosage":
      case "tiltSingleDual":
      case "tiltStep":
      case "tiltConstant":
      case "tiltMin":
      case "tiltMax":
      case "sid":
      case "NBCItaxID":
      case "artNotes":

    }
  }

  render() {
    console.log(this.props)
    return (
      <select name="searchType" onChange={this.handleAdvancedSearchChange} className="col-sm-6 as-select">
        {this.switchTypes(this.props.params.searchOn)}
      </select>

    )
  }
}


export default SelectTypeOptions
