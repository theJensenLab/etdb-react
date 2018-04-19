
import React, {Component} from 'react';

class AdvancedSearchRow extends Component {
  constructor(props){
    super(props);

    this.state = {
      //true for ADD, false for MINUS
      rowOpt: true
    }

    this.handleAddRowClick = this.handleAddRowClick.bind(this)

  }

  handleAddRowClick() {
    this.setState(prevState => ({
      rowOpt: !prevState.rowOpt
    }));
    this.props.onAddRowClick()
  }

  render() {
    const counterBool = (this.props.complexCounter === 0);
    const rowOptBool = this.state.rowOpt;

    const addRowOpt = (counterBool) ? (
      <div className="row">
        <button onClick={this.handleAddRowClick}>+</button>
      </div>
    ) : (
      null
    );

    return (
      <div>
        <div className="row" style={FieldRow1}>
          <select className="col-sm-5 as-select">
            <option>Field</option>
            <option>Microscopist</option>
            <option>Species Name</option>
            <option>Strain</option>
            <option>Institution</option>
            <option>Lab</option>
            <option>Art Notes</option>
          </select>
          <select className="col-sm-6 as-select">
            <option>contains</option>
            <option>is (exact)</option>
            <option>starts with</option>
          </select>
        </div>
        <div className="row">
          <input style={FieldText} className="input-field1-text" type="text" value=""   />
        </div>

        {addRowOpt }

      </div>

    )
  }
}

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


export default AdvancedSearchRow
