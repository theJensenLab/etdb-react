
import React, {Component} from 'react';
import AdvancedSearchGrid from './advancedSearchGrid';

class AdvancedSearch extends Component {
  constructor(props){
    super(props);

    this.handleAdvancedSearchToggle = this.handleAdvancedSearchToggle.bind(this);

  }

  handleAdvancedSearchToggle() {
    this.props.onAdvancedSearchtoggleClick()
  }

  render() {
    const toggleState = this.props.advancedSearchToggle;
    const advancedSearchGrid = toggleState ? (
      <AdvancedSearchGrid />
    ) : (null);

    return (
      <div style={AdvancedSearchContainer} className="advanced-search-container">
        <div className="advanced-search-button">

          <div className="row"><button style={AdvancedSearchToggleButton} onClick={this.handleAdvancedSearchToggle} className="advanced-search-toggle-button">
            Advanced Search
          </button></div>

        </div>
        <div className="advanced-search-grid">
          {advancedSearchGrid}
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
  color: "white",
  float: "right",
  background: 'none',
  border: 'none',
  fontSize: '10px',
  fontFamily: 'Helvetica-light'
}




export default AdvancedSearch
