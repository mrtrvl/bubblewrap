import React, { Component } from 'react';
import Grid from './Grid';
import Counter from './Counter';
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
    return total - this.state.poppedCount;
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
        <Counter count={this.count()} />
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