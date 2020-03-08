import React, { Component } from 'react';

import whole from '../images/whole.png';
import popped from '../images/popped.png';
import popAudio from '../audio/popping.mp3';

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popped: false
    }
    this.audio = new Audio(popAudio);
  }

  pop = async () => {
    if(!this.state.popped) {
      this.audio.play();
      await this.setState({ popped: true });
      this.props.onBubbleClick();
    }
  }

  render() {
    return (
      <div onClick={this.pop}>
        {this.state.popped ? <img src={ popped } alt="Popped bubble"/>: <img src={ whole } alt="Whole bubble"/>}
      </div>
    )
  }
}

export default Bubble;