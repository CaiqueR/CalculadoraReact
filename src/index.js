import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';
import './index.css'

ReactDOM.render(
<React.Fragment>
  <h1>Calculator</h1>
  <Calculator />
</React.Fragment>, document.getElementById('root'));

// If you want your Calculator to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
