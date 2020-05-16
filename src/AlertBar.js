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
      <p>dasda</p>
      <button onClick={this.hideBar}>dsada</button>
    </div>
    } else {
      return;
    }
  }
}

export default AlertBar;
