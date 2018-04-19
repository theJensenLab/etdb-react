
import React, {Component} from 'react';

class AdvancedSearchRowComplex extends Component {
  constructor(props){
    super(props);

    this.state = {
      //true for ADD, false for MINUS
      rowOpt: true
    }

    this.handleAddRowClick = this.handleAddRowClick.bind(this);
    this.handleMinusRowClick = this.handleMinusRowClick.bind(this);

  }

  handleAddRowClick() {
    this.setState(prevState => ({
      rowOpt: !prevState.rowOpt
    }));
    this.props.onAddRowClick()
  }

  handleMinusRowClick() {
    this.props.onMinusRowClick()
  }

  render() {

    const addRowOpt = this.state.rowOpt ? (

      <div className="row">
        <button onClick={this.handleAddRowClick}>+</button>
      </div>
    ) : (
      null
    );

    // const minusRowOpt = this.state.rowOpt ? (null) : (
    //   <div className="col-sm-1">
    //     <button onClick={this.handleMinusRowClick}>-</button>
    //   </div>
    // );


    return (
      <div>
        <div className="row" style={FieldRow2}>
          <div className="col-sm-1">
            <button onClick={this.handleMinusRowClick}>-</button>
          </div>


          <select className="col-sm-5 as-select">
            <option>AND</option>
            <option>OR</option>
            <option>NOT</option>
          </select>

          <select className="col-sm-5 as-select">
            <option>Field</option>
            <option>Species Name</option>
            <option>Strain</option>
            <option>Institution</option>
            <option>Lab</option>
            <option>Art Notes</option>
          </select>


        </div>

        <div className="row" style={FieldRow3}>
          <select className="col-sm-9 as-select">
            <option>contains</option>
            <option>is (exact)</option>
            <option>starts with</option>
          </select>
        </div>

        <div className="row">
          <input style={FieldText} className="input-field1-text" type="text" value=""  />
        </div>
        {addRowOpt}

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


export default AdvancedSearchRowComplex
