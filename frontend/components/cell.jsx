import React from "react";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      piece : ""
    }
  }

  _handleClick() {    
    this.setState ({
      piece : this.props.current
    });
  }

  render() {
    return (

      <div className="cell" onClick={this._handleClick.bind(this)}>{this.state.piece}</div>
    );
  }
}

export default Cell;
