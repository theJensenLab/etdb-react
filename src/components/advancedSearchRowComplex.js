
import React, {Component} from 'react';
import uid from 'uid';

class AdvancedSearchRowComplex extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchParams: {
        searchOp: 'and',
        searchOn: 'anyField',
        searchType: 'contains',
        searchFor: "",
        uid: uid()
      }
    }

    this.handleAddRowClick = this.handleAddRowClick.bind(this);
    this.handleMinusRowClick = this.handleMinusRowClick.bind(this);
    this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);
    this.pushStateUp = this.pushStateUp.bind(this);

  }

  componentDidMount() {
    this.pushStateUp()
  }

  handleAddRowClick() {
    this.props.onAddRowClick()
  }

  handleMinusRowClick() {
    this.props.onMinusRowClick(this.props.indexOfComplexRow)
  }

  handleAdvancedSearchChange(e){
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

  const searchTypes = (this.state.searchParams.searchOn === "anyField") ? (
    <div className="row" style={FieldRow3}>
      <select name="searchType" form="advanced-search" onChange={this.handleAdvancedSearchChange} className="col-sm-12 as-select">
        <option value="contains">contains</option>
      </select>
    </div>
  ) : (
    <div className="row" style={FieldRow3}>
      <select name="searchType" form="advanced-search" onChange={this.handleAdvancedSearchChange} className="col-sm-12 as-select">
        <option value="contains">contains</option>
        <option value="isExact">is (exact)</option>
        <option value="startsWith">starts with</option>
      </select>
    </div>
  )


  return (
    <div>

      <div className="row" style={FieldRow2}>


        {/* ---------------- AND/OR/NOT ----------------*/}
        <select name="searchOp" className="col-sm-3 as-select" onChange={this.handleAdvancedSearchChange}>
          <option value="and">AND</option>
          <option value="or">OR</option>
          <option value="not">NOT</option>
        </select>

        {/* ---------------- ALL FIELDS ----------------*/}
        <select name="searchOn" form="advanced-search" onChange={this.handleAdvancedSearchChange} className="col-sm-9 as-select">
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
        <input style={FieldText} className="input-field1-text" type="text" name="searchFor" onBlur={this.handleAdvancedSearchChange}  />
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
