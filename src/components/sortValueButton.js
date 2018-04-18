
import React, {Component} from 'react';
import FlipSort from './flipSort';

class SortValueButton extends Component {
  constructor(props) {
    super(props);

    this.handleSortButtonChange = this.handleSortButtonChange.bind(this);
    this.handleFlipSortChange = this.handleFlipSortChange.bind(this);

  }

  handleSortButtonChange(e) {
    this.props.onSortButtonChange(e.target.name);
  }

  handleFlipSortChange() {
    this.props.onFlipSortChange()
  }



  render() {
    const sortValue = this.props.sortValue;
    const buttonName = this.props.name;
    //if the button is the same as the state selected
    const sortBool = (sortValue === buttonName);
    const buttonValue = this.props.buttonValue;

    const button = sortBool ? (
      <b><button name={buttonName} className="sortButton" onClick={this.handleSortButtonChange}>
        {buttonValue}
      </button></b>
    ) : (
      <button name={buttonName} className="sortButton" onClick={this.handleSortButtonChange}>
        {buttonValue}
      </button>);

    const flipSort = sortBool ? (
      <FlipSort onFlipSortChange={this.handleFlipSortChange} flipSort={this.props.flipSort} />
    ) : ( null)

    return (
      <div className="row sort-row">
        <div className="col">
          {button}
        </div>
        <div className="col">{flipSort}</div>
      </div>
    )
  }
}


export default SortValueButton
