import React, {Component} from 'react';
import AdvancedSearchGrid from './advancedSearchGrid'

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      advancedSearchToggleBool: false
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleAdvancedSearchToggle = this.handleAdvancedSearchToggle.bind(this);

  }

  handleFilterTextChange(e) {
    var value = e.target.value;
    this.props.onFilterTextChange(value);
  }


  handleAdvancedSearchToggle() {
    this.setState(prevState => ({
      advancedSearchToggleBool: !prevState.advancedSearchToggleBool
    }))
  }

  render() {
    const advancedSearchToggleBool = this.state.advancedSearchToggleBool;

    // IF ADVANCED SEARCH IS NOT TOGGLED, NORMAL TEXT FILTER IS RENDERED; ELSE, THE ADVANCED SEARCH GRID IS RENDERED
    const searchGrid = advancedSearchToggleBool ? (
      <AdvancedSearchGrid />
    ) : (
      <input
        className="form-control"
        type="text"
        onChange={this.handleFilterTextChange}
        placeholder="Search for..."
      />
    );

    return (
    <div>

      {/* ---------------- ADVANCED SEARCH BUTTON (THIS TOGGLES THE SEARCH GRID) ---------------- */}
      <div style={AdvancedSearchContainer} className="advanced-search-container">
        <div className="advanced-search-button">
          <div className="row"><button style={AdvancedSearchToggleButton} onClick={this.handleAdvancedSearchToggle} className="advanced-search-toggle-button">
            Expand for Advanced Search <i className="far fa-plus-square"></i>


          </button></div>
        </div>
      </div>

      {/* ---------------- SEARCH FILTER || GRID (SEE COMMENT FOR searchGrid ^) ---------------- */}
      {searchGrid}

    </div>
    )
  }
}

/* ---------------- REACT INLINE STYLES (FEEL FREE TO DELETE/CHANGE) ---------------- */
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

export default Search
