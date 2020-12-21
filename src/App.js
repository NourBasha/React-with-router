import Routes from './routes';
import React, {Component} from 'react';


class App extends Component {
  render(){
    return (
      <div >
        React
        {console.log("inside app component")}
        <Routes />
      </div>
    )
  }
 
}

export default App;
