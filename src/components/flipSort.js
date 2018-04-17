
import React, {Component} from 'react';

class FlipSort extends Component {
  constructor(props){
    super(props);

    this.handleFlipState = this.handleFlipState.bind(this);
  }
  handleFlipState() {
    this.props.onFlipChange();
  }

  render() {
    const flipState = this.props.flipState;
    const flipArrow = flipState ? (
      <span>▲</span>
    ) : (
      <span>▼</span>
    )
    return (
      <button onClick={this.handleFlipState} className="flip-arrow">{flipArrow}</button>
    )
  }
}


export default FlipSort
