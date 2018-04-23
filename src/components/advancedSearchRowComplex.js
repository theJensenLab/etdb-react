
import React, {Component} from 'react';

class AdvancedSearchRowComplex extends Component {
  constructor(props){
    super(props);

    this.state = {
      addRowButton: true
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
          <select className="col-sm-9 as-select">
            <option>All Fields</option>
            <option>Species Name</option>
            <option>Strain</option>
            <option>Institution</option>
            <option>Lab</option>
            <option>Art Notes</option>
          </select>
        </div>

        {/* ---------------- CONTAINS/IS (EXACT)/STARTS WITH ----------------*/}
        <div className="row" style={FieldRow3}>
          <select className="col-sm-12 as-select">
            <option>contains</option>
            <option>is (exact)</option>
            <option>starts with</option>
          </select>
        </div>

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
