import React from 'react';
import ReactDOM from 'react-dom';

import Cards from './Cards'
import Game from './Game'
import Player from './Player'

const title = 'Semabit Card Game';

const App = props => {
    const game = new Game()
    game.getPlayers()

    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
