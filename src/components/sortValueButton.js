
import React, {Component} from 'react';
import FlipSort from './flipSort';

class SortValueButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortStatus: false
    }

    this.handleSortButtonChange = this.handleSortButtonChange.bind(this);
    this.flipArrow = this.flipArrow.bind(this);
    this.pushStateUp = this.pushStateUp.bind(this);

  }

  handleSortButtonChange(e) {
    let sortStatus = this.state.sortStatus
    let name = e.target.name

    if (sortStatus === false) {
      sortStatus = "ascending"
    } else if (sortStatus === 'ascending') {
        sortStatus = 'descending'
    } else {sortStatus = false}

    this.setState({sortStatus: sortStatus}, () => this.pushStateUp(name))
  }

  pushStateUp() {
    console.log(name);
    // this.props.onSortButtonChange(name, sortStatus)
  }

  flipArrow(sortStatus) {
    switch (sortStatus) {
      case false:
        return null
      case 'ascending':
        return <span>▼</span>
      case 'descending':
        return <span>▲</span>
    }
  }

  render() {
    const sortValue = this.props.sortValue;
    const buttonName = this.props.name;
    const buttonValue = this.props.buttonValue;


    return (
      <div className="row sort-row">
        <div className="col">
          <button name={buttonName} className="sortButton" onClick={this.handleSortButtonChange}>
            {buttonValue} {this.flipArrow(this.state.sortStatus)}
          </button>
        </div>
      </div>
    )
  }
}


export default SortValueButton
