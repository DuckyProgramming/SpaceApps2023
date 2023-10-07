import React from 'react';

class Button extends React.Component {
  handleClick = () => {
    window.open("http://localhost:3000/test")
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default Button;
