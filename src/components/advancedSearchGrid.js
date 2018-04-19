
import React, {Component} from 'react';

class AdvancedSearchGrid extends Component {
  constructor(props){
    super(props);


  }

  render() {
    return (
      <div>

        <div className="row" style={FieldRow1}>
          <select className="col-sm-5 as-select">
            <option>Field</option>
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

        <div className="row" style={FieldRow2}>
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





export default AdvancedSearchGrid
