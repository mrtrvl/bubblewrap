import React, { Component } from 'react';
import whole from '../images/whole.png';
import popped from '../images/popped.png';

class Bubble extends Component {
  state = {
    popped: false
  }

  pop = () => {
    this.setState({ popped: true });
  }

  render() {
    return (
      <div onClick={()=>this.pop()}>
        {this.state.popped ? <img src={ popped } alt="Popped bubble"/>: <img src={ whole } alt="Whole bubble"/>}
        </div>
    )
  }
}

export default Bubble;