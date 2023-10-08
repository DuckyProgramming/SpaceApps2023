import React from 'react';

class MapButton extends React.Component {
  handleClick = () => {
    window.open("http://localhost:3000/map")
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Map
      </button>
    );
  }
}

export default MapButton;
