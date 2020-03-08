import React, { Component } from 'react';
import Grid from './Grid';
import Footer from './Footer';

class App extends Component {

  render() {
    return(
      <div className="ui container">
        <h1 className="ui diciding header">Simple online bubble wrap game using React</h1>
        <div className="ui content">
          <Grid />
        </div>
        <Footer />
      </div>
      );
  }
}

export default App;