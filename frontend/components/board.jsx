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
    return(
      <div className="board">
        <Cell current={this.state.current}/>
        <Cell current={this.state.current}/>
        <Cell current={this.state.current}/>
        <Cell current={this.state.current}/>
        <Cell current={this.state.current}/>
        <Cell current={this.state.current}/>
        <Cell current={this.state.current}/>
        <Cell current={this.state.current}/>
        <Cell current={this.state.current}/>

      </div>
    );
  }

}

export default Board;
