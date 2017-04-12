import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';




class Root extends React.Component {
  render() {
    return(
      <div className="page">
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
