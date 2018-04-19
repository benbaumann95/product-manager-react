import React from 'react';

class Test1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.message;
  }
}

export default Test1;
