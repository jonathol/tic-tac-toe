import React from 'react';
import ReactDOM from 'react-dom';
import Board from './game/board';




class Root extends React.Component {
  render() {
    return(
      <div>
        <Board />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
