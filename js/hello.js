'use strict';

const e = React.createElement;

class ClimateHandout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return 'happy earth day'
  }
}

const domContainer = document.querySelector('#climateHandout');
ReactDOM.render(e(ClimateHandout), domContainer);