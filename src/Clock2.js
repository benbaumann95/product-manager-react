import React from 'react';

class Clock2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
    this.refreshTime = this.refreshTime.bind(this);
  }

  refreshTime() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>Manual Clock: {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.refreshTime}>Click to update time</button>
      </div>
    );
  }
}

export default Clock2;
