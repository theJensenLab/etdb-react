
import React, {Component} from 'react';

class SubmitAdvancedSearch extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <div className="row submit-as-row">
          <input style={SubmitStyle} type="submit" value="Submit" />
        </div>
      </div>
    )
  }
}

const SubmitStyle = {
  background: "none",
  border: "1px solid white",
  color: "white",
  fontSize: "12px"
}
const FlexRowSubmit = {
  display: "flex",
  justifyContent: "center"

}

export default SubmitAdvancedSearch

{/* <button style={SubmitStyle}>Search</button> */}
