
import React, {Component} from 'react';

class AdvancedSearchButton extends Component {
  constructor(props){
    super(props);

    this.handleAdvancedSearchToggle = this.handleAdvancedSearchToggle.bind(this);
  }

  handleAdvancedSearchToggle() {
    this.props.onAdvancedSearchButtonClick();
  }

  render() {
    return (
      <div style={AdvancedSearchContainer} className="advanced-search-container">
        <div className="advanced-search-button">
          <div className="row"><button style={AdvancedSearchToggleButton} onClick={this.handleAdvancedSearchToggle} className="advanced-search-toggle-button">
            Expand for Advanced Search <i className="far fa-plus-square"></i>


          </button></div>
        </div>
      </div>
    )
  }
}

const AdvancedSearchContainer = {
  margin: "5px 0px"
}

const AdvancedSearchToggleButton = {
  margin: "5px 0px",
  color: "black",
  padding: "0px 0px",
  background: 'none',
  border: 'none',
  fontSize: '12px',
}

export default AdvancedSearchButton
