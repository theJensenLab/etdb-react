
import React, {Component} from 'react';
import uid from 'uid';
import SelectTypeOptions from './selectTypeOptions';

class AdvancedSearchRow extends Component {
constructor(props){
  super(props);



  this.state = {
    searchParams: {
      type: 'simple',
      searchOn: 'anyField',
      searchType: 'contains',
      searchFor: "",
      uid: uid()
    },
    size: 1
  }

  this.handleAddRowClick = this.handleAddRowClick.bind(this);
  this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);
  this.pushStateUp = this.pushStateUp.bind(this);


}

//can get rid of this if we don't mind having no results on initial advanced search click
componentDidMount() {
  this.pushStateUp()
}

handleAddRowClick(e) {
  e.preventDefault();
  this.props.onAddRowClick()

}

handleAdvancedSearchChange(e){
  e.preventDefault();
  let name = e.target.name;
  let value = e.target.value;
  this.setState(prevState => ({
    searchParams: {
        ...prevState.searchParams,
        [name]: value
    }
  }),
  this.pushStateUp
)
}

pushStateUp() {
  this.props.onAdvancedSearchChange(this.state.searchParams);
}


render() {
  const complexRowBool = (this.props.complexRowArray === 0);

  const addComplexRowButton = (complexRowBool) ? (
    <div className="row">
      <button
        onClick={this.handleAddRowClick}>Add parameter +</button>
      </div>
    ) : (
      null
    );

    return (
      <div>
        {/* ---------------- ALL FIELDS ----------------*/}
        <div className="row">
          <select name="searchOn" onChange={this.handleAdvancedSearchChange} className="col-sm-5 as-select">
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
        </div>

        <SelectTypeOptions
          onHandleAdvancedSearchChange={this.handleAdvancedSearchChange}
          params={this.state.searchParams}
        />

        <div className="row">
          <input name="searchFor" className="input-field1-text" type="text" onBlur={this.handleAdvancedSearchChange}  />
        </div>

        {addComplexRowButton}

      </div>

    )
  }
}


export default AdvancedSearchRow
