
import React, {Component} from 'react';
import DatePicker from 'react-date-picker';

class InputSearchFor extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: new Date(),
      date1: new Date(),
      date2: new Date()
    }

    this.switchFor = this.switchFor.bind(this);
    this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateChange1 = this.handleDateChange1.bind(this);
    this.handleDateChange2 = this.handleDateChange2.bind(this);
  }

  handleAdvancedSearchChange(e){
    this.props.onHandleAdvancedSearchChange(e)
  }

  handleTextChange(e) {
    this.props.onHandleTextChange(e);
  }

  handleDateChange(date) {
    this.setState({ date: date })
    this.props.onDateChange(date)
  }

  handleDateChange1(date) {
    this.setState({ date1: date })
    this.props.onDateChange1(date)
  }

  handleDateChange2(date) {
    this.setState({ date2: date })
    this.props.onDateChange2(date)
  }

  switchFor(searchType, searchOn) {

    const defaultSearchFor = (
      <div className="row">
        <input value={this.props.textValue} className="input-field1-text" type="text" name="searchFor" onChange={this.handleTextChange} onBlur={this.handleAdvancedSearchChange}  />
      </div>
    );

    const searchBetween = (
      <div className="row">
        <input value={this.props.params.searchFor1} type="text" name="searchFor1" onChange={this.handleTextChange} onBlur={this.handleAdvancedSearchChange} placeholder="First value" />
        <input value={this.props.params.searchFor2} type="text" name="searchFor2" onChange={this.handleTextChange} onBlur={this.handleAdvancedSearchChange} placeholder="Second value" />
      </div>
    )

    const searchDate = (
      <DatePicker
        onChange={this.handleDateChange}
        value={this.state.date}
      />
    )

    const searchBetweenDate = (
      <div>
        <span>
          <DatePicker
            onChange={this.handleDateChange1}
            value={this.state.date1}
          />
        </span>
        <span>
          <DatePicker
            onChange={this.handleDateChange2}
            value={this.state.date2}
          />
        </span>
    </div>
    )

    if (searchOn === "date") {
      if (searchType === "between") {
        return searchBetweenDate;
      } else return searchDate;
    }

    if (searchOn === "tiltSingleDual") {
      return null;
    }

    switch (searchType) {
      case "":
      case "contains":
      case "startsWith":
      case "isExact":
      case "above":
      case "below":
        return defaultSearchFor;
      case "between":
        return searchBetween;
      default:
        return null;
    }
  }

  render() {
    return (
      <div>{this.switchFor(this.props.params.searchType, this.props.params.searchOn)}</div>
    )
  }
}


export default InputSearchFor
