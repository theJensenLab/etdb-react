
import React, {Component} from 'react';

class FlipSort extends Component {
  constructor(props){
    super(props);

    this.handleFlipSortChange = this.handleFlipSortChange.bind(this);
  }
  handleFlipSortChange() {
    this.props.onFlipSortChange();
  }

  render() {
    const flipSort = this.props.flipSort;
    const flipArrow = flipSort ? (
      <span>▲</span>
    ) : (
      <span>▼</span>
    )
    return (
      <button onClick={this.handleFlipSortChange} className="flip-arrow">{flipArrow}</button>
    )
  }
}


export default FlipSort
