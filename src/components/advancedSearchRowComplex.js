
import React, {Component} from 'react';

class AdvancedSearchRowComplex extends Component {
  constructor(props){
    super(props);

    this.state = {
      addRowButton: true,
      complexSearchParams: {
        searchOn: 'anyField',
        searchType: 'contains',
        searchFor: ""
      }
    }

    this.handleAddRowClick = this.handleAddRowClick.bind(this);
    this.handleMinusRowClick = this.handleMinusRowClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

  }

  handleAddRowClick() {
    // this.setState(prevState => ({
    //   addRowButton: !prevState.addRowButton
    // }));
    this.props.onAddRowClick()
  }

  handleMinusRowClick() {
    this.props.onMinusRowClick()
  }

  handleTextChange(e) {
    // console.log(e.target.value)
  }

  render() {

    const searchTypes = (this.state.complexSearchParams.searchOn === "anyField") ? (
      <select name="searchType" form="advanced-search" onChange={this.handleSimpleSearchChange} style={FieldRow3} className="col-sm-6 as-select">
        <option value="contains">contains</option>
      </select>
    ) : (
      <select name="searchType" form="advanced-search" onChange={this.handleSimpleSearchChange} style={FieldRow3} className="col-sm-6 as-select">
        <option value="contains">contains</option>
        <option value="isExact">is (exact)</option>
        <option value="startsWith">starts with</option>
      </select>
    )

    return (
      <div>

        {/* ---------------- BUTTON TO DELETE A COMPLEX ROW ----------------*/}
        <div className="row" style={FieldRow2}>


          {/* ---------------- AND/OR/NOT ----------------*/}
          <select className="col-sm-3 as-select">
            <option>AND</option>
            <option>OR</option>
            <option>NOT</option>
          </select>

          {/* ---------------- ALL FIELDS ----------------*/}
          <select name="searchOn" form="advanced-search" onChange={this.handleComplexSearchChange} className="col-sm-9 as-select">
            <option value="anyField">Any Field</option>
            <option value="microscopist">Microscopist</option>
            <option value="speciesName">Species</option>
            <option value="strain">Strain</option>
            <option value="institution">Institution</option>
            <option value="lab">Lab</option>
            <option value="artNotes">Notes</option>
          </select>
        </div>

        {/* ---------------- CONTAINS/IS (EXACT)/STARTS WITH ----------------*/}
        {searchTypes}

        {/* ---------------- TEXT INPUT ----------------*/}
        <div className="row">
          <input style={FieldText} className="input-field1-text" type="text" onChange={this.handleTextChange}  />
        </div>

        {/* BUTTON TO ADD ADDITIONAL COMPLEX ROW */}
        <div className="row">
          <button className="remove"
                onClick={this.handleMinusRowClick}
                style={OpButtonStyle}>- Remove row </button>

          <button className="addparameter" onClick={this.handleAddRowClick}
            style={OpButtonStyle}>Add parameter +</button>
         </div>

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

  const FieldRow2 = {
    marginTop: "30px",
    display: "flex",
    justifyContent: "flex-start"
  }

  const FieldRow3 = {
    marginTop: "10px",
    display: "flex",
    justifyContent: "flex-start"
  }

  const OpButtonStyle = {
    border: "none",
    background: "none",
    color: "black",
    fontSize: "12px"

  }

  const FlexEnd = {
    display: "flex",
    justifyContent: "flex-end"
  }

export default AdvancedSearchRowComplex
