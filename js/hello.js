import {React} from 'https://unpkg.com/react@16/umd/react.development.js';
import {ReactDOM} from 'https://unpkg.com/react-dom@16/umd/react-dom.development.js'


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

const domContainer = document.querySelector('#climateHandout');
ReactDOM.render(e(ClimateHandout), domContainer);