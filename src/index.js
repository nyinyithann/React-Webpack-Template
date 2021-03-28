import React from 'react';
import ReactDOM from 'react-dom';
import App from './application/app/index';
import './style/global.scss';

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();
