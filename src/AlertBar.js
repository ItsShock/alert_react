import React from 'react';

class AlertBar extends React.Component {
  constructor() {
    super();

    this.state = {
      isVisible: true
    }
  }

  hideBar = () => {

  }

  render() {
    if (this.state.isVisible) {
      return <div>
      <h1>5</h1>
      <button onClick={this.hideBar}>dsada</button>
    </div>
    } else {
      return;
    }
  }
}

export default AlertBar;
