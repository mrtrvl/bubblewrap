import React, { Component } from 'react';
import Grid from './Grid';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 10,
      columns: 10,
      poppedCount: 0
    };
  }

  count = () => {
    const total = this.state.rows * this.state.columns;
    return <span>{`Bubbles left: ${total - this.state.poppedCount}`}</span>
  }

  onBubbleClick = () => {
    this.setState(state => ({
      poppedCount: state.poppedCount + 1
    }));
  }

  render() {
    return(
      <div className="ui container">
        <h1 className="ui header">Simple online bubble wrap game using React</h1>
        <h4 className="ui header">{this.count()}</h4>
        <div className="ui content">
          <Grid
            onBubbleClick={this.onBubbleClick}
            rows={this.state.rows}
            columns={this.state.columns}
          />
        </div>
        <Footer />
      </div>
      );
  }
}

export default App;