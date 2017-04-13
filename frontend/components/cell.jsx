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
      this.props.addToBoard(this.props.coord, this.props.current);

      this.setState ({
        piece : this.props.current
      });

      this.props.incrementMoveCount();

      let tempResult = this.props.checkWin(this.props.coord, this.props.board, this.props.current);
      if (tempResult) {
        setTimeout(function() {alert(this.state.piece + " wins!");}.bind(this),1);
        var cells = document.getElementsByClassName('cell');
        for (var i = 0; i < cells.length; i++) {
          cells[i].style.pointerEvents = 'none';
        }
      } else {
        if (this.props.moveCount === 8) {
          setTimeout(function() {alert("Tie game!");},1);
        }
      }

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
