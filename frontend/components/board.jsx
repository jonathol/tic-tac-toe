import React from "react";
import Cell from "./cell"

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ""
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



  render() {
    const coords = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
    const cells = coords.map((coord) =>
      <Cell current={this.state.current} coord={coord} key={coord.toString()} />
    );

    return(
      <div className="board">
        {cells}

      </div>
    );
  }

}

export default Board;
