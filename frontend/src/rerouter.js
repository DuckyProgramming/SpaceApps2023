import React from 'react';

class Button extends React.Component {
  handleClick = () => {
    window.open("https://localhost:3000/test.html")
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
