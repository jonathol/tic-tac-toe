import React from "react";
import Cell from "./cell"

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      board : [["","",""],["","",""],["","",""]]
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



  render() {
    const coords = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
    const cells = coords.map((coord) =>
      <Cell
        current={this.state.current}
        coord={coord} key={coord.toString()}
        switch={this.switchCurrent.bind(this)}
        board={this.state.board}
        addToBoard={this.addToBoard.bind(this)}
      />
    );

    console.log(this.state.board);

    return(
      <div className="board">
        {cells}

      </div>
    );
  }

}

export default Board;
