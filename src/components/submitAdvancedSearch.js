import React from 'react';

const SubmitAdvancedSearch = () => {
  return (
    <div>
      <div className="row submit-as-row">
        <input style={SubmitStyle} type="submit" value="Submit"  /> 


      </div>
    </div>
  )
}

const SubmitStyle = {
  background: "#000",
  border: "1px solid #000000",
  color: "#fff",
  fontsize: "15px",
    padding: "5px 30px"
}
const FlexRowSubmit = {
  display: "flex",
  justifyContent: "center"

}

export default SubmitAdvancedSearch





{/* <button style={SubmitStyle}>Search</button> */}
