
import React, {Component} from 'react';


class SortValueButton extends Component {
  constructor(props) {
    super(props);

    this.handleSortButtonChange = this.handleSortButtonChange.bind(this);

  }

  handleSortButtonChange(e) {
    this.props.onSortButtonChange(e.target.name);
    console.log(e.target);
  }


  render() {
    const sortValue = this.props.sortValue;
    const buttonName = this.props.name;
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

    return (
      <div className="row">
        <div className="col">
          {button}
        </div>
      </div>
    )
  }
}


export default SortValueButton
