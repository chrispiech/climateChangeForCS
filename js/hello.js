require('react.js');
require('reactDom.js')

// I assume that react has been imported by the host website.
const e = React.createElement;

class ClimateHandout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
    	'happy earth day'
    )
  }
}

// I assume that the host website has a div with this id.
const domContainer = document.querySelector('#climateHandout');
ReactDOM.render(e(ClimateHandout), domContainer);