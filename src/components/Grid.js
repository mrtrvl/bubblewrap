import React, { Component } from 'react';
import Bubble from './Bubble';

import './bubble.css';

class Grid extends Component {
  columns = 10;
  rows = 10;

  createColumns = (columns) => {
    const column = [];
    for (let i = 0; i < columns; i++) {
      column.push(<div className="Cell"><Bubble /></div>);
    }
    return column;
  }

  showBubbles = () => {
    const grid = []
    for (let i = 0; i < this.rows; i++) {
      grid.push(<div className="Row">{this.createColumns(this.columns)}</div>);
    }
    return grid;
  }

  render() {
    return (
      <div>{this.showBubbles()}</div>
    );
  }
}

export default Grid;