
import React, {Component} from 'react';

class AdvancedSearchRow extends Component {
constructor(props){
  super(props);

  this.state = {
    value: ""
  }

  this.handleAddRowClick = this.handleAddRowClick.bind(this);
  this.handleTextChange = this.handleTextChange.bind(this);
  this.handleFieldChange = this.handleFieldChange.bind(this)

}

handleAddRowClick() {
  this.props.onAddRowClick()
}
handleTextChange(e) {
  // console.log(e.target.value);
}

handleFieldChange(e) {
  this.setState({value: e.target.value});
  console.log(e.target.value);
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

    return (
      <div>

        {/* ---------------- ALL FIELDS ----------------*/}
        <div className="row" style={FieldRow1}>
          <select value={this.state.value} name="fields" form="advanced-search" onChange={this.handleFieldChange} className="col-sm-5 as-select">
            <option value="allFields" name="allFields">All Fields</option>
            <option value="microscopist" name="microscopist">Microscopist</option>
            <option value="species">Species</option>
            <option value="strain">Strain</option>
            <option value="institution">Institution</option>
            <option value="lab">Lab</option>
            <option value="notes">Notes</option>
          </select>

          {/* ---------------- CONTAINS/IS (EXACT)/STARTS WITH ----------------*/}
          <select name="operators" form="advanced-search" onChange={this.handleFieldChange} className="col-sm-6 as-select">
            <option value="contains">contains</option>
            <option value="isExact">is (exact)</option>
            <option value="startsWith">starts with</option>
          </select>
        </div>

        {/* ---------------- TEXT INPUT ----------------*/}
        <div className="row">
          <input style={FieldText} className="input-field1-text" type="text" onChange={this.handleTextChange}  />
        </div>

        {addComplexRowButton}

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
