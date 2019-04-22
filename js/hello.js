


var script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@16/umd/react.development.js';
script1.type = 'text/javascript';
script1.crossOrigin = 'anonymous';
document.getElementsByTagName('head')[0].appendChild(script1);

var script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@16/umd/react-dom.development.js';
script2.type = 'text/javascript';
script2.crossOrigin = 'anonymous';
document.getElementsByTagName('head')[0].appendChild(script2);




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