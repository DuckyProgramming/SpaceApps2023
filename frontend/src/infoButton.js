import React from 'react';

class InfoButton extends React.Component {
  handleClick = () => {
    window.open("http://localhost:3000/info")
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Info
      </button>
    );
  }
}

export default InfoButton;
