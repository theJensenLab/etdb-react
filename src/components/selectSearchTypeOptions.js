
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

    const anyFieldOptions = (
      <select value={this.props.params.searchType} name="searchType" onChange={this.handleAdvancedSearchChange} className="col-sm-12 as-select">
        <option value="contains">contains</option>
      </select>
    )

    const defaultSelectTypeOptions = (
      <select value={this.props.params.searchType} name="searchType" onChange={this.handleAdvancedSearchChange} className="col-sm-12 as-select">
        <option value="contains">contains</option>
        <option value="isExact">is (exact)</option>
        <option value="startsWith">starts with</option>
      </select>

    );

    const alternativeTypeOptions = (
      <select value={this.props.params.searchType} name="searchType" onChange={this.handleAdvancedSearchChange} className="col-sm-12 as-select">
        <option value="contains">contains</option>
        <option value="isExact">is (exact)</option>
        <option value="startsWith">starts with</option>
        <option value="above">Above</option>
        <option value="below">Below</option>
        <option value="between">Between</option>
      </select>
    )

    const dateTypeOptions = (
      <select value={this.props.params.searchType} name="searchType" onChange={this.handleAdvancedSearchChange} className="col-sm-12 as-select">
        <option disabled selected value="">Select option...</option>
        <option value="isExact">is (exact)</option>
        <option value="below">Before</option>
        <option value="above">After</option>
        <option value="between">Between</option>
      </select>
    )

    const tiltTypeOptions = (
      <select name="searchType" onChange={this.handleAdvancedSearchChange} className="col-sm-12 as-select">
        <option disabled selected value="">Select option...</option>
        <option value="1">1</option>
        <option calue="2">2</option>
      </select>
    )

    switch(searchOn) {
      case "anyField":
        return anyFieldOptions;
      case "tiltSingleDual":
        return tiltTypeOptions;
      case "date":
        return dateTypeOptions;
      case "microscopist":
      case "speciesName":
      case "strain":
      case "institution":
      case "lab":
      case "sid":
      case "NBCItaxID":
      case "artNotes":
        return defaultSelectTypeOptions;
      case "scopeName":
      case "magnification":
      case "defocus":
      case "dosage":
      case "tiltStep":
      case "tiltConstant":
      case "tiltMin":
      case "tiltMax":
        return alternativeTypeOptions;
    }
  }

  render() {
    return <div>{this.switchTypes(this.props.params.searchOn)}</div>

  }
}

export default SelectSearchTypeOptions
