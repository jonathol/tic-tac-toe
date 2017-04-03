import React from "react";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      piece : ""
    }
  }

  _handleClick() {
    if (this.state.piece !== "X" && this.state.piece !== "O") {
      this.setState ({
        piece : this.props.current
      });
      this.props.switch();
    }
  }

  render() {
    return (

      <div className="cell" onClick={this._handleClick.bind(this)}>{this.state.piece}</div>
    );
  }
}

export default Cell;
