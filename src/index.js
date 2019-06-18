import React from 'react';
import ReactDOM from 'react-dom';

import Game from './Game'
import Player from './Player'

const title = 'Semabit Card Game';

const App = props => {
    const game = new Game()
    console.log(game.getPlayers())

    const player = new Player('Beat')
    console.log(player.getPlayer())

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
