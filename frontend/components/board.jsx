import React from "react";
import Cell from "./cell"

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      board : [["","",""],["","",""],["","",""]],
      moveCount : 0
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

  addToBoard(coord, current) {
    let board = this.state.board;
    board[coord[0]][coord[1]] = current;
    this.setState({board});
  }

  checkWin(coord, board, current) {

    let moveCount = this.state.moveCount++;
    this.setState({
      moveCount : moveCount
    });

    //check row
    for (var i = 0; i < 3; i++) {
      if (board[coord[0]][i] !== current ) {
        break;
      }
      if (i === 2) {
        console.log(current + " wins!");
      }
    }

    //check col
    for (var i = 0; i < 3; i++) {
      if (board[i][coord[1]] !== current ) {
        break;
      }
      if (i === 2) {
        console.log(current + " wins!");
      }
    }

    //check diag
    if(coord[0] === coord[1]){
        for(var i = 0; i < 3; i++){
            if(board[i][i] != current)
                break;
            if(i == 2){
                console.log(current + " wins!");
            }
        }
    }

    //check anti diag
    if(coord[0] + coord[1] === 2){
        for(var i = 0;i < 3;i++){
            if(board[i][2-i] != current)
                break;
            if(i == 2){
                console.log(current + " wins!");
            }
        }
    }

    //check draw
    if(this.state.moveCount === (3^2 - 1)){
        console.log("Tie!");
    }

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

      />
    );



    return(
      <div className="board">
        {cells}
      </div>
    );
  }

}

export default Board;
