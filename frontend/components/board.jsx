import React from "react";
import Cell from "./cell"

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      board : [["","",""],["","",""],["","",""]],
      moveCount : 0,
      resetCell: false
    }
  }

  componentDidMount() {
    this.setState({
      current: "X"
    });
  }

  switchCurrent() {
    if (this.state.current === "X") {
      this.setState({
        current : "O"
      });
    } else {
      this.setState({
        current : "X"
      });
    }
  }

  incrementMoveCount(){
    let count = this.state.moveCount;
    this.setState({
      moveCount : count+1
    });
  }

  addToBoard(coord, current) {
    let board = this.state.board;
    board[coord[0]][coord[1]] = current;
    this.setState({board});
  }

  checkWin(coord, board, current) {

    let ans = false;

    //check row
    for (var i = 0; i < 3; i++) {
      if (board[coord[0]][i] !== current ) {
        break;
      }
      if (i === 2) {
        ans = true;
      }
    }

    //check col
    for (var i = 0; i < 3; i++) {
      if (board[i][coord[1]] !== current ) {
        break;
      }
      if (i === 2) {
        ans = true;
      }
    }

    //check diag
    if(coord[0] === coord[1]){
        for(var i = 0; i < 3; i++){
            if(board[i][i] != current)
                break;
            if(i == 2){
                ans = true;
            }
        }
    }

    //check anti diag
    if(coord[0] + coord[1] === 2){
        for(var i = 0;i < 3;i++){
            if(board[i][2-i] != current)
                break;
            if(i == 2){
                ans = true;
            }
        }
    }
    return ans;
  }

  resetBoard() {
    this.setState({
      current: "X",
      board : [["","",""],["","",""],["","",""]],
      moveCount : 0,
      resetCell : true
    });
    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.pointerEvents = 'auto';
    }
  }

  changeReset() {
    this.setState({
      resetCell : false
    });
  }




  render() {
    const coords = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
    const cells = coords.map((coord) =>
      <Cell
        current={this.state.current}
        coord={coord} key={coord.toString()}
        switch={this.switchCurrent.bind(this)}
        board={this.state.board}
        addToBoard={this.addToBoard.bind(this)}
        checkWin={this.checkWin.bind(this)}
        moveCount={this.state.moveCount}
        incrementMoveCount={this.incrementMoveCount.bind(this)}
        resetCell={this.state.resetCell}
        changeReset={this.changeReset.bind(this)}
      />
    );



    return(
      <div className="board">
        {cells}
        <button onClick={this.resetBoard.bind(this)}>Reset!</button>
      </div>
    );
  }

}

export default Board;
