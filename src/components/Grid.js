import React, { Component } from 'react';
import Bubble from './Bubble';

import './bubble.css';

class Grid extends Component {
  columns = this.props.columns;
  rows = this.props.rows;
  index = 0;

  createColumns = (columns) => {
    const column = [];
    for (let i = 0; i < columns; i++) {
      column.push(<div key={this.index ++} className="cell"><Bubble onBubbleClick={this.props.onBubbleClick} /></div>);
    }
    return column;
  }

  showBubbles = () => {
    const grid = []
    for (let i = 0; i < this.rows; i++) {
      grid.push(<div key={this.index ++} className="row">{this.createColumns(this.columns)}</div>);
    }
    return grid;
  }

  render() {
    return (
      <div className="ui two column centered grid">
        <div className="column">
          {this.showBubbles()}
        </div>
      </div>
    );
  }
}

export default Grid;