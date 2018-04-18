import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <hr />
        <h2>Automatic Clock: {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;

// ReactDOM.render(<Clock />, document.getElementById('root'));
