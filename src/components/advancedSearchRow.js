
import React, {Component} from 'react';

class AdvancedSearchRow extends Component {
  constructor(props){
    super(props);

    this.handleAddRowClick = this.handleAddRowClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

  }

  handleAddRowClick() {
    this.props.onAddRowClick()
  }
  handleTextChange(e) {
    // console.log(e.target.value);
  }


  render() {
    //TRUE IF THERE ARE 0 COMPLEX ROWS
    const complexRowCounterBool = (this.props.complexRowCounter === 0);

    //SHOW THE ADD BUTTON ONLY IF THERE ARE NO COMPLEX ROWS
    const addComplexRowButton = (complexRowCounterBool) ? (
      <div style={FlexEnd} className="row">
        <button
          onClick={this.handleAddRowClick}
          style={OpButtonStyle}>+</button>
      </div>
    ) : (
      null
    );

    return (
      <div>

        {/* ---------------- ALL FIELDS ----------------*/}
        <div className="row" style={FieldRow1}>
          <select className="col-sm-5 as-select">
            <option>All Fields</option>
            <option>Microscopist</option>
            <option>Species Name</option>
            <option>Strain</option>
            <option>Institution</option>
            <option>Lab</option>
            <option>Art Notes</option>
          </select>

          {/* ---------------- CONTAINS/IS (EXACT)/STARTS WITH ----------------*/}
          <select className="col-sm-6 as-select">
            <option>contains</option>
            <option>is (exact)</option>
            <option>starts with</option>
          </select>
        </div>

        {/* ---------------- TEXT INPUT ----------------*/}
        <div className="row">
          <input style={FieldText} className="input-field1-text" type="text" onChange={this.handleTextChange}  />
        </div>

        {/* BUTTON TO ADD COMPLEX ROW  (WILL ONLY SHOW IF THERE ARE 0 COMPLEX ROWS)*/}
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
  borderBottom: "1px solid white",
  color: "white",
  fontSize: "12px"
}

const OpButtonStyle = {
  border: "none",
  background: "none",
  color: "white",
  display: "flex",
  justifyContent: "flex-end"
}

const FlexEnd = {
  display: "flex",
  justifyContent: "flex-end"
}

export default AdvancedSearchRow
