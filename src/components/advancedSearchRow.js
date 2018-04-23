
import React, {Component} from 'react';

class AdvancedSearchRow extends Component {
constructor(props){
  super(props);

  this.state = {
    simpleSearchParams: {
      searchOn: 'anyField',
      searchType: 'contains',
      searchFor: ""
    }
  }

  this.handleAddRowClick = this.handleAddRowClick.bind(this);
  this.handleSimpleSearchChange = this.handleSimpleSearchChange.bind(this);
  this.pushStateUp = this.pushStateUp.bind(this);


}

componentDidMount() {
  this.pushStateUp()
}

handleAddRowClick() {
  this.props.onAddRowClick()
}

handleSimpleSearchChange(e){
  let name = e.target.name;
  let value = e.target.value;
  this.setState(prevState => ({
    simpleSearchParams: {
        ...prevState.simpleSearchParams,
        [name]: value
    }
  }),
  this.pushStateUp
)
}

pushStateUp() {
  this.props.onSimpleSearchChange(this.state.simpleSearchParams);
}



render() {
  const complexRowCounterBool = (this.props.complexRowCounter === 0);

  const addComplexRowButton = (complexRowCounterBool) ? (
    <div style={FlexEnd} className="row">
      <button
        onClick={this.handleAddRowClick}
        style={OpButtonStyle}>Add parameter +</button>
      </div>
    ) : (
      null
    );

    const searchTypes = (this.state.simpleSearchParams.searchOn === "anyField") ? (
      <select name="searchType" form="advanced-search" onChange={this.handleSimpleSearchChange} className="col-sm-6 as-select">
        <option value="contains">contains</option>
      </select>
    ) : (
      <select name="searchType" form="advanced-search" onChange={this.handleSimpleSearchChange} className="col-sm-6 as-select">
        <option value="contains">contains</option>
        <option value="isExact">is (exact)</option>
        <option value="startsWith">starts with</option>
      </select>
    )



    return (
      <div>

        {/* ---------------- ALL FIELDS ----------------*/}
        <div className="row" style={FieldRow1}>
          <select name="searchOn" form="advanced-search" onChange={this.handleSimpleSearchChange} className="col-sm-5 as-select">
            <option value="anyField">Any Field</option>
            <option value="microscopist">Microscopist</option>
            <option value="speciesName">Species</option>
            <option value="strain">Strain</option>
            <option value="institution">Institution</option>
            <option value="lab">Lab</option>
            <option value="artNotes">Notes</option>
          </select>

          {/* ---------------- CONTAINS/IS (EXACT)/STARTS WITH ----------------*/}
          {searchTypes}
        </div>

        {/* ---------------- TEXT INPUT ----------------*/}
        <div className="row">
          <input name="searchFor" style={FieldText} className="input-field1-text" type="text" onBlur={this.handleSimpleSearchChange}  />
        </div>

        {/* {addComplexRowButton} */}

      </div>

    )
  }
}

/* ---------------- REACT INLINE STYLES (FEEL FREE TO DELETE/CHANGE) ---------------- */
const FieldRow1 = {
  marginTop: "5px",
  display: "flex",
  justifyContent: "flex-start"
}

const FieldText = {
  width: "100%",
  marginTop: "9px",
  background: "none",
  border: "none",
  borderBottom: "1px solid black",
  color: "black",
  fontSize: "12px"
}

const OpButtonStyle = {
  border: "none",
  background: "none",
  color: "black",
  display: "flex",
  justifyContent: "flex-end",
  fontSize: "12px"
}

const FlexEnd = {
  display: "flex",
  justifyContent: "flex-end"
}

export default AdvancedSearchRow
