import React from 'react';

const Counter = (props) => {
  if (props.count > 0) {
    return <h4 className="ui header">{`Bubbles left: ${props.count}`}</h4>;
  } else {
    return <h4 className="ui header">Well done!</h4>;
  }
}

export default Counter;