
import React, {Component} from 'react';

class SelectSearchTypeOptions extends Component {
  constructor(props){
    super(props);

    this.switchTypes = this.switchTypes.bind(this);
    this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);
  }

  handleAdvancedSearchChange(e){
    this.props.onHandleAdvancedSearchChange(e)
  }


  switchTypes(searchOn) {

    const defaultSelectTypeOptions = (
      <select name="searchType" onChange={this.handleAdvancedSearchChange} className="col-sm-12 as-select">
        <option value="contains">contains</option>
        <option value="isExact">is (exact)</option>
        <option value="startsWith">starts with</option>
      </select>

    );

    const alternativeTypeOps = (
      <select name="searchType" onChange={this.handleAdvancedSearchChange} className="col-sm-12 as-select">
        <option value="above">Above</option>
        <option value="below">Below</option>
        <option value="between">Between</option>
        <option value="isExact">is (exact)</option>
      </select>
    )

    switch(searchOn) {
      case "anyField":
        return (
          <select name="searchType" onChange={this.handleAdvancedSearchChange} className="col-sm-12 as-select">
            <option value="contains">contains</option>
          </select>
        );
      case "microscopist":
      case "speciesName":
      case "strain":
      case "institution":
      case "lab":
      case "sid":
      case "NBCItaxID":
      case "artNotes":
        return defaultSelectTypeOptions;
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
        return alternativeTypeOps;
    }
  }

  render() {
    return (

        <div>{this.switchTypes(this.props.params.searchOn)}</div>
    )
  }
}



export default SelectSearchTypeOptions
