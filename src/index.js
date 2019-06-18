import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Semabit Card Game';

const App = props => (
    <div>
        <h1>{title}</h1>
    </div>

)

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
