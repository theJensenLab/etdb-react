
import React, {Component} from 'react';
import FlipSort from './flipSort';

class SortValueButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flipSort: false
    }

    this.handleSortButtonChange = this.handleSortButtonChange.bind(this);
    this.handleFlipState = this.handleFlipState.bind(this);

  }

  handleSortButtonChange(e) {
    this.props.onSortButtonChange(e.target.name);
    console.log(e.target.name);
    console.log(this.state.flipSort);
  }

  handleFlipState() {
    this.setState(prevState => ({
      flipSort: !prevState.flipSort
    }))
    console.log(this.state.flipSort)
  }


  render() {
    const sortValue = this.props.sortValue;
    const buttonName = this.props.name;
    //if the button is the same as the state selected
    const sortBool = (sortValue === buttonName);
    const buttonValue = this.props.buttonValue;

    const button = sortBool ? (
      <i><button name={buttonName} className="sortButton" onClick={this.handleSortButtonChange}>
        {buttonValue}
      </button></i>
    ) : (
      <button name={buttonName} className="sortButton" onClick={this.handleSortButtonChange}>
        {buttonValue}
      </button>);

    const flipSort = sortBool ? (
      <FlipSort onFlipChange={this.handleFlipState} flipState={this.state.flipSort} />
    ) : ( null)

    return (
      <div className="row">
        <div className="col-sm-10">
          {button}
        </div>
        <div className="col-sm-2">{flipSort}</div>
      </div>
    )
  }
}


export default SortValueButton
