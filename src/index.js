import React from 'react';
import ReactDOM from 'react-dom';
import App from './domain/app/index';
import './style/global.scss';

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
